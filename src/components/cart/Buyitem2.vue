<template>
  <div class="row">
    <div>{{ $route.params.Id }}333</div>
    <div class="cart">123</div>
    <div class="cartno">
      <img :src="buy_data.img"/>
      <h4>{{buy_data.title}}</h4>
      <p>$ {{buy_data.price}}</p>
      <div class="qty-minus" v-on:click="minusQty(buy_data)">-</div>
      <div class="qty">{{buy_data.qty}}</div>
      <div class="qty-plus" v-on:click="plusQty(buy_data)">+</div>
      <div class="del" v-on:click="removeItem(buy_data)">Remove</div>
      <div class="totalprice">{{buy_data.total}}</div>
    </div>
    {{buyitem}}

  </div>

</template>

<script>

import {mapGetters} from "vuex";

export default {

  name: 'Buyitem',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2:this.$store.getters.buyitem

    }
  },
  computed: {
    ...mapGetters(['user', 'userAuthorized', 'url', 'tablet', 'mobile','buyitem','notes']),
    checked: {
      get() {
        return this.$store.getters.buyitem
      }
      // set(val) {
      //   this.$store.commit('updateChecked', val)
      // }
    }

  }

  // props: ["buy_data", "buyitems"],
  // methods: {
  //   removeItem: function(buy_data) {
  //     var index = this.$parent.buyitems.indexOf(buy_data);
  //     this.$parent.buyitems.splice(index, 1);
  //     if (buy_data.id == "beer") {
  //       this.$parent.beerClick = 0;
  //     } else if (buy_data.id == "eco-bag") {
  //       this.$parent.ecoClick = 0;
  //     } else {
  //       this.$parent.paperClick = 0;
  //     }
  //   },
  //   plusQty: function(buy_data){
  //     buy_data.qty += 1;
  //     buy_data.total = buy_data.qty*buy_data.price;
  //   },
  //   minusQty: function(buy_data){
  //     buy_data.qty -= 1;
  //     if (buy_data.qty < 0){
  //       buy_data.qty = 0;
  //     }
  //     buy_data.total = buy_data.qty*buy_data.price;
  //   }
  //
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartno{
}
.cart:hover .cartno{
  display: none;
  background: red;

}
</style>
