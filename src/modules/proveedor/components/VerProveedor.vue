<template>
  <div>
    <input type="text" v-model="empresa" >
        <input type="email" v-model="correo">
        <input type="text" v-model="telefono">
        <input type="text" v-model="origen">
       <input type="text" v-model="tipoIdentificacion">

       
       <input type="text" v-model="identificacion">
      
        <div>
          <button @click="aceptar">Aceptar</button>
        </div>
  </div>
</template>

<script>
export default {
    props:{
       proveedor:Object,
    },

data(){
    return{
        empresa:'',
        tipoIdentificacion:'',
        identificacion:'',
        telefono:'',
        correo:'',
        origen:'',
        fechaRegistro:'',
    }
},
methods:{
    aceptar(){
        console.log("Antes de emitir");
        this.$emit("verPrincipal",true);
        console.log("Despues de emitir");
    }
},
created(){
    if(this.proveedor){
        this.empresa = this.proveedor.nombreEmpresa;
        this.tipoIdentificacion = this.proveedor.tipoIdentificacion;
        this.identificacion =this.proveedor.identificacion;
        this.telefono=this.proveedor.telefono;
        this.correo=this.proveedor.correo;
        this.origen=this.proveedor.origen;
        this.fechaRegistro=this.fechaRegistro;
    }
}
}

</script>

<style>

</style>