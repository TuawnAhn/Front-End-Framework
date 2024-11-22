import axios from 'axios'
const apiConfig = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 200000,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default apiConfig
