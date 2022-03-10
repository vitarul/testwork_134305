import { createStore } from "vuex"
import user from './modules/user';
import UserService from '../services/user'
import ApiService from '../services/api'

const apiService = new ApiService()
const userService = new UserService(apiService)

const store = createStore({})
store.registerModule('user', user(userService))

export default store
