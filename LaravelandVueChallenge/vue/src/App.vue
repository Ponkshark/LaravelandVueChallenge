<script lang="ts">

</script>

<template>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../dist/output.css" rel="stylesheet">
</head>
<body>
<header>
  <img src="./assets/logo-no-background.png">
  <nav>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Quote Table</a></li>
      </ul>
  </nav>
</header>
<br>
<div>
  <h1>
    Hello world!
  </h1>
</div>
<div>
  <h1>
    Hello world!
  </h1>
</div>
</body>
</html>
</template>

<style scoped>
header img {
    height: 70px;
    margin-left: 35px;
    margin-right: 35px;
}

html {
  color: #dcdcdc;
  margin-top: 80px;
  background-color: #282634;
  height: calc(100vh - 80px);
  padding-left: 5vh;
  padding-right: 5vh;
}

main {
    color: #282634;
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
</style>
