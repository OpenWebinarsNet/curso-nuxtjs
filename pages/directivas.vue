<template>
  <div style="margin-left: 100px">
    <p>{{ message }}</p>
    <p v-show="false">Hola este es texto que se muestra</p>
    <p v-if="num > 10">Este texto es con v-if</p>
    <p v-else>Este texto es con v-else</p>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
    <p>Nombre:</p>
    <input v-model="name" type="text"/>
    {{ name }}
    {{ nameReverser }}
    <span class="tag is-warning" v-if="error.length != 0">
      {{ error }}
    </span>
    <button v-on:click="saludo" class="button is-info">
      Saluda
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hola OpenWebinars",
      num: 5,
      items: [1,2,3,4,5,6],
      name: '',
      error: ''
    }
  },
  computed: {
    nameReverser() {
      return this.name.split('').reverse().join('')
    }
  },
  watch: {
    name() {
      if(this.name.length > 5) {
        this.error = "Nombre demasiado largo"
      } else {
        this.error = ''
      }
    }
  },
  methods: {
    saludo() {
      console.log("Esto es un saludo")
    }
  }
}
</script>