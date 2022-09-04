<template>
  <section>
    <div class="banner">
      <div class="banner__slider">
        <div class="slider__item">
          <router-link class="slider__btn" to="/">
            <a>Explore collection</a>
          </router-link>
        </div>
        <div class="slider__item">
          <router-link class="slider__btn" to="/">
            <a>Explore collection</a>
          </router-link>
        </div>
        <div class="slider__item">
          <router-link class="slider__btn" to="/">
            <a>Explore collection</a>
          </router-link>
        </div>
        <div class="slider__item clone-first">
          <router-link class="slider__btn" to="/">
            <a>Explore collection</a>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        carousel: {
          slider: document.querySelector(".banner__slider"),
          slideIndex: 0
        }
      }
    },
    methods: {
      startCarousel() {
        const context = this;
        let slider = document.querySelector(".banner__slider");
        let sliderItems = document.querySelectorAll(".slider__item");
        let slideWidth = document.querySelector(".slider__item").clientWidth;
        this.sliderInterval = setInterval(function(){
            context.carousel.slideIndex++;
            slider.style.transition = "0.3s linear"
            slider.style.transform = `translate(-${slideWidth * context.carousel.slideIndex}px)`;
            if(context.carousel.slideIndex === 3) {
              setTimeout(()=> {
                slider.style.transition = "none"
                slider.style.transform = `translate(0px)`;
                context.carousel.slideIndex = 0;
              },1000)
            }
          console.log("slideIndex: " + context.carousel.slideIndex);
          console.log("sliderItems.length: " + sliderItems.length);

        }, 50000);
      }
    },
    mounted(){
      this.startCarousel()
    }
  }
</script>
<style>
  .banner {
    background-color: #E7EAEF;
    height: 92vh;
    overflow: hidden;
  }

  .banner__slider {
    height: 100%;
    width: calc(100%*4);
    display: flex;
    flex-wrap: wrap;
  }
  .slider__item {
    width: 25%;
    height: 100%;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 50%;
    position: relative;
  }

  .slider__item:nth-child(1) {
    background-image: url("@/assets/img/banner.svg");
  }

  .slider__item:nth-child(2) {
    background-image: url("@/assets/img/banner.svg");
  }

  .slider__item:nth-child(3) {
    background-image: url("@/assets/img/banner.svg");
  }

  .slider__item:nth-child(4) {
    background-image: url("@/assets/img/banner.svg");
  }

  .slider__item:nth-child(2n) {
    background-color: green;
  }

  .slider__item:nth-child(2n-1) {
    background-color: red;
  }

  .slider__btn {
    position: absolute;
    min-width: 260px;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    border-radius: 30px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 8px 30px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    color: #FCFCFC;
  }

</style>