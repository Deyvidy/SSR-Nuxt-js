import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
    tapTolerance : 10 , 
    swipeTolerance : 30 , 
    longTapTimeInterval : 400 
} )