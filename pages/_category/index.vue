<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">{{ $route.params.category }}</h1>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ $route.params.category }}</a>
          </li>
        </ul>
      </nav>
      <div class="container">
        <section class="section">
          <div class="columns">
            <RestaurantCard
              :name="restaurant.name"
              :description="restaurant.description"
              :slug="restaurant.slug"
              :category="restaurant.category"
              :likes="restaurant.likes"
              :image="restaurant.image"
              class="restaurant-card"
              v-for="(restaurant, index) in restaurants" :key="index" 
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard'
import api from '~/services/api'
import { db } from '~/plugins/firebase'
export default {
  head () {
  return {
      title: 'FoodAdvisor =>' + this.$route.params.category ,
      meta: [
        { hid: 'description', name: 'description',
          content: 'En este sitio encontraras información sobre los restaurantes mejor valorados en tu ciudad.' }
      ]
    }
  },
  components: {
    RestaurantCard,
  },
  async created() {
    await db
      .collection('restaurants')
      .where('category', '==', this.$route.params.category)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.restaurants.push(doc.data())
        })
      })
  },
  data() {
    return {
      restaurants: []
    }
  }
}
</script>
<style>
.restaurant-card {
  margin: 10px 20px;
  min-width: 300px;
}
</style>