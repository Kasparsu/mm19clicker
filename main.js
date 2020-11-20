import Vue from 'vue/dist/vue.common.js';
import 'bulma';

import Clicker from "./components/Clicker";

Vue.component('clicker', Clicker);

let App = new Vue({
    el: '#app'
})
