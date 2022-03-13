import Vue from "vue";
import Router from "vue-router";

const Home = () => import(`./views/Home.vue`);
const Linux = () => import(`./views/Linux.vue`);
const Choose = () => import(`./views/Choose.vue`);
const Grep = () => import(`./views/linux/Grep.vue`);
const Terminal = () => import(`./components/Terminal.vue`);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: `/`,
      name: `home`,
      component: Home
    },
    {
      path: `/Linux`,
      name: `Linux`,
      component: Linux
    },
    {
      path: `/choose`,
      name: `Choose`,
      component: Choose
    },
    {
      path: `/linux/grep`,
      name: `grep`,
      component: Grep
    },
    {
      path: `/terminal`,
      name: `terminal`,
      component: Terminal
    }
  ],
  mode: `history`
});
