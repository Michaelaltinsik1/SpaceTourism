import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/assets/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
     siteData : data,
     currData : null
  },
  getters: {
  },
  mutations: {
    findData(state, payload){
      let pageKey = payload.page;
      let nameKey = payload.name;    
      state.currData = state.siteData[pageKey].find(element => element.name.toLowerCase() === nameKey);
    }
  },
  actions: {
    getData(context, payload){
      context.commit("findData", payload);
    }
  },
  modules: {
  }
})
