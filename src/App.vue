<template>
  <div class="app">
    <div class="navbar">
      <h1 class="title">List of Useful API's</h1>
    </div>
    <div class="main">
      <div class="card-form">
        <div class="card-body">
          <form @submit.prevent="sendRegister">
            <div class="form-group">
              <input type="text" 
                placeholder="Name API" 
                class="control"
                v-model="register.name"
              >
            </div>
            <div class="form-group">
              <textarea type="text" 
                placeholder="Description" 
                class="control" rows="2" 
                maxlength="100"
                style="resize: none;" 
                v-model="register.description"
              ></textarea>
            </div>
            <div class="form-group double-inpt">
              <input type="text" 
                placeholder="Category" 
                class="control"
                v-model="register.category"
              >
              <input type="text" 
                placeholder="Authentication" 
                class="control"
                maxlength="3"
                v-model="register.authentication"
              >
            </div>
            <div class="form-group">
              <input type="text" 
                placeholder="URL" 
                class="control"
                v-model="register.url"
              >
            </div>
            <div class="btn-group">
              <template v-if="edit === false">
                <button class="btn-primary">
                  Save
                </button>                  
             </template>
             <template v-else> 
                <button class="btn-primary">
                  Update
                </button>                  
              </template>
            </div>
          </form>
        </div>
      </div>
      <List 
        @update-register= "updateRegister"
        @delete-register= "deleteRegister"
        :registers= "registers"
        :edit= "edit"
        :editRegister= "editRegister"
        :register= "register"
      />
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'
import api from './services/api'

class API {
  constructor(name, description, category, authentication, url) {
    this.name = name
    this.description = description
    this.category = category
    this.authentication = authentication
    this.url = url
  }
}

export default {
  name: 'App',

  components: {
    List
  },

  data() {
    return {
      register: new API(),
      registers: [],
      edit: false,
      editRegister: '',
    }
  },

  created() {
    this.getRegister()
  },

  methods: {
    
    async getRegister() {
      await api.get(`/register`)
        .then((res) => { this.registers = res.data })
    },

    async sendRegister() {
      if(this.edit === false) {
        const response = await api.post('/register', this.register)
        this.register = response.data 
        this.getRegister()
      } else {
        const response = await api.put(`/register/`+ this.editRegister, this.register)
        this.register = response 
        this.getRegister()
        this.edit = false
      }
      this.register = new API()
    },
  
    async deleteRegister(id) {
      const response = await api.delete(`/register/` + id)
      this.register = response.data
      this.getRegister()
    },

    async updateRegister(id) {
      await api.get(`/register/` + id)
      .then((res) => { 
        this.register = res.data
        this.editRegister = id
        this.edit = true
      })
    }
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  top: 0;
  left: 0;
}

.navbar {
  width: 100%;
  height: 80px;
  padding: 5px;
  margin-top: 20px;
}

.title {
  font-family: var(--font-family);
  font-size: 35px;
  font-weight: 600;
  font-style: italic;
  color: var(--color-41);
  text-align: center;
  margin-top: 5px;
  text-transform: uppercase;
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
  
.card-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.card-body {
  width: 90%;
  padding: 5px;
  border: 1px solid var(--color-14);
  border-radius: 3px;
  margin-bottom: 10px;
}

.form-group {
  width: 100%;
  padding: 3px;
}

.double-inpt {
  display: flex;
}

#app > div > div.main > div.card-form > div > form > div.form-group.double-inpt > input:nth-child(2) {
  margin-left: 7px;
}

#app > div > div.main > div.card-form > div > form > div:nth-child(2) {
  margin-bottom: -6px;
}

.control {
  width: 100%;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 300;
  padding: 3px;
  padding-left: 7px;
  border: 1px solid var(--color-14);
  border-radius: 3px;
  outline: none;
}

.btn-group {
  display: flex;
  background: #fff;
  margin: 3px;
  justify-content: center;
}

.btn-primary {
  width: 300px;
  height: 30px;
  display: inline-block;
  font-family: var(--font-family);
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-size: 17px;
  border-radius: 5px;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  cursor: pointer;
}
 
</style>