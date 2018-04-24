import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules';
Vue.use(Vuex)

// const getters = {
//     username: state => state.login.username,
//     role: state => state.login.role,
// };
const  state = {
    username: localStorage.getItem('ms_username')
};
const mutations = {
    add(state) {
        state.count++;
        console.log(state.count)
    },
    reduce(state) {
        state.count--;
    }
};
const actions ={
    addAction(context){
        console.log(context)
        context.commit('add')
    },
  
}
export default new Vuex.Store({
    state,
    mutations,
    actions


})