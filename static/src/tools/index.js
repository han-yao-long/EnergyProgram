import axios from 'axios';
export default {
    install (Vue) {
        Object.defineProperty(Vue.prototype, '$axios', {
            value: axios
        });
    }
};