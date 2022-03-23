import Vue from 'vue'
import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 450,
    tablet: 850,
    desktop: Infinity,
  },
  defaultBreakpoint: 'mobile' // customize this for SSR
})