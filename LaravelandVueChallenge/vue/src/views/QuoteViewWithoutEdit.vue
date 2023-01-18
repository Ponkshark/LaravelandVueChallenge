<template>
    <PageComponent>
        <template>
            <div>
                <h1>
                    {{ model.id ? model.title : "Create a Quote" }}
                </h1>
            </div>
        </template>
        <form @submit.prevent="saveQuote">
            <div>
                <div class="quote-view-cont2">
                    <div class="view-image-cont">
                        <label>
                            <b>Quote Image</b>
                        </label>
                        <div class="view-image-items">
                            <img
                                v-if="model.image"
                                :src="model.image"
                                :alt="model.title"
                            />
                            <span
                                v-else
                            >
                            No Image
                            </span>
                        </div>
                        <div class="horizontal-rule">
                        <hr>
                        </div>

                    </div>
                    <div class="view-title-cont">
                        <div class="view-title-label">
                        <label for="title">
                            <b>Quote Title</b>
                        </label>
                        </div>
                        <h3
                        v-if="model.title"
                        >{{ model.title }}</h3>
                        <h3 v-else
                        >
                        No Title
                        </h3>
                    </div>
                    <div class="horizontal-rule">
                    <hr>
                    </div>

                    <div class="view-desc-cont">
                        <div class="view-desc-label">
                        <label for="about">
                            <b>Quote Description</b>
                        </label>
                        </div>
                        <div>
                            <h3
                            v-if="model.description"
                            >{{ model.description }}
                            </h3>
                            <h3 v-else
                            >
                            No Description
                            </h3>
                        </div>
                    </div>
                    <div class="horizontal-rule">
                    <hr>
                    </div>

                    <div class="view-status-cont">
                        <div>
                            <h3
                            v-if="model.status === 'True'"
                            >
                            This quote is open
                            </h3>
                            <h3
                            v-else-if="model.status === 'False'"
                            >
                            This quote is closed
                            </h3>
                            <h3
                            v-else
                            >
                            Quote status has not been declared
                            </h3>
                            <br>
                        </div>
                        <div class="horizontal-rule">
                        <hr>
                        </div>
                            
                    </div>
                    <div class="view-items-cont">
                        <h3 class="items-table-cont2">
                            <span class="items-text">
                            <b>Items</b>
                            </span>
                        </h3>
                        <div v-if="!model.items.length">
                            This quote has no items
                        </div>
                        <div v-for="(name, index) in model.items" :key="name.id">
                            <ItemViewer
                                :name="name"
                                :index="index"
                                @addItem="addItem"
                                @deleteItem="deleteItem"
                            />
                        </div>
                        <br>
                    </div>
                </div>

            </div>
        </form>
    </PageComponent>
</template>

<script setup>
import {v4 as uuidv4} from "uuid";
import store from "../store";
import {ref} from "vue";
import {routerKey, useRoute, useRouter} from "vue-router";

import PageComponent from "../components/PageComponent.vue";
import ItemViewer from "../components/editor/ItemViewer.vue";

const router = useRouter();

const route = useRoute();

let model= ref({
    title: "",
    slug: "",
    status: false,
    image: null,
    description: null,
    items: [],
});

if (route.params.id) {
    model.value = store.state.quotes.find(
        (q) => q.id === parseInt(route.params.id)
    );
}

function addItem(id) {
    const newItem = {
        id: uuidv4(),
        name: "",
        price: null,
        quantity: null,
    };

    model.value.items.splice(id, 0, newItem);
}

function deleteItem(id) {
    model.value.items.splice(id, 1);
}

function priceTotal() {
    let i = 0;
    let price = 0;
    while (i<model.value.length){
        price == price + model.value.items[i,3];
        i++;
    }
    return price == price + model.value.items[0,1];
}

function saveQuote() {
    store.dispatch("saveQuote", model.value).then(({ data }) => {
        router.push({
            name: "QuoteView",
            params: { id: data.data.id },
        });
    });
}

</script>

<style>

.horizontal-rule {
    width: 100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
}

.quote-view-cont2{
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1000px;
    text-align: center;
}

.imagechangebutton{
    position: relative;
    padding: 5px 15px;
    color:#282634;
    background-color: #dcdcdc !important;
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
    z-index: 1;
}

.imagechangebutton:hover {
    cursor: pointer;
    background-color: #dcdcdcad !important;
}

.file-input{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
}

.view-image-items {
    display:flex;
    justify-content: center;
    text-align: center;
    align-items: flex-end;
    margin-bottom: 25px;
    margin-top: 15px;
}

.view-image-cont img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

.view-title-cont {
    margin-bottom: 25px;
}

.view-title-label{
    margin-bottom: 10px;
}

.view-desc-cont {
    margin-bottom: 25px;
}

.view-desc-label{
    margin-bottom: 10px;
}

.view-status-cont {
    margin-bottom: 25px;
}

.view-status-cont #status{
    margin-right: 10px;
}

input {
    color: #525252ad !important;
}

textarea {
    color: #525252ad !important;
}

.items-table-cont2 {
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 10px;
}


.view-save-cont button{
    margin: 30px 0px;
    padding: 5px 15px;
    color:#282634;
    background-color: #dcdcdc !important;
    border-radius: 5px;
    height: 40px;
}

.quoteViewAddItemButton {
    padding: 5px 15px;
    margin: 5px -15px;
    color:#282634;
    background-color: #dcdcdc !important;
    border-radius: 5px;
}

.quoteViewAddItemButton:hover {
  background-color: #dcdcdcad !important;
}

.save-button:hover {
  background-color: #dcdcdcad !important;
}

</style>