<template>    
  <div>
    teste      
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue'
import Footer from '~/components/Home/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  created: function () {
    this.$store.commit('alterarTitulo',"Pagina teste")
  }
}
</script>
