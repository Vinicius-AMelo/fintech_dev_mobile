import axios from 'axios'

// Criando uma instância personalizada do Axios
const api = axios.create({
	baseURL: 'https://serverfintechmobile-production.up.railway.app',
})

export default api
