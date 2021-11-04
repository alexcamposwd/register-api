<template>
  <div class="card-list">
    <div class="card-table">
      <table>
        <thead>
          <tr>
            <th id="name">Name API</th>
            <th id="description">Description</th>
            <th id="category">Category</th>
            <th id="authentication">Auth</th>
            <th id="url">URL</th>
            <th id="edit">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of registers" :key="item.id">
            <td id="name">{{ item.name }}</td>
            <td id="description">{{ item.description }}</td>
            <td id="category">{{ item.category }}</td>
            <td id="authentication">{{ item.authentication }}</td>
            <td id="url" ><a  :href= "`${item.url}`" >{{ item.url }}</a></td>
            <td id="edit">
              <button class="btn-trash">
                <img 
                src="../assets/icon_trash.png" 
                alt="icon-trash" 
                class="icon-btn-trash"
                @click="$emit('deleteRegister', item._id)"
                >
              </button>
              <button class="btn-pencil">
                <img 
                src="../assets/icon_pencil.png" 
                alt="icon-pencil" 
                class="icon-btn-pencil"
                @click="$emit('updateRegister', item._id)"
                >
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  emits:['updateRegister', 'deleteRegister'],

  props: {
    register: { type: Object },
    registers: { type: Object },
    edit: { type: Boolean },
    editRegister: { type: String },
  },
}
</script>

<style scoped>
.app {
  width: 100%;
  top: 0;
  left: 0;
}

.card-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.card-table {
  width: 90%;
  min-width: 350px;
  padding: 5px;
  border: 1px solid var(--color-14);
  border-radius: 3px;
}

.card-table > table {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 350px;
  padding: 5px;
  border: 1px solid var(--color-14);
  justify-content: center;
  align-items: center;
}

.card-table > table > thead,
.card-table > table > tbody {
  width: 100%;
  margin-bottom: 5px;
}

.card-table > table > thead > tr,
.card-table > table > tbody > tr {
  display: flex;
  width: 100%;
}

.card-table > table > thead > tr > th {
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 3px;
  color: var(--color-13);
  text-align: center;
  text-transform: uppercase;
  border: 1px solid var(--color-14);
}

.card-table > table > tbody > tr > td {
  height: 50px;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  color: var(--color-12);
  text-align: center;
  margin: auto;
  padding-top: 5px;
  border-right: 1px solid var(--color-14);
  border-bottom: 1px solid var(--color-14);
}

#url {
  min-width: 300px;
}

.card-table > table > thead > tr > #name,
.card-table > table > tbody > tr > #name {
  width: 15%;
}
.card-table > table > thead > tr > #description,
.card-table > table > tbody > tr > #description {
  width: 33%;
}
.card-table > table > thead > tr > #category,
.card-table > table > tbody > tr > #category {
  width: 13%;
}
.card-table > table > thead > tr > #authentication,
.card-table > table > tbody > tr > #authentication {
  width: 4%;
}
.card-table > table > thead > tr > #url,
.card-table > table > tbody > tr > #url {
  width: 25%;
}
.card-table > table > thead > tr > #edit,
.card-table > table > tbody > tr > #edit {
  width: 10%;
  min-width: 80px;
}

.btn-trash {
  border: none;
  outline: none;
  border: 1px solid transparent;
  border-radius: 3px;
  background: var(--color-42);
  cursor: pointer;
}

.btn-pencil {
  border: none;
  outline: none;
  border: 1px solid transparent;
  border-radius: 3px;
  background: var(--color-35);
  cursor: pointer;
  margin-left: 10px;
}

.icon-btn-trash,
.icon-btn-pencil {
  width: 17px;
  height: 15px;
  margin: 5px;
  filter: invert(1);
}
</style>