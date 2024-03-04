<template>
  <h1>Editar page</h1>
  <EditarRepuesto :repuestoEdit="repuesto" @verEPrincipal="verEPrincipal"></EditarRepuesto>
</template>

<script>
import EditarRepuesto from '../components/EditarRepuesto.vue'
export default {
  props: {
  repuesto: Object,
  
},
methods:{
  verEPrincipal(flag){
      this.$emit("verEPrincipal",flag);
  }
},
  components: { EditarRepuesto },

}
</script>


<style>

</style>