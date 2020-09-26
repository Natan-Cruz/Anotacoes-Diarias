import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

import indexComponent from "./views/index/index";
import editorComponent from "./views/editor/index";

const routes = [{
        path: "/",
        name: "index",
        component: indexComponent
    },
    {
        path: '/editor/:_id',
        name: "editor",
        component: editorComponent
    },
    {
        path: "*",
        redirect: "/"
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router