<template>
  <div class="card">
    <div class="card-header">Создать пользователя</div>

    <div class="card-footer">
      <div class="mb-3">
        <label for="email" class="form-label">Email адрес</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.email">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label>
        <input type="text" class="form-control" id="name" rows="3" v-model="user.name">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="text" class="form-control" id="password" rows="3" v-model="user.password">
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="form-label">Подтверждение пароля</label>
        <input type="text" class="form-control" id="password_confirmation" rows="3" v-model="user.password_confirmation">
      </div>
    </div>

    <div class="card-footer">
      <button class="btn btn-info" @click="handleCreate(user)">Добавить</button>
      <button class="btn btn-danger" @click="router.push({name: 'users'})">Отменить</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "CreateUserView",

  components: {},

  setup () {
    const store = useStore()
    const router = useRouter()

    const user = ref({
      email: '',
      name: '',
      password: '',
      password_confirmation: '',
    })

    const storeUser = async (user) => await store.dispatch('user/storeUser', user)

    const handleCreate = async (user) => {
      const newUser = await storeUser(user)
      await router.push({name: 'user-show', params: { id: newUser.id }})
    }

    return { user, handleCreate, router }
  }}
</script>
