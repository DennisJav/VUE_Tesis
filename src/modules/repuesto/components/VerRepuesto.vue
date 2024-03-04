<template>
  <div class="contenedor">
    <input type="text" v-model="nombre" placeholder="Nombre">
        <input type="text" v-model="tipo" placeholder="Tipo">
        <input type="text" v-model="codigoBarras" placeholder="Codigo Barras">
    <input type="text" v-model="precio" placeholder="precio">
    <input type="number" v-model="stock" placeholder="cantidad">
    
    <input type="text" v-model="estado" placeholder="estado">

    <div>
      <h2>Detalle de Proveedor</h2>
      <input type="text" v-model="nombreEmpresa" placeholder="Nombre empresa">
    <input type="text" v-model="identificacionEmpresa" placeholder="Id Empresa">
    </div>
  
    <button @click="aceptar">Aceptar</button>
  </div>
</template>

<script>
export default {
  props: {
    repuesto: Object,
  },
  data() {
    return {
      nombre: '',
      tipo: '',
      codigoBarras: '',
      precio: '',
      stock: '',
      nombreEmpresa: '',
      identificacionEmpresa: '',
      estado:''
    }
  },
  methods:{
    aceptar(){
      this.$emit("verPrincipal",true);
    }
  },
  created() {
    
    if (this.repuesto) {
      this.nombre = this.repuesto.nombre;
      this.tipo = this.repuesto.tipo;
      this.codigoBarras = this.repuesto.codBarras;
      this.precio = this.repuesto.precio;
      this.stock = this.repuesto.stock;
      this.nombreEmpresa = this.repuesto.nombreEmpresa;
      this.identificacionEmpresa = this.repuesto.identificacionEmpresa;
      this.estado = this.repuesto.estado?'Activo':'Inactivo';
      
      console.log("creando repuesto por props: "+this.nombre);
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