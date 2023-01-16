<template>

    <div>
        <h3>
            {{ index + 1 }}. 
            <input
                type="text"
                name="name"
                id="name"
                v-model="model.name"
                autocomplete="model_name"
            /> 
            £{{ model.price }} 
            {{ model.quantity }} units
        </h3>
        <div>
            <button
                type="button"
                @click="addItem"
            >
            Add Item
            </button>
            <button
                type="button"
                @click="deleteItem"
            >
            Delete this item
            </button>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
    name: Object,
    index: Number,
});

const emit = defineEmits(["change", "addItem", "deleteItem"]);

const model = ref(JSON.parse(JSON.stringify(props.name)));

function addItem() {
    emit("addItem", props.index + 1);
}

function deleteItem() {
    emit("deleteItem", props.items)
}

</script>

<style>

</style>