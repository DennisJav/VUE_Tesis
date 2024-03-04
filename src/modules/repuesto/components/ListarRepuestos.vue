<template>
  <div class="contenedor">
    <div>
      <input
        type="text"
        v-model="buscar"
        placeholder="Buscar "
        @input="cargarListaBusqueda"
      />
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nombre</td>
            <td>Tipo</td>
            <td>Codigo Barras</td>
            <td>Precio</td>
            <td>Stock</td>
            <td>Estado</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in lista" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.tipo }}</td>
            <td>{{ item.codBarras }}</td>
            <td>{{ item.precio }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.estado ? "Activo" : "InActivo" }}</td>
            <td>
              <button @click="verRepuesto(item.codBarras)">Ver</button>
              <button @click="editarRepuesto(item.codBarras)">Editar</button>
              <button @click="eliminarRepuesto(item.codBarras)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  listarRepuestosFachada,
  verRepuestoPorCodBarrasFachada,
  buscarPorCodBarraONombreFachada,
  eliminarPorCodBarrasFachada,
} from "../helpers/RepuestoCliente";

export default {
  data() {
    return {
      lista: [],
      repuesto: "",
      repuEdit: "",
      buscar: "",
    };
  },
  methods: {
    async cargarLista() {
      const response = await listarRepuestosFachada();
      this.lista = response.data;
    },
    async verRepuesto(codBarras) {
      const response = await verRepuestoPorCodBarrasFachada(codBarras);
      this.repuesto = response.data;
      this.$emit("enviarRepuesto", this.repuesto, true);
    },
    async editarRepuesto(codBarras) {
      const response = await verRepuestoPorCodBarrasFachada(codBarras);
      this.repuEdit = response.data;
      console.log(
        "enviando repuesto para editar: " + this.repuEdit.nombre + " prueba"
      );
      this.$emit("enviarRepuestoEditar", this.repuEdit, true);
    },
    async eliminarRepuesto(codBarras) {
      try {
        const response = await eliminarPorCodBarrasFachada(codBarras);
        const headers = response.headers;
        const detailMessage = headers.get("detailMessage");
        const errorMessage = headers.get("errorMessage");

        if (response.status === 200) {
          window.alert("Eliminado correctamente");
          this.cargarLista();
        } else {
          window.alert(errorMessage);
        }
      } catch (error) {
        console.error("Error al eliminar el repuesto:", error);
        window.alert("Se produjo un error al eliminar el repuesto");
      }
    },
    async cargarListaBusqueda() {
      if (this.buscar.trim() === "") {
        await this.cargarLista();
      } else {
        const response = await buscarPorCodBarraONombreFachada(this.buscar);
        this.lista = response.data;
      }
    },
    mostrarhref(item) {
      for (let link of item.links) {
        if (link.rel === "proveedor") {
          const href = link.href;
          console.log("href del proveedor: " + href);
          break;
        }
      }
    },
  },
  watch: {
    buscar() {
      this.cargarListaBusqueda();
    },
  },
  created() {
    this.cargarLista();
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
