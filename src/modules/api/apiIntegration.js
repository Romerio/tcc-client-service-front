const axios = require("axios");
const baseApiUrl = require("../main/constants").baseUrl + "/api/todos";

class ApiIntegration {

	async addNewTodo({description}) {
        try {
            const result = await axios.post(baseApiUrl, {description})

            return result ? result.data : null
        } catch(e) {
            throw e
        }
    }
    
    async removeTodoById(id) {
        try {
            const result = await axios.delete(`${baseApiUrl}/${id}`)

            return result ? result.data : null
        } catch(e) {
            throw e
        }
    }
    
    async updateTodo({id, done}) {
        try {
            const result = await axios.put(`${baseApiUrl}/${id}`, {done})

            return result ? result.data : null
        } catch(e) {
            throw e
        }
    }

	async getTodos({search, sort = '-createdAt'}) {
        try {
            const result = await axios.get(`${baseApiUrl}?sort=${sort}&${search}`)

            return result
        } catch(e) {
            throw e
        }
    }
}

module.exports = ApiIntegration;