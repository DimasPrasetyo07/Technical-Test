<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';

export default {
    name: "ProductRow",
    props: ['product', "index"],
    methods: {
      ...mapActions(useIndexStore, ['deleteSingleProduct']),
      deleteData(id) {
        this.deleteSingleProduct(id)
      } 
    },
    
}

</script>


<template>

<tr>
    <td style="text-align:center">{{index + 1}}</td>
    <td style="text-align:center">{{product.productCode}}</td>
    <td style="text-align:center">{{product.productName}}</td>
    <td style="text-align:center">{{product.sellingPrice}}</td>
    <td style="text-align:center">{{product.purchasePrice}}</td>
    <td style="text-align:center">{{product.stock}}</td>
    <td style="text-align:center">{{product.category}}</td>
    <td style="text-align:center">
      <a :href="'/products/'+product.productCode"> Edit </a> || 
      <a href=# @click.prevent="deleteSingleProduct(product.id)"> Delete </a>  || 
      <a :href='"/transactions/"+product.productCode'>  Buy </a>
    </td>
  </tr>

</template>