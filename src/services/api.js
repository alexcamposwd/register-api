import axios from 'axios'

const api = axios.create({
    baseURL: 'https://register-api-usefull.herokuapp.com/'
})

export default api