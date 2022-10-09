<script>
  export default {
    name: "todoList",
    data() {
      return{
        new_Task:'',
        edit_Task:'',
        editId:null,
        tasks: []
      }
      
    },
    mounted() {
      this.getData()
    },

    methods: {
      async getData(){
        const response = await axios.get("http://localhost:5000");
        this.tasks = response.data
      },

      async newTask(){
        const payload ={
          description: this.new_Task
        }
        const response = await axios.post('http://Localhost:5000', payload)

        this.tasks.push({
          description: this.new_Task
        })
        this.new_Task=''
        this.getData()
      },

      async deleteTask(task){
        const response = await axios.delete(`http://localhost:5000/${task._id}`)

        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
      },

      edit(task){
        this.editId = task._id,
        this.edit_Task = task.description
      },

      async updateTask(task){
        const payload={
          description:this.edit_Task
        }

        const response = await axios.put(`http://localhost:5000/${task._id}`, payload)
        this.getData()
        this.cancel()
      },

      cancel(){
        this.editId='',
        this.edit_Task=''
      }
    }
  }
</script>

<template>
    <h1 class="app-header">TO DO LIST</h1>

    <div class="add-task">
        <input type="text" autocomplete="off" placeholder="Input Task Baru" class="task-input" v-model="new_Task" @keyup.enter="newTask">
        <button class="submit-task" @click="newTask">&#10133;</button>
    </div>
    
    <ul class="task-list">
      <li class="task-list-item" v-for="task in tasks" :key="task._id">
        <input type="text" class="task-inputEdit" v-model="edit_Task" v-if="editId === task._id">
        
        <label class="task-list-item-label" v-else>
          <input type="checkbox" class="check">
          <span>{{task.description}}</span>
        </label>

        <span v-if="!editId" class="noEdit">
            <span class="edit-btn" @click="edit(task)">&#x1F58A;</span>
            <span class="del-btn" @click="deleteTask(task)">&#128465;</span>
        </span>
        <span v-if="editId === task._id" class="Edit">
            <span class="update-btn" @click="updateTask(task)"> &#x2714;</span>
            <span class="cancel-btn" @click="cancel()">&#x2716;</span>
        </span>
      </li>
    </ul>
</template>
