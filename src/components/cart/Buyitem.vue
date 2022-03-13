<template>
  <div class="row">
    <div id="head">
      <h3>Shopping Cart</h3>
      <div id="price">Price</div>
      <div id="quantity">Quantity</div>
      <div id="total">Total</div>
    </div>
    <div v-for="buyitemss in buyitem">
      <div>{{ buyitemss.id }}</div>
      <img :src="buyitemss.img"/>
      <h4>{{ buyitemss.title }}</h4>
      <p>$ {{ buyitemss.price }}</p>
      <div class="qty-minus" v-on:click="minusQty(buyitemss)">-</div>
      <div class="qty">{{ buyitemss.qty }}</div>
      <div class="qty-plus" v-on:click="plusQty(buyitemss)">+</div>
      <div class="del" v-on:click="removeItem(buyitemss)">Remove</div>
      <div class="totalprice">{{ buyitemss.total }}</div>

      <!--    {{buyitem}}-->
    </div>
    <h5 v-if="total()">Sum: $ {{ total() }}</h5>

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

  },

  // props: ["buy_data", "buyitems"],
  methods: {
    removeItem: function(buy_data) {
      var index = this.$store.getters.buyitem.indexOf(buy_data);
      this.$store.getters.buyitem.splice(index, 1);
      // if (buy_data.id == "beer") {
      //   this.$parent.beerClick = 0;
      // } else if (buy_data.id == "eco-bag") {
      //   this.$parent.ecoClick = 0;
      // } else {
      //   this.$parent.paperClick = 0;
      // }
    },
    plusQty: function(buy_data){
      buy_data.qty += 1;
      buy_data.total = buy_data.qty*buy_data.price;
    },
    minusQty: function(buy_data){
      buy_data.qty -= 1;
      if (buy_data.qty < 1){
        buy_data.qty = 0;
        this.removeItem(buy_data);
      }
      buy_data.total = buy_data.qty*buy_data.price;
    },
  total: function(){
    var sum = 0;
    this.$store.getters.buyitem.forEach(function(buyitem){
      sum += parseInt(buyitem.total);
    });
    return sum;
  }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartno{
}

img {
  height: 100px;
  float: left;
}
.qty-minus {
  float: left;
  width: 20px;
  line-height: 100px;
  margin-left: 60px;
  text-align: center;
  cursor: pointer;
}
.qty {
  float: left;
  width: 20px;
  line-height: 100px;
  margin-left: 20px;
  text-align: center;
}
.qty-plus {
  float: left;
  width: 20px;
  line-height: 100px;
  margin-left: 20px;
  text-align: center;
  cursor: pointer;
}
.del {
  float: left;
  width: 80px;
  line-height: 100px;
  margin-left: 60px;
  cursor: pointer;
  text-decoration: underline;
  color: #ED277F;
}
.totalprice {
  float: left;
  width: 80px;
  line-height: 100px;
  margin-left: 10px;
  text-align: right;
}
.row p::before, .box p::before, .totalprice::before {
  content: "$";
}
</style>
