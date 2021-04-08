<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-tabs v-model="tab">
        <v-tab href="#showall"> Show all </v-tab>
        <v-tab href="#latest"> Latest </v-tab>
        <v-tab href="#recentgoodsin"> Recent Goods In </v-tab>
        <v-tab href="#topsellers"> Top Sellers </v-tab>
        <v-tab href="#cbo"> CBO </v-tab>
        <v-tab href="#anotheruserful"> Another useful sort/layout </v-tab>
      </v-tabs>
      <v-tabs-items class="ml-4" :value="tab" style="width: 100%">
        <v-tab-item value="showall"> Show All </v-tab-item>
        <v-tab-item value="latest"> Latest </v-tab-item>
        <v-tab-item value="recentgoodsin"> Recent Goods In </v-tab-item>
        <v-tab-item value="topsellers">
          <top-sellers />
        </v-tab-item>
        <v-tab-item value="cbo"> CBO </v-tab-item>
        <v-tab-item value="anotheruserful">
          Another useful sort/layout
        </v-tab-item>
      </v-tabs-items>
    </v-layout>
  </v-container>
</template>

<script>
import TopSellers from "./products/TopSellers.vue";
export default {
  components: {
    TopSellers,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
