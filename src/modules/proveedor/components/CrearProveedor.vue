<template>
  <div class="contenedor">
        <input type="text" v-model="nombreEmpresa" placeholder="Nombre empresa">
        <input type="email" v-model="correo" placeholder="email">
        <input type="text" v-model="telefono" placeholder="telefono">
        <input type="text" v-model="origen" placeholder="origen">

        <select v-model="tipoIdentificacion" id="tipoDocumento">
          <option disabled value="">Elija tipo</option>
           <option value="RUC">RUC</option>
           <option value="CI">CI</option>
       </select>
       <input type="text" v-model="identificacion" :placeholder = "`Ingrese ${tipoIdentificacion}`" @input="validarLongitud">
       <p v-if="!esValido" style="color: red;">La longitud del valor ingresado no es válida.</p>
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
        origen:'',
        tipoIdentificacion:'',
        identificacion:'',
        esValido:true
    };
  },
  methods:{
   async crearProveedor(){

  const data={
    nombreEmpresa:this.nombreEmpresa,
    correo:this.correo,
    telefono:this.telefono,
    origen:this.origen,
    tipoIdentificacion:this.tipoIdentificacion,
    identificacion:this.identificacion
  };

  try {
    const response = await guardarProveedorFachada(data);
    if (response.status === 200) {
      window.alert("Proveedor guardado correctamente");
    } else {
      const detailMessage = response.headers.get('detailMessage');
    window.alert("Error al guardar<> el proveedor: " + detailMessage);
      
    }
  } catch (error) {
    console.error("Error:", error);
    window.alert("Error al procesar la solicitud: ",error.message);
  }
    },
    validarLongitud() {
      if (this.tipoIdentificacion === 'RUC' && this.identificacion.length !== 13) {
        this.esValido = false;
      } else if (this.tipoIdentificacion === 'CI' && this.identificacion.length !== 10) {
        this.esValido = false;
      } else {
        this.esValido = true;
      }
    }
  },
  watch: {
    tipoIdentificacion(newValue, oldValue) {
      if (oldValue === 'RUC' && newValue === 'CI') {
        this.identificacion = ''; 
      }else if (oldValue === 'CI' && newValue === 'RUC'){
        this.identificacion = ''; 
      }
   
    }
  },
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
