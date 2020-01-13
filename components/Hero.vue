<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <button @click="$emit('onShowBanner')" class="button is-info">
        ShowBanner
      </button>
      <slot class="container" name="header">
      </slot>
    </div>
  </section>
</template>