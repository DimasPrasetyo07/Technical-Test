<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';

export default {
    name: "SalesRow",
    props: ['sale', "index"],
}

</script>


<template>

<tr>
    <td style="text-align:center">{{index + 1}}</td>
    <td style="text-align:center">{{sale.invoiceDate}}</td>
    <td style="text-align:center">{{sale.invoiceNumber}}</td>
    <td style="text-align:center">{{sale.customerName}}</td>
    <td style="text-align:center">{{sale.productCode}}</td>
    <td style="text-align:center">{{sale.amount}}</td>
    <td style="text-align:center">{{sale.unitPrice}}</td>
    <td style="text-align:center">{{sale.totalPrice}}</td>
  </tr>

</template>