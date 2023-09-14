import Vue from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/vue2";
import { InertiaProgress } from "@inertiajs/progress";

import { ZiggyVue } from "ziggy";
import { Ziggy } from "./ziggy";
import Buefy from 'buefy'

InertiaProgress.init();

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)
      .use(Buefy)
      .use(ZiggyVue, Ziggy)

      .component("Link", Link)
      .component("Head", Head)
      .mixin({ methods: { route } })

    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})
