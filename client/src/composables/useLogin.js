import axios from 'axios'
import { ref } from 'vue'

const login = async (data) => {
    try {
        const result = await axios.post('http://localhost:8080/api/v1/login', data)
        if (result.data.token) return result.data.token

    } catch (error) {
        return {
            mess: 'lost token from clinet! ',
            status: false,
            error
        }
    }
}

const useLogin = () => {
    const videoList = ref([])
    // get All video from server 

    async function onLogin({ username, password }) {
        const result = await login({ username, password })
        if (result.status === false) {
            return false
        }

        localStorage.setItem('token', result)
        return true

    }

    return {
        videoList, onLogin
    }
}

export default useLogin
