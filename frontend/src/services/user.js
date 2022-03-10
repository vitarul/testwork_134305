const uri = 'users'

class UserService {
    constructor (apiService) {
        this.apiService = apiService
    }

    async getList (page = 1) {
        return await this.apiService.get(uri, { page: page })
    }

    async getUser (id) {
        return await this.apiService.get(`${uri}/${id}`)
    }

    async createUser (data) {
        return await this.apiService.post(`${uri}`, data)
    }

    async updateUser (id, data) {
        return await this.apiService.put(`${uri}/${id}`, data)
    }

    async deleteUser (id) {
        return await this.apiService.delete(`${uri}/${id}`)
    }
}

export default UserService
