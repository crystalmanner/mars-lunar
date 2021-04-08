<template>
  <v-container>
    <v-row row wrap>
      <v-flex class="pa-2" lg3 md4 sm4>
        <v-text-field
          label="Filter products"
          v-model="product"
          clearable
        ></v-text-field>
      </v-flex>
      <v-flex class="pa-2" lg4 md4 sm4>
        <v-select
          v-model="selectedHeaders"
          :items="headers"
          label="Show/Hide Columns"
          multiple
          outlined
          return-object
        >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index < 2">
              <span>{{ item.text }}</span>
            </v-chip>
            <span v-if="index === 2" class="grey--text caption"
              >(+{{ selectedHeaders.length - 2 }} others)</span
            >
          </template>
        </v-select>
      </v-flex>
    </v-row>
    <v-layout row wrap>
      <v-card style="min-width: 100%">
        <v-data-table
          class="tbl-table"
          :headers="showHeaders"
          :items="all_purchase_orders"
          :search="search"
        >
          <template v-slot:item.stockMessage="item">
            <v-chip v-if="item.value == 'In stock'" class="green">{{
              item.value
            }}</v-chip>
            <v-chip v-if="item.value == 'Due today'" class="warning">{{
              item.value
            }}</v-chip>
            <v-chip
              v-if="item.value != 'In stock' && item.value != 'Due today'"
              class="primary"
              >{{ item.value }}</v-chip
            >
          </template>
        </v-data-table>
      </v-card>
      <!-- </v-container> -->
    </v-layout>
  </v-container>
</template>

<script>
import all_purchase_orders from "../../dummy_data/all_purchase_orders";

export default {
  mounted() {
    this.load();
  },
  data() {
    return {
      product: null,
      productList: [
        "Buying Team",
        "ETA Date",
        "Supplier Name",
        "Product Name",
        "Product ID",
        "Purchase Order ID",
      ],
      status: [],
      selectedHeaders: [],
      all_purchase_orders,
      search: "",
      loading: false,
      headers: [
        {
          text: "Closed PO",
          value: "closedPo",
          align: "left",
          sortable: true,
        },
        {
          text: "Part Received",
          value: "partReceived",
          align: "left",
          sortable: true,
        },
        {
          text: "BookedIn",
          value: "bookedIn",
          align: "left",
          sortable: true,
        },
        {
          text: "IsStrategic",
          value: "isStrategic",
          align: "left",
          sortable: true,
        },
        {
          text: "Price Changed",
          value: "priceChanged",
          align: "left",
          sortable: true,
        },
        {
          text: "New Prodduct",
          value: "newProduct",
          align: "left",
          sortable: true,
        },
        {
          text: "Stock Message",
          value: "stockMessage",
          align: "left",
          sortable: true,
        },
        {
          text: "EAN",
          value: "EAN",
          align: "left",
          sortable: true,
        },
        {
          text: "Supplier",
          value: "supplier",
          align: "left",
          sortable: true,
        },
        {
          text: "Supplier PartNumber",
          value: "supplierPartNumber",
          align: "left",
          sortable: true,
        },
        {
          text: "Product ID",
          value: "productId",
          align: "left",
          sortable: true,
        },
        {
          text: "Product Name",
          value: "productName",
          align: "left",
          sortable: true,
          class: "tbl-column",
        },
        {
          text: "Currency",
          value: "currency",
          align: "left",
          sortable: true,
        },
        {
          text: "UK Equiv",
          value: "ukEquiv",
          align: "left",
          sortable: true,
        },
        {
          text: "Exchange Rate",
          value: "exchangeRate",
          align: "left",
          sortable: true,
        },
        {
          text: "Cost",
          value: "cost",
          align: "left",
          sortable: true,
        },
        {
          text: "ETA",
          value: "eta",
          align: "left",
          sortable: true,
        },
        {
          text: "RawETA",
          value: "rawEta",
          align: "left",
          sortable: true,
        },
        {
          text: "Notes",
          value: "notes",
          align: "left",
          sortable: true,
        },
        {
          text: "Chase Date",
          value: "chaseDate",
          align: "left",
          sortable: true,
        },
        {
          text: "Raw Chase Date",
          value: "rawChaseDate",
          align: "left",
          sortable: true,
        },
        {
          text: "Order Date",
          value: "orderDate",
          align: "left",
          sortable: true,
        },
        {
          text: "Raw Order Date",
          value: "rawOrderDate",
          align: "left",
          sortable: true,
        },
        {
          text: "Order Qty",
          value: "orderQty",
          align: "left",
          sortable: true,
        },
        {
          text: "Received Value",
          value: "receivedValue",
          align: "left",
          sortable: true,
        },
        {
          text: "PO Number",
          value: "poNumber",
          align: "left",
          sortable: true,
        },
        {
          text: "Pol Number",
          value: "polNumber",
          align: "left",
          sortable: true,
        },
        {
          text: "Booked In Date",
          value: "bookedInDate",
          align: "left",
          sortable: true,
        },
        {
          text: "Raw Booked In Date",
          value: "rawBookedInDate",
          align: "left",
          sortable: true,
        },
        {
          text: "Stock Message ID",
          value: "stockMessageId",
          align: "left",
          sortable: true,
        },
        {
          text: "Live Stock Level",
          value: "liveStockLevel",
          align: "left",
          sortable: true,
        },
        {
          text: "Available Stock Level",
          value: "availableStockLevel",
          align: "left",
          sortable: true,
        },
        {
          text: "Order Detailed ID",
          value: "orderDetailId",
          align: "left",
          sortable: true,
        },
        {
          text: "Raw ETA Change Count",
          value: "rawEtaChangeCount",
          align: "left",
          sortable: true,
        },
      ],
    };
  },
  created() {
    // this.selectedHeaders = [
    //   {
    //     text: "Stock Message",
    //     value: "stockMessage",
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     text: "EAN",
    //     value: "EAN",
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     text: "Supplier",
    //     value: "supplier",
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     text: "Supplier PartNumber",
    //     value: "supplierPartNumber",
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     text: "Product ID",
    //     value: "productId",
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     text: "Product Name",
    //     value: "productName",
    //     align: "left",
    //     sortable: true,
    //     class: "tbl-column",
    //   },
    //   {
    //     text: "Currency",
    //     value: "currency",
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     text: "UK Equiv",
    //     value: "ukEquiv",
    //     align: "left",
    //     sortable: true,
    //   },
    //   {
    //     text: "Exchange Rate",
    //     value: "exchangeRate",
    //     align: "left",
    //     sortable: true,
    //   },
    // ];
    this.selectedHeaders = Object.values(this.headers);
  },
  computed: {
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },
  methods: {
    async load() {
      // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      // if (res && res.data) {
      //   this.users = res.data;
      // }
      // console.log(this.users)
    },
    updateHeader(val) {
      console.log(val);
    },
  },
};
</script>

<style>
.tbl-table th,
.tbl-table td {
  white-space: nowrap;
}
</style>