import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import NewProductView from '../views/NewProductView.vue'
import SalesView from '../views/SalesView.vue'
import TransactionView from '../views/TransactionView.vue'
import EditProductView from '../views/EditProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductView',
      component: ProductView
    },
    {
      path: '/addproduct',
      name: "NewProductView",
      component: NewProductView
    },
    {
      path: '/sales',
      name: "SalesView",
      component: SalesView
    },
    {
      path: '/transactions/:productCode',
      name: "TransactionView",
      component: TransactionView
    },
    {
      path: '/products/:productCode',
      name: "EditProductView",
      component: EditProductView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
