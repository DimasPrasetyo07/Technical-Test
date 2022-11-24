<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "NewProductView",
  data() {
    return {
      productForm: {
        productName: "",
        sellingPrice: "",
        purchasePrice: "",
        stock: "",
        category: "",
      },
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["addNewProduct"]),
    addProduct() {
      this.addNewProduct(this.productForm);
    },
  },
};
</script>

<template>
  <section class="container text-center mt-3">
    <div class="row d-flex justify-content-center">
      <h3>Add New Product</h3>
      <br /><br /><br />
      <form @submit.prevent="addProduct">
        <div class="row d-flex justify-content-center">
          <div class="form-control mb-4" style="width: 500px">
            <!-- product name input -->
            <label class="form-label" for="form2Example1">Product Name</label>
            <input
              type="text"
              id="newProductName-form"
              class="form-control"
              placeholder="Input your product name"
              v-model="productForm.productName"
            />
            <!-- selling price input -->
            <label class="form-label" for="form2Example1">Selling Price</label>
            <input
              type="number"
              id="newProductSellingPrice-form"
              class="form-control"
              placeholder="Input your selling price"
              v-model="productForm.sellingPrice"
            />
            <!-- purchase price input -->
            <label class="form-label" for="form2Example2">Purchase Price</label>
            <input
              type="number"
              id="newProductPurchasePrice-form"
              class="form-control"
              placeholder="Input your purchase price"
              v-model="productForm.purchasePrice"
            />
            <!-- stock input -->
            <label class="form-label" for="form2Example1">Stock</label>
            <input
              type="number"
              id="newProductStock-form"
              class="form-control"
              placeholder="Input your product stock"
              v-model="productForm.stock"
            />
            <!-- category input -->
            <label class="form-label" for="form2Example1">Category</label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="newProductCategory-form"
              v-model="productForm.category"
            >
              <option selected disabled>Pick Category</option>
              <option value="partMobil">Sparepart Mobil</option>
              <option value="partMotor">Sparepart Motor</option>
            </select>
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
