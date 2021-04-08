<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list dense class="left-panel-list" shaped>
      <v-list-group :value="true" prepend-icon="mdi-view-dashboard">
        <template v-slot:activator>
          <v-list-item-title>Purchase Orders</v-list-item-title>
        </template>
        <v-list-item link>
          <v-list-item-title @click="changeRoute('AllPOs', 1)">
            All POs</v-list-item-title
          >
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Create PO</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-list-group :value="false" prepend-icon="mdi-view-dashboard">
        <template v-slot:activator>
          <v-list-item-title>Needs Gen</v-list-item-title>
        </template>
        <v-list-item link>
          <v-list-item-title>All Needs</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Creat Needs</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <v-divider></v-divider>
    </v-list>
    <v-divider></v-divider>
    <v-list-item class="px-2">
      <v-btn class="ml-auto" icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 1,
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      mini: false,
    };
  },
  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;
      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.left-panel-list {
  height: calc(100vh - 115px);
}
</style>