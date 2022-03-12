<template>






<!--<div class="container">-->
  <div class="container m-5">
  <nav>
    <ul class="topmenu">
      <li><a href="" class="active">Каталог</a>
        <ul class="submenu">
          <li><a href="">меню второго уровня</a></li>
          <li><a href="">меню второго уровня<span class="fa fa-angle-down"></span></a>
            <ul class="submenu">
              <li><a href="">меню третьего уровня</a></li>
              <li><a href="">меню третьего уровня</a></li>
              <li><a href="">меню третьего уровня</a></li>
            </ul>
          </li>
          <li><a href="">меню второго уровня</a></li>
        </ul>
      </li>
      <li><a href="">🎁 Подарки</a></li>
      <li><a href="">Скидки и акции</a></li>
      <li><a href="">Доставка

      </a></li>
      <li><a href="">ТОЛЬКО ОРИГИНАЛЫ</a></li>
      <li><a href="">Оплата</a></li>
      <i class="fa fa-plus" v-on:click="addNew()">плюс</i>

      <li><a href="">О компании{{buyitem}}</a></li>
      <li class="point"><span>...</span>
        <ul class="submenu">
          <li><a href="">Полезный блог</a></li>
          <li><a href="">Контакты</a></li>
        </ul>
      </li>

<!--      <li><a href="">Полезный блог</a></li>-->
<!--      <li><a href="">Контакты</a></li>-->


    </ul>
  </nav>

    <plus></plus>

    <carusel></carusel>

    <carttest></carttest>

  </div>

<!--</div>-->
</template>

<script>
import Plus from "./Plus.vue"
import Carusel from "./Carusel.vue"
import Carttest from "./cart/Carttest.vue"
import {mapGetters} from "vuex";



export default {
  components: {
    'plus': Plus,
    'carusel':Carusel,
    'carttest':Carttest
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['user', 'userAuthorized', 'url', 'tablet', 'mobile','buyitem'])

  },
  methods: {
    addNew() {
      this.$store.commit('increment', { text: 'новая заметка' })
    }
  }
}
</script>


<style>


nav {
  background: black;
//box-shadow: 0 2px 0 0 #ECF1F2;
  text-align: center;
  color: white;
}
nav a {
  text-decoration: none;
  display: block;
  transition: .3s linear;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.topmenu > li {
  display: inline-block;
  position: relative;
//border: 1px solid #ECF1F2;
}
.topmenu > li:last-child {border-right: 1px solid #ECF1F2;}
.topmenu > li > a {
//font-weight: bold;
  padding: 10px 10px;
  padding-bottom: 0;
  font-size: 12px;
  text-transform: uppercase;
//letter-spacing: 2px;
  color: white;
}
.active:after, .submenu-link:after {
  content: "\f107";
//font-family: "FontAwesome";
  color: inherit;
  margin-left: 10px;
}
.topmenu .active, .topmenu > li > a:hover, .submenu li a:hover {color: #ddbe86;}
.submenu {
  position: absolute;
  left: -1px;
  z-index: 5;
  width: 240px;
  border-bottom: 1px solid #ECF1F2;
  visibility: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: .3s ease-in-out;

}







.topmenu > li a::after {
  content: "";
  display: none;

}


.topmenu > li a::after{
  content: "";
  border-top: 2px solid deeppink;
  width: 80%;
  display: block;
  position: absolute;
  opacity: 0;
  bottom:-10px;
}

.topmenu li:hover a::after{
  bottom:0px;
  transition-duration: 1s;
  opacity: 1;
}




.topmenu > li a::before{
  content: "";
  border-top: 2px solid deeppink;
  width: 80%;
  display: block;
  position: absolute;
  top:-10px;
  opacity: 0;

}

.topmenu li:hover a::before{
  top:0px;
  transition-duration: 1s;

  opacity: 1;
}


.submenu li a:after {
  content: "";
  display: none;
}



.submenu li a:before {
  content: "";
  display: none;
}
.point{
  border-style: none!important;
  width: 50px;
  letter-spacing: 5px;
}
.point span{
  font-size: 23px;
  text-align: center;
  font-weight: 900;

}
.submenu li {position: relative; border-top: 1px solid #ECF1F2;
  border-right: 1px solid #ECF1F2;
  border-left: 1px solid #ECF1F2;
  padding-bottom: 0;
}
.submenu a {
  background: white;

  color: #1c1c1c;
  text-align: left;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px 20px;
  padding-bottom: 0;

}
.submenu .submenu {
  position: absolute;
  top: 0;
  left: calc(100% - 1px);
  left: -webkit-calc(100% - 1px);
/*//background: url('./src/img/BP_icons-01 (1).jpeg');*/
}
nav li:hover > .submenu {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}
</style>

<!--<style module>-->
<!--@import '../scss/index.module.scss';-->
<!--</style>-->
