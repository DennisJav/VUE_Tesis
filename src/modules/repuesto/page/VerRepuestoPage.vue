<template>
  <VerRepuesto :repuesto="repuesto" @verPrincipal="ver_Principal"></VerRepuesto>
</template>

<script>
import VerRepuesto from '../components/VerRepuesto.vue'
export default {
    props: {
      repuesto: Object,
    },
    methods:{
      ver_Principal(flag){
         this.$emit("ver_Principal",flag);
      }
    },
  components: { VerRepuesto },

}
</script>

<style>

</style>