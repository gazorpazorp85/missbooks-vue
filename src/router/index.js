import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Books from '../views/Books.vue';
import BookDetails from '../views/BookDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/books',
    component: Books
  },
  {
    path: '/books/:id',
    component: BookDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
