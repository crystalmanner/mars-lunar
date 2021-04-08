<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="d-flex flex-row" lg2 md4 sm4>
        <v-combobox
          label="Filter products"
          v-model="product"
          :items="productList"
          clearable
        ></v-combobox>
      </v-flex>
      <v-flex class="d-flex flex-row" lg6 md4 sm4>
        <v-combobox
          label="Status"
          v-model="status"
          :items="statusList"
          multiple
          clearable
        ></v-combobox>
      </v-flex>
      <v-flex class="d-flex flex-row" lg2 md4 sm4>
        <v-select
          label="Show/hide columns"
          v-model="columnsVisibility"
          :items="['Show columns', 'Hide columns']"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-card>
        <v-card-title>
          Products
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="products" :search="search">
          <template v-slot:item.image_url="item">
            <v-avatar size="42">
              <img :src="item.value" alt="avatar" />
            </v-avatar>
          </template>
          <template v-slot:item.status="item">
            <v-chip class="warning">{{ item.value }}</v-chip>
          </template>
          <template v-slot:item.stock_message="item">
            <v-chip class="green white--text">{{ item.value }}</v-chip>
          </template>
        </v-data-table>
      </v-card>
      <!-- </v-container> -->
    </v-layout>
  </v-container>
</template>

<script>
import products from "../../dummy_data/products";

export default {
  mounted() {
    this.load();
  },
  data() {
    return {
      product: null,
      productList: ["product 1", "product 2", "product 3", "Aproduct C"],
      status: [],
      statusList: ["NORMAL", "PENDING NOT IN USE", "NOT IN USE"],
      columnsVisibility: null,
      products,
      search: "",
      loading: false,
      headers: [
        {
          value: "image_url",
          align: "left",
          sortable: false,
        },
        {
          text: "Product",
          value: "product_name",
          align: "left",
          sortable: true,
        },
        {
          text: "Status",
          value: "status",
          align: "left",
          sortable: true,
        },
        {
          text: "Stock message",
          value: "stock_message",
          align: "left",
          sortable: true,
        },
        {
          text: "T7",
          value: "sales7",
          align: "left",
          sortable: true,
        },
        {
          text: "T14",
          value: "sales14",
          align: "left",
          sortable: true,
        },
        {
          text: "T30",
          value: "sales30",
          align: "left",
          sortable: true,
        },
      ],
    };
  },
  // computed: {
  //   // Irrelevant - just was for something else in the project
  //   filteredProjects() {
  //     const excludedIds = {};
  //     for(const excludedId of this.excludedIds) {
  //       excludedIds[excludedId] = 0;
  //     }
  //     return this.products.filter(product => !Object.prototype.hasOwnProperty.call(excludedIds, project.id));
  //   }
  // },
  methods: {
    async load() {
      // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      // if (res && res.data) {
      //   this.users = res.data;
      // }
      // console.log(this.users)
    },
    // async fetchProjects() {
    //   this.loading = true;
    //   try {
    //     const { data } = await projects.search(this.search, this.pageLimit);
    //     this.projects = data.results;
    //   } catch (err) {
    //     console.error(`Failed to search projects: ${err}`);
    //     this.$toast.error("Failed to search projects table!");
    //   }
    //   this.loading = false;
    // },
  },
};
</script>

<style>
</style>