<template>
  <div>
    <section class="section" >
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">Resturantes</h2>
        </div>
      </div>
      <div class="table-container">
        <button class="button" @click="logOut">
          Logout
        </button>
        <nuxt-link to="admin/create" class="button is-success">
          Crear Restaurante
        </nuxt-link>
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Restaurant name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in restaurants" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <nuxt-link class="button" :to="'admin/' + item.id">
                  Edit
                </nuxt-link>
                <button class="button is-danger" @click="deleteDocument(item.id)">
                Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import { db, firebase } from '~/plugins/firebase'
export default {
  middleware: 'auth',
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.getDocuments()
  },
  methods: {
    getDocuments() {
      this.restaurants = []
      const response = db.collection('restaurants').get()
      response
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const restaurant = {
              id: doc.id,
              ...doc.data()
            }
            this.restaurants.push(restaurant)
          })
        })
        .catch((error) => {
          console.log(error)
      })
    },
    deleteDocument(id) {
      const ref = db.collection('restaurants').doc(id)
      ref.delete()
      this.getDocuments()
    },
    logOut() {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  }

}
</script>