import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// function getRouteComponent(path_file) {
//     return "./components/backend/" + path_file + "Component.vue";
// }
function setComponent(path_file) {
    const route_path = "./components/frontend/pages/" + path_file + "Component.vue";
    return import ("" + route_path);
}


const routes = [

    { path: "*", component: () => setComponent("error/404") },

    {
        path: "/",
        redirect: { path: '/home' }
    },
    { path: "/home", component: () => setComponent("dashboard/Home"), name: "Home" },
    { path: "/profile", component: () => setComponent("dashboard/profile/Profile"), name: "Profile" },
    { path: "/feed", component: () => setComponent("dashboard/feed/Feed"), name: "Feed" },
    { path: "/settings", component: () => setComponent("settings/Setting"), name: "Setting" },
    { path: "/explore", component: () => setComponent("explore/Explore"), name: "Explore" }

]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active" // short for `
});

router.beforeResolve((to, from, next) => {
    //
    next();
});

router.afterEach((to, from) => {
    // setTimeout(function() { $('.page-loader-wrapper').fadeOut(); }, 50);
});
export default router;
