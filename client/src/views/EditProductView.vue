<script>
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "EditProductView",
  data() {
    return {
      productForm: {
        productName: "",
        sellingPrice: "",
        purchasePrice: "",
        stock: "",
        category: "",
      },
      productCode: this.$route.params.productCode,
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["editProduct", "fetchSingleProduct"]),
    editProductForm() {
      this.editProduct(this.productForm, this.productCode);
    },
  },
  computed: {
    ...mapState(useIndexStore, ["singleProduct"])
  },
  created() {
    this.fetchSingleProduct(this.productCode)
  }
};
</script>

<template>
  <section class="container text-center mt-3">
    <div class="row d-flex justify-content-center">
      <h3>Edit Product</h3>
      <br /><br /><br />
      <form @submit.prevent="editProductForm">
        <div class="row d-flex justify-content-center">
          <div class="form-control mb-4" style="width: 500px">
            <!-- product name input -->
            <label class="form-label" for="form2Example1">Product Name</label>
            <input
              type="text"
              id="newProductName-form"
              class="form-control"
              :placeholder="singleProduct.productName"
              v-model="productForm.productName"
            />
            
            <!-- selling price input -->
            <label class="form-label" for="form2Example1">Selling Price</label>
            <input
              type="number"
              id="newProductSellingPrice-form"
              class="form-control"
              :placeholder="singleProduct.sellingPrice"
              v-model="productForm.sellingPrice"
            />
            <!-- purchase price input -->
            <label class="form-label" for="form2Example2">Purchase Price</label>
            <input
              type="number"
              id="newProductPurchasePrice-form"
              class="form-control"
              :placeholder="singleProduct.purchasePrice"
              v-model="productForm.purchasePrice"
            />
            <!-- stock input -->
            <label class="form-label" for="form2Example1">Stock</label>
            <input
              type="number"
              id="newProductStock-form"
              class="form-control"
              :placeholder="singleProduct.stock"
              v-model="productForm.stock"
            />
            <!-- category input -->
            <label class="form-label" for="form2Example1">Category</label>
            <input disabled
              class="form-select"
              aria-label="Default select example"
              id="newProductCategory-form"
              v-model="productForm.category"
              :placeholder="singleProduct.category"
            >
          </div>
          <div class="row justify-content-center">
            <button
              type="submit"
              class="btn btn-primary btn-block mb-4"
              style="width: 100px"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
