export default [
  {
    path: "/posts/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-posts-vue" */ "C:\\Users\\Daksh.DESKTOP-GEVIBRT\\Code\\dak.sh\\src\\pages\\Posts.vue")
  },
  {
    path: "/posts/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\Daksh.DESKTOP-GEVIBRT\\Code\\dak.sh\\src\\templates\\Post.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\Users\\Daksh.DESKTOP-GEVIBRT\\Code\\dak.sh\\src\\pages\\Contact.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Daksh.DESKTOP-GEVIBRT\\Code\\dak.sh\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Daksh.DESKTOP-GEVIBRT\\Code\\dak.sh\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Daksh.DESKTOP-GEVIBRT\\Code\\dak.sh\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

