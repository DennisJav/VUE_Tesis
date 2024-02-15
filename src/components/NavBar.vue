<template>
    <div>
      <router-link to="/index">Inicio</router-link>
      <router-link to="/newClient">Agregar</router-link>
      <router-link to="/findClient">Buscar</router-link>
      <router-link to="/newOrder">Agregar</router-link>
      <router-link to="/findOrder">Agregar</router-link>
      <router-link to="/newTecnique">Agregar</router-link>
      <router-link to="/findTecnique">Agregar</router-link>
      <router-link to="/newPart">Agregar</router-link>
      <router-link to="/findPart">Agregar</router-link>
      <router-link to="/newSupplier">Agregar</router-link>
      <router-link to="/findSupplier">Agregar</router-link>
      <router-link to="/default"></router-link>

    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  div {
      padding: 0 30px;
      background-color: aliceblue;
  
  }
  div a {
      font-weight: bold;
      /*color: #2c3e50;*/
      color: #6576b4;
      margin: 0 10px;
  }
  </style>