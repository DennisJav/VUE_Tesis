<template>
  <VerProveedor :proveedor="proveedor" @verPrincipal="ver_Principal"></VerProveedor>
</template>

<script>
import VerProveedor from '../components/VerProveedor.vue'
export default {
  props:{
    proveedor:'',
  },
  data(){
return{
  flag:'false'
}
  },
  components: { VerProveedor },
  methods:{
    ver_Principal(flag){
      console.log("Llegando el flag en el padre: "+flag);
       this.flag=flag;
       this.$emit("ver_Principal",this.flag);
    }
  }

}
</script>

<style>

</style>