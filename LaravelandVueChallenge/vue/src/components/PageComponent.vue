<template>
  <header>
    <router-link :to="{name: 'Home'}"><img src="../assets/logo-no-background.png"></router-link>
  <nav>
      <ul>
          <li><a href="#"><router-link :to="{name: 'Home'}">Home</router-link></a></li>
          <li><a href="#"><router-link :to="{name: 'About'}">About</router-link></a></li>
          <li><a href="#">Quote Table</a></li>
      </ul>
  </nav>
</header>
  <main>
        <slot></slot>
  </main>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style>
header img {
    display: block;
    max-height: 70px;
    max-width: 100%;
    margin-left: 35px;
    margin-right: 25px;
}

html {
  color: #dcdcdc;
  margin-top: 80px;
  background-color: #282634;
  /*height: calc(100vh - 80px);*/
  padding-left: 5vh;
  padding-right: 5vh;
}

main {
    color: #dcdcdc;
}

header {
    background-color: #282634;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;
}

header * {
    display: inline;
}

header li {
    margin: 20px;
}

header li a {
    color: #dcdcdc;
    text-decoration: none;
}

header li a:hover {
    text-decoration: underline;
    text-decoration-color: #ff4057;
}
</style>