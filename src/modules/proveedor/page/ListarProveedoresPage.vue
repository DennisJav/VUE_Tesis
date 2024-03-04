<template>
<component 
:is="componenteActual" :proveedor="proveedor"

@ver_Principal="recibirVerPrincipal"
@verE_Principal="recibir_verE_Principal"
@enviarProveedor="recibirProveedor" 
@enviarProveedorEdit="recibirEditProveedor">
</component>
</template>

<script>

import ListarProveedor from '../components/ListarProveedor.vue'
import EditarProveedorPage from './EditarProveedorPage.vue';
import VerProveedorPage from './VerProveedorPage.vue';
export default {
  components: { ListarProveedor, VerProveedorPage, EditarProveedorPage, },
  data(){
    return{
       proveedor:'',
       flagVer:false,
       flagEdit:false,
    }
  },
  methods:{
    recibirProveedor(proveedor){
      if(proveedor){
        this.proveedor=proveedor;
        this.flagVer=true;

      }
         
    },
    recibirEditProveedor(proveedorEdit){
      if(proveedorEdit){
        this.flagEdit=true;
        this.proveedor = proveedorEdit;
      }
         
    },
    recibirVerPrincipal(flagVer){
      console.log("Ver en el principal: "+flagVer);
      if(flagVer){
        this.flagVer=false;
        this.flagEdit=false;
      }
       
    },
    recibir_verE_Principal(flagEdit){
        if(flagEdit){
          this.flagVer=false;
        this.flagEdit=false;
        }
    }
  },
  computed: {
    componenteActual() {
      if (this.flagEdit) {
        return 'EditarProveedorPage';
      } else if (this.flagVer) {
        return 'VerProveedorPage';
      } else{
        return 'ListarProveedor';
      }
    }
  },
}
</script>

<style>

</style>