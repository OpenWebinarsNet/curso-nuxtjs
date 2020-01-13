<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand logo">
      <img src="@/static/logo.png" alt="FoodAdvisor logo" />
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a href="/login" class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
<style scoped>
.logo {
  width: 100px;
  margin: 0 20px;
}
</style>