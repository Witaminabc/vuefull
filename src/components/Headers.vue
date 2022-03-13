<template>






  <!--<div class="container">-->
  <div class="container m-2">
    <div class="row align-items-center justify-content-center">
      <div class="col-3">
        <img src="../assets/headers/logo.png" height="70">

      </div>
      <div class="col-3">
        <b-form inline>


          <b-input-group  class="mb-2 mr-sm-2 mb-sm-0 rounded-circle">
            <b-form-input id="inline-form-input-username" placeholder="Поиск по каталогу"></b-form-input>
            <div class="input-group-append">
              <b-button class="input-group-text" id="basic-addon2">@</b-button>
            </div>
          </b-input-group>


        </b-form>
      </div>
      <div class="col-3">
        +7(495)777-40-45 <br>
        +7(969)777-85-35  <br>
        Онлайн консультант
      </div>
      <div class="col-3">
        <router-link :to="{ path: '/buyitem' }">cart<h6 v-if="this.buyitem.length>0">{{this.buyitem.length}}</h6></router-link>
      </div>
    </div>

  </div>

  <!--</div>-->
</template>

<script>
import {mapGetters} from "vuex";




export default {
  name: 'Headers',
  data() {
    return {
      names:'good'
    }
  },
  computed: {
    ...mapGetters(['buyitem'])

  },
}
</script>


<style>

</style>
