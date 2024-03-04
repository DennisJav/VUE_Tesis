<template>
<component  
:is="componenteActual"
:repuesto="repuesto"

@ver_Principal="recibirVerprincipal"
@verEPrincipal="recibirVerEPrincipal"
@enviarRepuesto="recRepuesto"
@enviarRepuestoEditar="recEditRepuesto"
></component>

</template>

<script>
import ListarRepuestos from '../components/ListarRepuestos.vue'
import VerRepuestoPage from './VerRepuestoPage.vue';
import EditarRepuestoPage from './EditarRepuestoPage.vue';
export default {
  components: { ListarRepuestos, VerRepuestoPage,EditarRepuestoPage },
  data() {
    return {
      repuesto: '',
      flagVer: false,
      flagEdit:false,
    }
  },
  methods:{
    recRepuesto(repuesto,flag){
      this.flagVer=flag;
      this.repuesto = repuesto;
    },
    recEditRepuesto(repuesto,flagEdit){
           this.repuesto = repuesto;
           this.flagEdit = flagEdit;
    },
    recibirVerprincipal(flag){
         if(flag){
          this.flagVer=false;
          this.flagEdit=false;
         }
    },
    recibirVerEPrincipal(flag){
        if(flag){
          this.flagVer=false;
          this.flagEdit=false;
        }
    } 
  },
  computed:{
    componenteActual(){
      if(this.flagVer){
        return 'VerRepuestoPage';
      }else if(this.flagEdit){
           return 'EditarRepuestoPage';
      }else{
        return 'ListarRepuestos';
      }
    }
  }

}
</script>

<style>

</style>