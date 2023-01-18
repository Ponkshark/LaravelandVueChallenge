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
                <div class="quote-view-cont">
                    <div class="view-image-cont">
                        <label>
                            <b>Quote Image</b>
                        </label>
                        <div class="view-image-items">
                            <button
                                type="button"
                                class="imagechangebutton"
                            >
                                <input
                                    type="file"
                                    @change="onImageChoose"
                                    class="file-input"
                                />
                                Change image
                            </button>
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
                    </div>
                    <div class="view-title-cont">
                        <div class="view-title-label">
                        <label for="title">
                            <b>Quote Title</b>
                        </label>
                        </div>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            v-model="model.title"
                            autocomplete="quote_title"
                        />
                    </div>
                    <div class="view-desc-cont">
                        <div class="view-desc-label">
                        <label for="about">
                            <b>Quote Description</b>
                        </label>
                        </div>
                        <div>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                v-model="model.description"
                                autocomplete="quote_description"
                                placeholder="Describe the details of your quote"
                            >
                            </textarea>
                        </div>
                    </div>
                    <div class="view-status-cont">
                        <div>
                            <input
                                id="status"
                                name="status"
                                type="checkbox"
                                v-model="model.status"
                            />
                            <label for="status">
                                Is the Quote Open
                            </label>
                        </div>
                            
                    </div>
                    <div class="view-items-cont">
                        <h3 class="items-table-cont">
                            <span>
                            <b>Items</b>
                            </span>
                            <span>
                                <button
                                    type="button"
                                    @click="addItem()"
                                    class="quoteViewAddItemButton"
                                >
                                Add Item
                                </button>
                            </span>
                        </h3>
                        <div v-if="!model.items.length">
                            This quote has no items
                        </div>
                        <div v-for="(name, index) in model.items" :key="name.id">
                            <ItemEditor
                                :name="name"
                                :index="index"
                                @addItem="addItem"
                                @deleteItem="deleteItem"
                            />
                        </div>
                    </div>
                    <div class="view-save-cont">
                        <router-link :to="{name: 'Home'}">
                        <button
                            type="submit"
                            class="save-button"
                        >
                        Save All
                        </button>
                        </router-link>
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
import ItemEditor from "../components/editor/ItemEditor.vue";

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

function onImageChoose(e) {
    const file=e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        model.value.image = reader.result;
        model.value.image_url = reader.result;
    };
    reader.readAsDataURL(file);
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

function deleteQuote() {
    if (
        confirm(
            `Are you sure you wish to delete this quote? This operation can not be undone`
        )
    ) {
        store.dispatch("deleteQuote", model.value.id).then(() => {
            router.push({
                name: "Home",
            });
        });
    }
}

</script>

<style>

.quote-view-cont{
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

.items-table-cont {
    width: 555px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
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