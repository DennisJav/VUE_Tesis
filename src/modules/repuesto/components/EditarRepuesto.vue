<template>
  <div>
    <div class="entradas">
      <input type="text" v-model="nombre" placeholder="Nombre" />
      <input type="text" v-model="tipo" placeholder="Tipo" />
      <input type="text" v-model="codigoBarras" placeholder="Codigo Barras" disabled/>
      <input type="text" v-model="precio" placeholder="precio" />
      <input type="number" v-model="stock" placeholder="cantidad" />

      <input
        type="radio"
        id="activo"
        name="grupo"
        value="true"
        v-model="estado"
      />
      <label for="activo">Activo</label><br />
      <input
        type="radio"
        id="noActivo"
        name="grupo"
        value="false"
        v-model="estado"
      />
      <label for="noActivo">No Activo</label><br />
    </div>

    <div class="botones">
      <button @click="editarRepuesto">Editar</button>
      <button @click="cancelarEdicion">Cancelar</button>
    </div>
  </div>
</template>

<script>

import { actualizarRepuestoFachada } from '../helpers/RepuestoCliente';

export default {
    props: {
  repuestoEdit: Object,
},
  data() {
    return {
      tipo: "",
      precio: "",
      nombre: "",
      stock: "",
      codigoBarras: "",
      estado: '',
      flag:false,
    };
  },
  methods: {
  async editarRepuesto(){

     const repuesto={
      tipo:this.tipo,
      precio:this.precio,
      nombre:this.nombre,
      stock:this.stock,
      codBarras:this.codigoBarras,
      estado:this.estado,
     };

    const response =await actualizarRepuestoFachada(repuesto); 
      if(response.status === 200){
       window.alert("Editado correctamente");
       this.flag=true;
       this.$emit("verEPrincipal",this.flag);
      }        
    },
    cancelarEdicion(){
      this.flag=true;
      this.$emit("verEPrincipal",this.flag);
    }

  },
  created(){
    if (this.repuestoEdit) {
      this.nombre = this.repuestoEdit.nombre;
      this.tipo = this.repuestoEdit.tipo;
      this.codigoBarras = this.repuestoEdit.codBarras;
      this.precio = this.repuestoEdit.precio;
      this.stock = this.repuestoEdit.stock;
      this.estado = this.repuestoEdit.estado;
      
      console.log("creando repuesto editar: "+this.nombre);
    }
  }
};
</script>

<style></style>
