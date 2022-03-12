<template>
  <div id="">
    <div id="product">
      <item v-for="item in items" v-bind:item_data="item"></item>
    </div>
    <div id="cart">
      <div id="head">
        <h3>Shopping Cart</h3>
        <div id="price">Price</div>
        <div id="quantity">Quantity</div>
        <div id="total">Total</div>
      </div>
      <router-link :to="{ name: 'Buyitem', params: { Id: 123 }}">cart</router-link>
<!--      <buyitem v-for="buyitem in buyitems" v-bind:buy_data="buyitem"></buyitem>-->
      <h5 v-if="total()">Sum: $ {{total()}}</h5>
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
      beerClick :0,
      ecoClick :0,
      paperClick :0,

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
    total: function(){
      var sum = 0;
      this.buyitems.forEach(function(buyitem){
        sum += parseInt(buyitem.total);
      });
      return sum;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
