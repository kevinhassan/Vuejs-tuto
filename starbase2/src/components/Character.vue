<template>
  <div class="">
    {{character}}
  </div>

</template>

<script>
  export default{
    data(){
      return {
        character: {}
      }
    },
    methods:{
      fetchCharacter(){
        fetch('http://swapi.co/api/people/1',{
          method: 'GET'
        }).then(response=>response.json())
        .then(json => this.character = json)
      }
    },
    created(){
      this.fetchCharacter() //Lancé dès la création du component
    }
  }
</script>
