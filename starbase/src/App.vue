<template>
  <div id="app">
    <h3>{{title}}</h3>
    <div class="col-md-12">
      <Character
      v-for="(id,index) in initial_ids"
      :id="id"
      key="index"/>
      <!--ou plutot v-bind:id="id" et key = index car il faut différencier les éléments-->
    </div>
  </div>
</template>

<script>
  import Character from './components/Character.vue'
  export default {
    name: 'app',
    data(){
      return {
        title: 'Generate Your Team',
        initial_ids: [1,13,14]
      }
    },
    components:{ // injecter les components dans notre application
      Character
    }
  }
</script>
