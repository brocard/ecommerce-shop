import axios from 'axios';
import Vue from 'vue';

const Bus = new Vue();

export default {
    methods: {
        http() {
            let instance = axios.create();
            instance.interceptors.response.use(
                response => response,
                error => {
                    if (error.response.status === 500) {
                        Bus.$emit('httpError', error.response.data.message);
                    }
                    return Promise.reject(error);
                }
            );
            return instance;
        }
    }
}
