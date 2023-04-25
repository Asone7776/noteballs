<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand d-flex">
        <div class="navbar-item has-text-weight-bold is-size-4">
          Noteballs
        </div>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
          @click="toggleMenu" :class="{ 'is-active': isMenuShown }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isMenuShown }">
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item is-size-5" active-class="is-active">
            Home
          </RouterLink>
          <RouterLink to="/stats" class="navbar-item is-size-5" active-class="is-active">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuShown = ref<Boolean>(false);

const toggleMenu = () => {
  isMenuShown.value = !isMenuShown.value
}

</script>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .navbar-menu.is-active {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  }
}
</style>
