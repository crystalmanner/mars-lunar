<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 hidden-md-and-up"
            contain
            src="./assets/img/fusion-logo.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="./assets/img/fusion-logo-name.png"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>
        <v-tabs align-with-title class="d-flex top-navs">
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="topTab in topTabs"
            :key="topTab.id"
            :title="topTab"
            @click="changeTab(topTab.id)"
          >
            {{ topTab.text }}
          </v-tab>
        </v-tabs>
      </v-app-bar>

      <v-flex class="d-flex fill-height">
        <v-card>
          <navigation1 v-if="tab == 1" />
          <navigation2 v-if="tab == 2" />
          <navigation3 v-if="tab == 3" />
          <navigation4 v-if="tab == 4" />
          <navigation5 v-if="tab == 5" />
        </v-card>
        <v-container class="right-pane mx-2">
          <router-view />
        </v-container>
      </v-flex>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      tab: 1,
      topTabs: [
        {
          id: 1,
          text: "Products & Categories",
        },
        {
          id: 2,
          text: "Purchasing",
        },
        {
          id: 3,
          text: "Inventory",
        },
        {
          id: 4,
          text: "Orders",
        },
        {
          id: 5,
          text: "Admin",
        },
      ],
    };
  },
  methods: {
    changeTab(val) {
      this.tab = val;
    },
  },
};
</script>

<style scoped>
</style>