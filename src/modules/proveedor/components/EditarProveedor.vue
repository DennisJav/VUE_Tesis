<template>
    <div>
      <input type="text" v-model="nombreEmpresa" >
          <input type="email" v-model="correo">
          <input type="text" v-model="telefono">
          <input type="text" v-model="origen">
         <input type="text" v-model="tipoIdentificacion" disabled>
  
         
         <input type="text" v-model="identificacion" disabled>

         <input type="datetime-local" v-model="fechaRegistro">
        
          <div>
            <button @click="editarProveedor">Editar</button>
            <button @click="cancelar">Cancelar</button>
          </div>
    </div>
  </template>
  
  <script>

import { editarProveedorFachada } from '../helpers/ProveedorCliente';

  export default {
      props:{
         proveedor:Object,
      },
  
  data(){
      return{
        nombreEmpresa:'',
          tipoIdentificacion:'',
          identificacion:'',
          telefono:'',
          correo:'',
          origen:'',
          fechaRegistro:'',
          enviarVer:false,
      }
  },
  methods:{
    async editarProveedor(){
        const prov ={
            nombreEmpresa:this.nombreEmpresa,
          tipoIdentificacion:this.tipoIdentificacion,
          identificacion:this.identificacion,
          telefono:this.telefono,
          correo:this.correo,
          origen:this.origen,
          fechaRegistro:this.fechaRegistro,
        };
        const response=await editarProveedorFachada(prov) ;
        if(response.status==200){
            window.alert("Proveedor actualizado correctamente")
            this.enviarVer = true;
            this.$emit("verPrincipal",this.enviarVer);
        }
    },
    cancelar(){
        this.enviarVer = true;
            this.$emit("verPrincipal",this.enviarVer);
    }
   
  },
  created(){
      if(this.proveedor){
          this.nombreEmpresa = this.proveedor.nombreEmpresa;
          this.tipoIdentificacion = this.proveedor.tipoIdentificacion;
          this.identificacion =this.proveedor.identificacion;
          this.telefono=this.proveedor.telefono;
          this.correo=this.proveedor.correo;
          this.origen=this.proveedor.origen;
          this.fechaRegistro=this.proveedor.fechaRegistro.slice(0, 16);
          console.log("fecha de registro: "+this.fechaRegistro);
      }
  }
  }
  
  </script>
  
  <style>
  
  </style>