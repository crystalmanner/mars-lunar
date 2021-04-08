import Navigation1 from '../components/core/NavigationDrawer1.vue';
import Navigation2 from '../components/core/NavigationDrawer2.vue';
import Navigation3 from '../components/core/NavigationDrawer3.vue';
import Navigation4 from '../components/core/NavigationDrawer4.vue';
import Navigation5 from '../components/core/NavigationDrawer5.vue';

function setupComponents(Vue) {
  Vue.component('navigation1', Navigation1);
  Vue.component('navigation2', Navigation2);
  Vue.component('navigation3', Navigation3);
  Vue.component('navigation4', Navigation4);
  Vue.component('navigation5', Navigation5);
}

export {
  setupComponents
}
