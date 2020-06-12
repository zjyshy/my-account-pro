import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import Bill from "@/views/Bill.vue";
import Labels from "@/views/Labels.vue";
import AddBill from "@/views/AddBill.vue";
import Set from "@/views/Set.vue";
import Statistics from "@/views/Statistics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:"/home"

  },
  {
    path:"/home",
    component:Bill

  },
  {
    path: '/labels',
    component:Labels
  },
  {
    path: '/add',
    component: AddBill
  },
  {
    path: "/set",
    component: Set
  },
  {
    path: '/statistics',
    component: Statistics
  }

];


// const routes: Array<RouteConfig> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ];

const router = new VueRouter({
  routes
});

export default router;
