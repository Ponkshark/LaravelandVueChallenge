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
                class="editorinput"
            /> 
            £
            <input
                type="int"
                name="price"
                id="price"
                v-model="model.price"
                autocomplete="model_price"
                class="editorinputsmall"
            />
            <input
                type="int"
                name="quantity"
                id="quantity"
                v-model="model.quantity"
                autocomplete="model_quantity"
                class="editorinputsmall"
            />
            units
            <span>
                <button
                    type="button"
                    @click="addItem"
                    class="addItemButton"
                >
                Add Item
                </button>
                <button
                    type="button"
                    @click="deleteItem"
                    class="deleteItemButton"
                >
                Delete this item <font-awesome-icon icon="fa-regular fa-trash-can" />
                </button>
            </span>
        </h3>
        
    </div>

</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

let price = 0;

const props = defineProps({
    name: Object,
    index: Number,
});

const emit = defineEmits(["addItem", "deleteItem"]);

const model = ref(JSON.parse(JSON.stringify(props.name)));

function addItem() {
    emit("addItem", props.index + 1);
}

function deleteItem() {
    emit("deleteItem", props.index)
}

</script>

<style>

.editorinput {
    padding: 5px;
    width: 125px;
    margin-right: 10px;
}

.editorinputsmall {
    padding: 5px;
    width: 50px;
    margin-right: 10px;
}

.addItemButton {
    padding: 5px 15px;
    margin: 5px 10px;
    color:#282634;
    background-color: #dcdcdc !important;
    border-radius: 5px;
}

.addItemButton:hover {
  background-color: #dcdcdcad !important;
}

.deleteItemButton {
    padding: 5px 15px;
    color:#282634;
    background-color: #ff4057 !important;
    border-radius: 5px;
}

.deleteItemButton:hover {
  background-color: #ff4056bb !important;
}

</style>