<template>
  <div class="contenedor">

    <div class="entradas">
        <input type="text" v-model="nombre" placeholder="Nombre">
        <input type="text" v-model="tipo" placeholder="Tipo">
        <input type="text" v-model="codigoBarras" placeholder="Codigo Barras">
    <input type="text" v-model="precio" placeholder="precio">
    <input type="number" v-model="stock" placeholder="stock">


    <input type="radio" id="activo" name="grupo" value="true" v-model="estado">
  <label for="activo">Activo</label><br>
  <input type="radio" id="noActivo" name="grupo" value="false"  v-model="estado">
  <label for="noActivo">No Activo</label><br>
  

</div>
<div>
   
    <select v-model="proveedorNomEm" id="emp">
      <option disabled value="">Elija Proveedor</option>
    <option v-for="(item, index) in listaEm" :key="index" :value="item">{{ item }}</option>
 
    </select>
</div>
    
<div class="botones">
    <button @click="agregar">Add</button>
<button @click="guardarRepuestos">Guardar</button>

</div>



    
   <table>
    <thead>
        <tr>
            <td>#</td>
            <td>Nombre</td>
            <td>Tipo</td>
            <td>Codigo Barras</td>
            <td>Precio</td>
            <td>Stock</td>
            <td>Subtotal</td>
            <td>Estado</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item,index) in listaLocal " :key="index">
            <td>{{ index+1 }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.tipo }}</td>
        <td>{{ item.codBarras }}</td>
        <td>{{ item.precio }}</td>
        <td>{{ item.stock }}</td>
        <td>{{ calcularSubtotal(item) }}</td>
        <td>{{item.estado}}</td>
        </tr>
    </tbody>
   </table>
   
  </div>
</template>

<script>
import {guardarRepuestosFachada } from '../helpers/RepuestoCliente'
import {cargarListaEmpresasFachada} from '../../proveedor/helpers/ProveedorCliente'

export default {
    data() {
    return {
        tipo:'',
        precio:'',
        nombre:'',
        stock:'',
        equipo:'',
        proveedorNomEm:'------',
        codigoBarras:'',
        estado:true,
        subtotal:'',
        listaLocal: [],
        listaEm:[]
    };
  },
  methods:{
    async guardarRepuestos() {
    if (this.listaLocal.length > 0) {
        guardarRepuestosFachada(this.listaLocal, this.proveedorNomEm)
        
            .then(response => {
                if (response.status === 200) {
                    window.alert("Guardados correctamente");
                    this.listaLocal=[];
                } else {
                    window.alert("No se pudo guardar");
                }
            })
            .catch(error => {
                console.error("Error al guardar lista de repuestos: ", error);
                window.alert("Error al guardar lista de repuestos: " + error.message);
            });
    }
},
calcularSubtotal(item) {
      return (item.stock* item.precio).toFixed(2); // Multiplica cantidad por precio y redondea a 2 decimales
    },
    agregar(){
        
      var data={
        tipo:this.tipo,
        codBarras:this.codigoBarras,
        precio:this.precio,
        nombre:this.nombre,
        stock:this.stock,
        estado:this.estado
      };

             this.listaLocal.push(data);
    },
    async cargarListaEmpresas(){
          const response = await cargarListaEmpresasFachada();
          this.listaEm = response.data;
          console.log("tam de empresas: "+this.listaEm.length);
    }
  },
  created(){
        this.cargarListaEmpresas();
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

 .entradas{
    display: flex;
    justify-content: center;
    display: grid;
    align-items: center;
    border: 1px solid black;
 }

.botones{
    display: flex;
    justify-content: center;
    display: grid;
    align-items: center;
   
}

</style>