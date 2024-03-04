<template>
  <div class="contenedor">
    <div>
      <input type="text" v-model="buscar" placeholder="Buscar " @input="cargarListaBusqueda">
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Origen</td>
            <td>Telefono</td>
            <td>Email</td>
            <td>Tipo Identificacion</td>
            <td>Identificacion</td>
            <td>Fecha Registro</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in listaProv" :key="index">
            <td>{{ p.nombreEmpresa }}</td>
            <td>{{ p.origen }}</td>
            <td>{{ p.telefono }}</td>
            <td>{{ p.correo }}</td>
            <td>{{ p.tipoIdentificacion }}</td>
            <td>{{ p.identificacion }}</td>
            <td>{{ p.fechaRegistro }}</td>
            <td>
              <button @click="verProveedor(p.identificacion)">ver</button>
              <button @click="editarProveedor(p.identificacion)">editar</button>
              <button @click="eliminarPorveedor(p.identificacion)">liminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { listarProveedoresFachada,
  listarPorNombreOIdentifiFachada,
  cargarProveedorPorIdentificacionFachada,
  eliminarProPorIdentificacionFachada
} from "../helpers/ProveedorCliente";

export default {
  data() {
    return {
      listaProv: null,
      buscar:'',
      proveedor:'',
    };
  },
  methods: {
    async obtenerProveedores() {
      const response = await listarProveedoresFachada();
      this.listaProv = response.data;
    },
    async cargarListaBusqueda(){
      if(this.buscar.trim()==''){
        await this.obtenerProveedores();
      }else{
        console.log("antes de mandar al cliente prov: "+this.buscar);
        const response = await listarPorNombreOIdentifiFachada(this.buscar);
        this.listaProv = response.data;
      }
    },
   async verProveedor(identificacion){
           const response = await cargarProveedorPorIdentificacionFachada(identificacion);
           this.proveedor = response.data;
           console.log("queriendo enviar al proveedor: "+this.proveedor+" con identificacion: "+identificacion);
           this.$emit("enviarProveedor",this.proveedor);
    },
    async editarProveedor(identificacion){
      const response = await cargarProveedorPorIdentificacionFachada(identificacion);
           this.proveedor = response.data;
           console.log("queriendo enviar al proveedor para editar: "+this.proveedor+" con identificacion: "+identificacion);
           this.$emit("enviarProveedorEdit",this.proveedor);
    },
    async eliminarPorveedor(identificacion){
          const response = await eliminarProPorIdentificacionFachada(identificacion);
          if(response.status==200){
            window.alert("Proveedor eliminado correctamente con la identi: "+identificacion);
            this.obtenerProveedores();
          }
    }
  },
  watch:{
          buscar(){
            this.cargarListaBusqueda();
          }
  },
  created() {
    this.obtenerProveedores();
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  display: grid;
  align-items: center;
  border: 1px solid black;
}
</style>
