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
<div class="how-to-cont">
    <h1>How to use</h1>
    <p>The home screen displays all quotes currently implemented in the system. Each being displayed
        as a card with buttons below to either edit the quote, or delete it.
    </p>
    <h1>Editing Quotes</h1>
    <p>Upon clicking the edit button below a quote, you are taken to a page displaying all of the quotes
        information. From here fields such a title, description, etc are already filled in with the quotes
        details. You may edit any of these fields to change the quote. You may also upload a new file to be 
        used as the quotes image. When finished click the save button at the bottom of the screen to update
        the quotes data.
    </p>
    <h1>Deleting Quotes</h1>
    <p>To delete a quote you just need to press the delete button below the quote you wish to delete.
        Upon clicking the button, a alert will appear to make sure you mean to delete the quote. Clicking "OK"
        deletes the quote, whilst clicking "Cancel" will stop the operation.
    </p>
</div>
</body>
</html>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
</script>

<style scoped>
    h1 {
        font-size: 20px;
        padding-bottom: 10px;
        padding-top: 30px;
    }

    .how-to-cont {
        margin-right: auto;
        margin-left: auto;
        max-width: 500px;
    }
</style>