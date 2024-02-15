<template>
  <div class="contenedor">
        <input type="text" v-model="nombreEmpresa" placeholder="Nombre empresa">
        <input type="email" v-model="correo" placeholder="email">
        <input type="text" v-model="telefono" placeholder="telefono">
        <input type="text" v-model="origen" placeholder="origen">
        <div>
          <button @click="crearProveedor">Guardar</button>
        </div>
  </div>
</template>

<script>
import {guardarProveedorFachada} from '../helpers/ProveedorCliente'

export default {
    data() {
    return {
        nombreEmpresa :'',
        correo:'',
        telefono:'',
        origen:''
    };
  },
  methods:{
   async crearProveedor(){

  const data={
    nombreEmpresa:this.nombreEmpresa,
    correo:this.correo,
    telefono:this.telefono,
    origen:this.origen
  };

       const response = await guardarProveedorFachada(data);
       console.log("status--> "+response.status);
       if(response.status==200){
        window.alert("Proveedor guardado correctamente");
       }else{
        window.alert("algo salio mal: "+response.status);
       }
    }
  }
}
</script>

<style scoped>
 
 .contenedor{
  display: flex;
    justify-content: center;
    display: grid;
    align-items: center;
    border: 1px solid black;
 }
</style>
