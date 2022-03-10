<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="item in userList.data">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.email }}</td>
      <td>
        <router-link :to='`/users/${item.id}`'>Изменить</router-link>
      </td>
    </tr>

    <tr>
      <td>
        <button class="btn btn-success" @click="router.push({name: 'user-create'})">Добавить</button>
      </td>
      <td colspan="3">
        <Paginator :item-list="userList" @onpageclick="handlePageClick"></Paginator>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { onMounted, computed } from 'vue'
import Paginator from "../components/Paginator.vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "UsersView",

  components: {Paginator},

  setup () {
    const store = useStore()
    const router = useRouter()

    const userList = computed(() => store.getters['user/list'])
    const fetchUsers = async (page) => await store.dispatch('user/fetchUsers', page)

    const handlePageClick = async (page) => {
      await fetchUsers(page)
    }

    onMounted(async () => {
      await fetchUsers()
    })

    return { userList, handlePageClick, router }
  }}
</script>
