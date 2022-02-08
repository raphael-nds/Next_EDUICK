import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333/'
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
})

// api.interceptors.request.use((config) => {
//   console.log('config', config)
//   return config
// })
// if (token) {
//   api.defaults.headers['Authorization'] = `Bearer ${token}`
// }
