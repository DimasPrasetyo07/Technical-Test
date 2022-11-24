<script>
import { mapActions, mapState, mapStores } from 'pinia'
import ProductRow from '../components/ProductRow.vue'
import { useIndexStore } from '../stores'


export default {
    name: "ProductView",
    data() {
        return {};
    },
    methods: {
        ...mapActions(useIndexStore, ["fetchAllProduct"]),
    },
    computed: {
        ...mapState(useIndexStore, ["allProducts"])
    },
    created() {
        this.fetchAllProduct();
    },
    components: { ProductRow }
}

</script>


<template>
  <section class="flex-center" id="product-section">
    <div
      class="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="display-3">Products List</h1>
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
                <th scope="col">Product Code</th>
                <th scope="col">Product Name</th>
                <th scope="col">Selling Price</th>
                <th scope="col">Purchase Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <ProductRow
              v-for="(product, index) in allProducts.data"
              :key="product.id"
              :product="product"
              :index="index"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>