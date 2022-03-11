<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"

      background="#ababab"
      img-width="1024"
      img-height="300"
      @sliding-start="next"
      @sliding-end="prev"
    >
      <!-- Text slides with image -->
      <b-carousel-slide :img-src="require('../assets/slaider/carusel_1.jpg')" ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="require('../assets/slaider/slaider_2.jpg')"></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide :img-src="require('../assets/slaider/slaider_3.jpg')"></b-carousel-slide>


    </b-carousel>


  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    next(slide) {
      this.sliding = true
    },
    prev(slide) {
      this.sliding = false
    }
  }
}
</script>
<style>
.carousel-item::after {
  display: none!important;
}
</style>



