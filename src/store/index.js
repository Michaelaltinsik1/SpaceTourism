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
    findPlanetData(state, payload){
      let pageKey = payload.page;
      let nameKey = payload.name;
      console.log("pageKey: ", pageKey);
      console.log("nameKey: ", nameKey);
      
      state.currData = state.siteData[pageKey].find(element => element.name.toLowerCase() === nameKey);
    }
  },
  actions: {
    getPlanetData(context, payload){
      context.commit("findPlanetData", payload);
    }
  },
  modules: {
  }
})
