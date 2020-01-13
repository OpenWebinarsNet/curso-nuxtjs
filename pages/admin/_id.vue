<template>
  <div class="section" v-if="restaurant">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">New Restaurant</h2>
          </div>
        </div>
        <div class="columns box">
          <div class="column">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="restaurant.name"
                  placeholder="restaurant name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Slug</label>
              <div class="control">
                <input class="input" type="text" :placeholder="slug" disabled />
              </div>
            </div>
            <div class="field">
              <label class="label">Image</label>
              <div class="control">
                <input
                  v-model="restaurant.image"
                  class="input"
                  type="text"
                  placeholder="https://...."
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input
                  v-model="restaurant.description"
                  class="input"
                  type="text"
                  placeholder="description"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Address</label>
              <div class="control">
                <input
                  v-model="restaurant.address"
                  class="input"
                  type="text"
                  placeholder="address"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Cities</label>
              <div class="control">
                <div class="select">
                  <select v-model="restaurant.city">
                    <option>Select dropdown</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Valencia">Valencia</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Category</label>
              <div class="control">
                <div class="select">
                  <select v-model="restaurant.category">
                    <option>Select dropdown</option>
                    <option value="brunch">Brunch</option>
                    <option value="burgers">Burgers</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="italian">Italian</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Text</label>
              <div class="control">
                <textarea
                  v-model="restaurant.text"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="text"
                />
              </div>
            </div>
            <div class="field">
              <div class="control has-text-centered">
                <button
                  class="button is-danger"
                  type="button"
                  @click="$router.back()"
                >
                  Cancel
                </button>
                <button
                  class="button is-link"
                  type="button"
                  @click.prevent="onUpdate"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
export default {
  middleware: 'auth',
  data() {
    return {
      restaurant: null
    }
  },
  created() {
    const response = db.collection('restaurants').doc(this.$route.params.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.restaurant = doc.data()
      }
    })
  },
  methods: {
    onUpdate() {
      const ref = db.collection('restaurants').doc(this.$route.params.id)
      const response = ref.update(this.restaurant)
      response.then(() => {
        this.$router.back()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>