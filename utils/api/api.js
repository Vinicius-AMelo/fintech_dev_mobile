import axios from 'axios'

// Criando uma instância personalizada do Axios
const api = axios.create({
	baseURL: process.env.API_ROUTE,
})

export default api
