<template>
  <div class="contenedor">
    <table>
    <thead>
       <tr>
         <td>Nombre</td>
         <td>Telefono</td>
         <td>Email</td>
         <td>Acciones</td>   
    </tr>
    </thead>
    <tbody>
        <tr v-for="(p,index) in listaProv" :key="index">
         <td>{{ p.nombreEmpresa }}</td>
         <td>{{ p.telefono }}</td>
         <td>{{ p.correo }}</td>
         <td>
          <button>ver</button>
          <button>editar</button>
             <button>eliminar</button>
         </td>
        </tr>
    </tbody>

    </table>
  </div>
</template>

<script>
import { listarProveedoresFachada } from '../helpers/ProveedorCliente'

export default {
   data(){
     return{
        listaProv:null,
     }
   },
   methods:{
    async obtenerProveedores(){
        const response = await listarProveedoresFachada();
        this.listaProv=response.data;
    }
   },
   created() {
    this.obtenerProveedores();
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