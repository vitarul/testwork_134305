export default function ( userService ) {
  const state = {
    list: {},
    detail: {},
  }

  const mutations = {
    SET_LIST (state, list) {
      state.list = list
    },
    SET_DETAIL_USER (state, data) {
      state.detail = data
    },
  }

  const actions = {
    async fetchUsers ({ commit }, page = 1) {
      const { data } = await userService.getList(page)
      commit('SET_LIST', data)

      return data
    },
    async fetchUser ({ commit }, id) {
      const { data } = await userService.getUser(id)
      commit('SET_DETAIL_USER', data)

      return data
    },
    async updateUser ({ commit, state }, payload) {
      const { data } = await userService.updateUser(state.detail.id, payload)
      commit('SET_DETAIL_USER', data)

      return data
    },
    async storeUser ({ commit }, payload) {
      const { data } = await userService.createUser(payload)
      commit('SET_DETAIL_USER', data)

      return data
    },
    async deleteUser ({ commit, state }) {
      await userService.deleteUser(state.detail.id)
      commit('SET_DETAIL_USER', {})
    },
  }

  const getters = {
    detail: ({ detail }) => detail,
    list: ({ list }) => list,
  }

  return {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
}
