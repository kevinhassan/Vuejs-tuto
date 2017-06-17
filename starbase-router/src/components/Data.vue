<template>
  <div class="col-md-12">
    <Item
      v-for="(item,index) in items"
      key="index"
      :passedItem="item"
      :type="type"
    />
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    data(){
      return {
        type: this.$route.params.type,
        items: []
      }
    },
    watch:{
      '$route': 'fetchItems'//appel la fonction change() si on change de route
    },
    methods:{
      fetchItems(){
        this.items = []
        this.type = this.$route.params.type
        let initial_ids = [1,13,14]

        for (let i in initial_ids){
          let id = initial_ids[i]
          console.log(id)
          fetch(`http://swapi.co/api/${this.type}/${id}`,{
            method: 'GET'
          })
          .then(response=>response.json())
          .then(json => this.items.push(json))
        }
      }
    },
    created(){
      this.fetchItems()
    },
    components:{
      Item
    }
  }
</script>
