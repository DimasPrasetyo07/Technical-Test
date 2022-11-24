<script>
import { mapActions, mapState, mapStores } from 'pinia'
import SalesRow from '../components/SalesRow.vue';
import { useIndexStore } from '../stores'


export default {
    name: "SalesView",
    data() {
        return {};
    },
    methods: {
        ...mapActions(useIndexStore, ["fetchAllSales"]),
    },
    computed: {
        ...mapState(useIndexStore, ["allSales"])
    },
    created() {
        this.fetchAllSales();
    },
    components: { SalesRow }
}

</script>

<template>
    <section class="flex-center" id="product-section">
      <div
        class="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
      >
        <h1 class="display-3">All Sales List</h1>
      </div>
      <div class="row col-12">
        <div class="col-11 d-flex justify-content-end">
          
          
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <table class="table table-striped">
              <thead style="text-align:center">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Invoice Date</th>
                  <th scope="col">Invoice Number</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Product Code</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <SalesRow
                v-for="(sale, index) in allSales.data"
                :key="sale.id"
                :sale="sale"
                :index="index"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h1>{{}}</h1>
    </section>
  </template>