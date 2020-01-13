import axios from 'axios'


const service = axios.create({
    baseURL: 'http://194.146.43.105/api/admin',
    timeout: 5000 
})

service.interceptors.request.use(
    config => {
      // do something before request is sent
  
    //   if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['token'] = 'token'
    //   }
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
)

export default service;