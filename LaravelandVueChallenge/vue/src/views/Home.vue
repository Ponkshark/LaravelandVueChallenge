<template>
    <html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../dist/output.css" rel="stylesheet">
</head>
<body>
<PageComponent>

</PageComponent>
<br>
<div>
    <router-link
    :to="{name:'QuoteCreate'}"
    >
    </router-link>
</div>
<div class="quote-cont">
<div
  v-for="quote in quotes"
  :key="quote.id"
  class="quote-item"
>
<img :src="quote.image" class="quote-img"/>
<h4 style="text-align: center">{{ quote.title }}</h4>
<div v-html="quote.description"  style="text-align: center"></div>
<div class="button-cont">
  <router-link
    :to="{name: 'QuoteView', params: {id:quote.id}}"
    class="
      editbutton
    "
  >
  Edit
  </router-link>
  <button
    v-if="quote.id"
    type="button"
    @click="deleteQuote(quote)"
    class="
      deletebutton
    "
  >
  Delete
  </button>
</div>
</div>
</div>
</body>
</html>
</template>

<script setup>

import store from "../store";
import { computed } from "vue";
import PageComponent from "../components/PageComponent.vue";

const quotes = computed(() => store.state.quotes);

function deleteQuote(quote) {
  if (confirm(`Are you sure you want to delete this quote? Operation can not be undone!`)){
    
  }
}

</script>

<style scoped>
.button-cont {
  display: flex;
  justify-content: space-between;
}

.editbutton {
  padding: 5px 15px;
  color:#282634;
  background-color: #dcdcdc;
  border-radius: 5px;
}

.editbutton:hover {
  background-color: #dcdcdcad;
}

.deletebutton {
  padding: 5px 15px;
  color:#282634;
  background-color: #ff4057;
  border-radius: 5px;
}

.deletebutton:hover {
  background-color: #ff4056bb;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.quote-cont {
  display:flex;
  gap: 0px;
  justify-content: center;
  flex-wrap: wrap;
}

.quote-item {
  padding: 25px;
}

.quote-item:last-child {
  border-right: none;
}

.quote-img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
  }


</style>