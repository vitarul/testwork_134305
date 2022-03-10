<template>
  <div class="card">
    <div class="card-header">Изменить пользователя</div>

    <div class="card-footer">
      <div class="mb-3">
        <label for="email" class="form-label">Email адрес</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.email">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label>
        <input type="text" class="form-control" id="name" rows="3" v-model="user.name">
      </div>
    </div>

    <div class="card-footer">
      <button class="btn btn-info" @click="handleUpdate(user)">Сохранить</button>
      <button class="btn btn-danger" @click="handleDelete(user.id)">Удалить</button>
      <button class="btn btn-secondary float-end" @click="router.push({name: 'users'})">Отмена</button>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: "UserView",

  components: {},

  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const fetchUser = async (id) => await store.dispatch('user/fetchUser', id)

    watch(
        () => route.params.id,
        async newId => {
          await fetchUser(newId)
        }
    )

    const user = computed(() => store.getters['user/detail'])
    const updateUser = async (user) => await store.dispatch('user/updateUser', {
      email: user.email,
      name: user.name,
    })
    const deleteUser = async (id) => await store.dispatch('user/deleteUser', id)

    const handleUpdate = async (user) => {
      await updateUser(user)
    }

    const handleDelete = async (id) => {
      await deleteUser(id)
      await router.push({name: 'users'})
    }

    onMounted(async () => {
      await fetchUser(route.params.id)
    })

    return { user, handleUpdate, handleDelete, router }
  }}
</script>
