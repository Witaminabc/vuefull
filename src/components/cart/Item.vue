<template>
  <div class="box">
    <img :src="item_data.img"/>
    <i class="fa fa-plus" v-on:click="addItem(item_data)">плюс</i>
    <h2>{{item_data.title}}</h2>
    <p>$ {{item_data.price}}</p>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'    }
  },
  computed: {
    ...mapGetters(['user', 'userAuthorized', 'url', 'tablet', 'mobile','buyitem','notes'])


  },
  props: ["item_data", "buyitems"],
  methods: {
    addItem: function(buy_data) {
      if (this.findIndex(this.$store.getters.buyitem,'id',buy_data.id)<0) {
        console.log(this.findIndex(this.$store.getters.buyitem,'id',buy_data.id))
        // this.$store.getters.buyitem.qty=1;
        // this.$store.getters.buyitem.qty+=1;
        // this.$store.getters.buyitem.indexOf(buy_data);
        // this.findIndex(this.$store.getters.buyitem,'id',buy_data.id)
        this.addNew(buy_data);
        // if (this.$store.getters.buyitem.qty <= 1) {
        //   this.addNew();
      } else {
        var i = this.findIndex(this.$store.getters.buyitem,'id',buy_data.id);
        this.$store.getters.buyitem[i].qty += 1;
        this.$store.getters.buyitem[i].total = this.$store.getters.buyitem[i].qty * this.$store.getters.buyitem[i].price;
        console.log(i);
      }
    },
      addNew:function() {
        this.$store.commit('increment', {
          img: this.item_data.img,
          title: this.item_data.title,
          price: this.item_data.price,
          qty: 1,
          total: this.item_data.price,
          id: this.item_data.id
        })
      },
    findIndex: function(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
