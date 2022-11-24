import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      allProducts: [],
      allSales: [],
      singleProduct: {},
    };
  },
  getters: {},
  actions: {
    async fetchAllProduct() {
      try {
        let data = await axios({
          method: "get",
          url: `${baseUrl}/products`,
        });
        this.allProducts = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addNewProduct(form) {
      try {
        let data = await axios ({
          method: 'post',
          url: `${baseUrl}/products`,
          data: {
            productName: form.productName,
            sellingPrice: form.sellingPrice,
            purchasePrice: form.purchasePrice,
            stock: form.stock,
            category: form.category
          }
        })
        Swal.fire({
          text: "Add New Product Success",
        });
        this.router.push('/')
      }
      catch (error) {
        console.log(error, "<<<<<")
        Swal.fire({
          text: error.response.data.message,
          
        })
      }
    },
    async fetchAllSales() {
      try {
        let data = await axios({
          method: "get",
          url: `${baseUrl}/sales`,
        });
        this.allSales = data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteSingleProduct(id) {
      try {
        let data = await axios({
          method: 'delete',
          url: `${baseUrl}/products/${id}`
        })
        Swal.fire({
          text: "Delete Product Success",
        });
        this.fetchAllProduct()
      } catch (error) {
        console.log(error)
        Swal.fire({
          text: error.response.data.message,
          
        })
      }
    },
    async fetchSingleProduct(productCode){
      try {
        let {data} = await axios({
          method: 'get',
          url: `${baseUrl}/products/${productCode}`
        })
        this.singleProduct=data
      } catch (error) {
        console.log(error)
      }
    },
    async addNewTransaction(form, productCode) {
      try {
        let data = await axios ({
          method: 'post',
          url: `${baseUrl}/sales/${productCode}`,
          data: {
            invoiceDate: form.invoiceDate,
            invoiceNumber: form.invoiceNumber,
            customerName: form.customerName,
            amount: form.amount
          }
        })
        Swal.fire({
          text: "Add New Transaction Success",
        });
        this.router.push('/sales')
      } catch (error) {
        console.log(error)
        Swal.fire({
          text: error.response.data.message,
          
        })
      }
    },
    async editProduct(form, code) {
      try {
        let data = await axios({
          method: 'put',
          url: `${baseUrl}/products/${code}`,
          data: {
            productName: form.productName,
            sellingPrice: form.sellingPrice,
            purchasePrice: form.purchasePrice,
            stock: form.stock,
            category: form.category
          }
        })
        Swal.fire({
          text: "Edit Product Success",
        });
        this.router.push('/')
      } catch (error) {
        console.log(error)
        Swal.fire({
          text: error.response.data.message,
          
        })
      }
    }
  },
});
