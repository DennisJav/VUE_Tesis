<template>
  <EditarProveedor :proveedor="proveedor" @verPrincipal="verPrincipal"></EditarProveedor>
</template>

<script>
import EditarProveedor from '../components/EditarProveedor.vue'
export default {
    props:{
        proveedor:Object,
    },
    data(){
        return{
           flag:false,
        }
    },
  components: { EditarProveedor },
  methods:{
    verPrincipal(flag){
         this.flag=flag;
         this.$emit("verE_Principal",this.flag);
    }
  }

}
</script>

<style>

</style>