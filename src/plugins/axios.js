import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://coursevue-13b5f.firebaseio.com/'

Vue.use ({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://coursevue-13b5f.firebaseio.com/'
        })
    }
})