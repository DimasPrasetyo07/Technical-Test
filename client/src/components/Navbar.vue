<script>
import { RouterLink, RouterView } from "vue-router";
// import { mapActions, mapState, mapWritableState } from "pinia";
// import { useIndexStore } from "../stores";
export default{
    name: 'Navbar',
    

}

</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><router-link to ='/'>Product List</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to='/sales'>Sales List</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to ='/addproduct'>Add New Product</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>