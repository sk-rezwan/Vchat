import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDzOZxV9A8NDQwyI9y7y6GAKdbf9Y-n8rU",
  authDomain: "vchat-2dd8d.firebaseapp.com",
  databaseURL: "https://vchat-2dd8d.firebaseio.com",
  projectId: "vchat-2dd8d",
  storageBucket: "vchat-2dd8d.appspot.com",
  messagingSenderId: "265792822742",
  appId: "1:265792822742:web:7f0ff0349c706620a69877",
  measurementId: "G-SBNW1WWRFX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

window.db = db; //can access from anywhere

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
