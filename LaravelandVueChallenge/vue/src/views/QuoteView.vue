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
                            Quote Image
                        </label>
                        <div class="view-image-items">
                            <button
                                type="button"
                                class="imagechangebutton"
                            >
                                <input
                                    type="file"
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
                            Quote Title
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
                            Quote Description
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
                        <h3>Items
                            <button
                                type="button"
                                @click="addItem()"
                            >
                            Add Item
                            </button>
                        </h3>
                        <div v-if="!model.items.length">
                            This quote has no items
                        </div>
                        <div v-for="(name, index) in model.items" :key="name.id">
                            <ItemEditor
                                :name="name"
                                :index="index"
                                @change="itemChange"
                                @addItem="addItem"
                                @deleteItem="deleteItem"
                            />
                        </div>
                    </div>
                    <div class="view-save-cont">
                        <button
                            type="submit"
                            class="save-button"
                        >
                        Save
                        </button>
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
import {useRoute} from "vue-router";

import PageComponent from "../components/PageComponent.vue";
import ItemEditor from "../components/editor/ItemEditor.vue";

const route = useRoute();

let model= ref({
    title: "",
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

function deleteItem(item) {
    model.value.items = model.value.items.filter((q) => q !== item);
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
    z-index: 50;
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


.view-save-cont button{
    padding: 5px 15px;
    color:#282634;
    background-color: #dcdcdc !important;
    border-radius: 5px;
    height: 40px;
}

.save-button:hover {
  background-color: #dcdcdcad !important;
}

</style>