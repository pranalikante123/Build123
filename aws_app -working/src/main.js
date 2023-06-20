import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueBlocksTree from 'vue3-blocks-tree';
import 'vue3-blocks-tree/dist/vue3-blocks-tree.css';
import VueTreeList from 'vue-tree-list'


let defaultoptions = {treeName:'blocks-tree'}


createApp(App).use(router).use(VueBlocksTree,defaultoptions).use(VueTreeList).mount("#app");
