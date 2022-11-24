<script>
import { mapActions, mapState, mapStores } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "TransactionView",
  data() {
    return {
      productCode: this.$route.params.productCode,
      transactionForm: {
        invoiceDate: "",
        invoiceNumber: "",
        customerName: "",
        amount: "",
      },
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchSingleProduct", "addNewTransaction"]),
    addTransaction() {
        this.addNewTransaction(this.transactionForm, this.productCode)
    }
  },
  computed: {
    ...mapState(useIndexStore, ["singleProduct"]),
  },
  created() {
    this.fetchSingleProduct(this.productCode);
  },
};
</script>

<template>
    <section class="container text-center mt-3">
      <div class="row d-flex justify-content-center">
        <h3>Add New Transaction</h3>
        <br /><br /><br />
        <form @submit.prevent="addTransaction">
          <div class="row d-flex justify-content-center">
            <div class="form-control mb-4" style="width: 500px">
              <!-- invoice date input -->
              <label class="form-label" for="form2Example1">Invoice Date</label>
              <input
                type="date"
                id="newTransactionInvoiceDate-form"
                class="form-control"
                placeholder="Input your invoice date"
                v-model="transactionForm.invoiceDate"
              />
              <!-- invoice number input -->
              <label class="form-label" for="form2Example1">Invoice Number</label>
              <input
                type="text"
                id="newTransactionInvoiceNumber-form"
                class="form-control"
                placeholder="Input your invoice number"
                v-model="transactionForm.invoiceNumber"
              />
              <!-- customer name input -->
              <label class="form-label" for="form2Example2">Customer Name</label>
              <input
                type="text"
                id="newTransactionCustomerName-form"
                class="form-control"
                placeholder="Input your customer name"
                v-model="transactionForm.customerName"
              />
              <!-- amount input -->
              <label class="form-label" for="form2Example1">Amount</label>
              <input
                type="integer"
                id="newTransactionAmount-form"
                class="form-control"
                placeholder="Input your amount"
                v-model="transactionForm.amount"
              />
              <!-- unit price -->
              <label class="form-label" for="form2Example1">Unit Price</label>
              <input disabled
                type="integer"
                id="newTransactionUnitPrice-form"
                class="form-control"
                :placeholder="singleProduct.sellingPrice"
              />
              <!-- product code -->
              <label class="form-label" for="form2Example1">Product Code</label>
              <input disabled
                type="text"
                id="newTransactionUnitPrice-form"
                class="form-control"
                :placeholder="productCode"
              />
              <!-- product name -->
              <label class="form-label" for="form2Example1">Unit Price</label>
              <input disabled
                type="integer"
                id="newTransactionUnitPrice-form"
                class="form-control"
                :placeholder="singleProduct.productName"
              />
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
