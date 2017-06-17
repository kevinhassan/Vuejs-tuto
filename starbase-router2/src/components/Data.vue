<template>
  <div class="">
    Type : {{type}}
  </div>
</template>

<script>
  export default {
    data(){
      return {
        type: this.$route.params.type
      }
    },
    watch:{
      '$route': 'change'//appel la fonction change() si on change de route
    },
    methods:{
      change(){//met à jour la variable 'type' sur notre page
        this.type = this.$route.params.type
      }
    }
  }
</script>
