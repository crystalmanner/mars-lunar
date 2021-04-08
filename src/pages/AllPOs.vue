<template>
  <v-flex class="mx-4">
    <v-layout row wrap>
      <h2>All Purchase Orders</h2>
      <div class="d-flex ml-auto align-center">
        <span class="mr-2">Go to PO:</span>
        <v-text-field label="Enter PO Number" />
        <v-btn class="primary mx-2"> Go </v-btn>
      </div>
    </v-layout>
    <v-layout row wrap>
      <v-tabs v-model="tab">
        <v-tab href="#showall"> Show all </v-tab>
        <v-tab href="#overdue_etas"> Overdue ETAs </v-tab>
      </v-tabs>
      <v-tabs-items class="ml-4" :value="tab" style="width: 100%">
        <v-tab-item value="showall"> <show-all /> </v-tab-item>
        <v-tab-item value="overdue_etas"> Overdue ETAs </v-tab-item>
      </v-tabs-items>
    </v-layout>
  </v-flex>
</template>

<script>
import ShowAll from "./allpos/ShowAll.vue";
export default {
  components: {
    ShowAll,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
