// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueDisqus from "vue-disqus";
import "@fortawesome/fontawesome-free/css/all.css";
import "./css/all.css"

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component

  Vue.use(VueDisqus);
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify({
    icons: {
      iconfont: "fa"
    }
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
  });

  Vue.component("Layout", DefaultLayout);
}
