import Vue from 'vue';
import Vuex from 'vuex';

//1、安装插件
Vue.use(Vuex);

import mutations from './mutations.js' //导入mutations 对象
import actions from './actions.js'  // 导入actions 对象

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations,
    actions,
    modules: {}
});