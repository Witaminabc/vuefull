<template>
  <div id="">
    <div id="product">
      <div class="container">
        <div class="row">
          <item v-for="item in items" v-bind:item_data="item"></item>

        </div>
      </div>
    </div>

  </div>

</template>

<script>

import item from "./Item.vue"
import buyitem from "./Buyitem.vue"








  export default {
    name: 'Carttest',

    components: {
      'item': item,
      'buyitem':buyitem
    },
  data () {
    return {


      items: [
        {
          img: "https://chenyiya.com/codepen/product-1.jpg",
          title: "Beer Bottle",
          price: "25",
          id: 1
        },
        {
          img: "https://chenyiya.com/codepen/product-2.jpg",
          title: "Eco Bag",
          price: "73",
          id: 2
        },
        {
          img: "https://chenyiya.com/codepen/product-3.jpg",
          title: "Paper Bag",
          price: "35",
          id: 3
        }
      ],
      buyitems: []
    }
  },
  methods: {
    // total: function(){
    //   var sum = 0;
    //   this.$store.getters.buyitem.forEach(function(buyitem){
    //     sum += parseInt(buyitem.total);
    //   });
    //   return sum;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
