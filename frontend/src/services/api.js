import axios from 'axios'

class ApiService {
    constructor () {
        this.client = axios.create({
            baseURL: '/api/',
        })
    }

    get (url, params) {
        return this.client.get(url, { params })
    }

    post (url, data) {
        return this.client.post(url, data)
    }

    put (url, data) {
        return this.client.put(url, data)
    }

    delete (url) {
        return this.client.delete(url)
    }

    patch (url, data) {
        return this.client.patch(url, data)
    }
}

export default ApiService
