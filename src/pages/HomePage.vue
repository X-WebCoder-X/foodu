<template>
  <section>
    <div class="banner">
      <div class="banner__slider" ref="bannerSlider">
        <div class="slider__item" ref="sliderItem">
          <router-link class="slider__btn" to="/">
            <a>Explore collection0</a>
          </router-link>
        </div>
        <div class="slider__item">
          <router-link class="slider__btn" to="/">
            <a>Explore collection1</a>
          </router-link>
        </div>
        <div class="slider__item">
          <router-link class="slider__btn" to="/">
            <a>Explore collection2</a>
          </router-link>
        </div>
        <div class="slider__item clone-first">
          <router-link class="slider__btn" to="/">
            <a>Explore collection0</a>
          </router-link>
        </div>
      </div>
      <div class="slider__dots">
        <rectangle-icon 
        :style="{fill : this.carousel.slideIndex === 0 || this.carousel.slideIndex === 3 ? '#fff' : 'none'}"
        >
      </rectangle-icon>
        <rectangle-icon 
        :style="{fill : this.carousel.slideIndex === 1 ? '#fff' : 'none'}"
        >
      </rectangle-icon>
        <rectangle-icon 
        :style="{fill : this.carousel.slideIndex === 2 ? '#fff' : 'none'}"
        >
      </rectangle-icon>
      </div>
    </div>
  </section>
  <section>
    <div class="new-arrival">
      <h1 class="title">New Arrival</h1>
      <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="line">
      <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Apparel</a></li>
        <li><a href="#">Dress</a></li>
        <li><a href="#">Tshirt</a></li>
        <li><a href="#">Bag</a></li>
      </ul>
    </div>
  </section>
  <section>
    <div class="video__section">
      <video width="100%" controls>
        <source src="@/assets/video/main_theme.mp4" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    </div>
  </section>
  <section>
    <div class="follow-us">
      <div class="container">
        <h1 class="title">follow us</h1>
        <img src="@/assets/icons/Instagram-white.svg" alt="instagram">
        <div class="follows__wrap">
          <a class="follows__item" href="https://www.instagram.com">
            <img class="follows__img" src="@/assets/img/follow_Mia.svg" alt="">
          </a>
          <a class="follows__item" href="https://www.instagram.com">
            <img class="follows__img" src="@/assets/img/follow_Jihyn.svg" alt="">
          </a>
          <a class="follows__item" href="https://www.instagram.com">
            <img class="follows__img" src="@/assets/img/follow_Mia2.svg" alt="">
          </a>
          <a class="follows__item" href="https://www.instagram.com">
            <img class="follows__img" src="@/assets/img/follow_Jihyn2.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import RectangleIcon from "@/components/svg/RectangleIcon.vue"
  export default {
  components: { RectangleIcon },
    data() {
      return {
        carousel: {
          slider: document.querySelector(".banner__slider"),
          slideIndex: 0,
        }
      }
    },
    methods: {
      startCarousel() {
        const context = this;
        let slider = this.$refs.bannerSlider;
        let sliderItems = document.querySelectorAll(".slider__item");
        let slideWidth = this.$refs.sliderItem.clientWidth;
        this.sliderInterval = setInterval(function(){
            context.carousel.slideIndex++;
            slider.style.transition = "0.3s linear"
            slider.style.transform = `translate(-${slideWidth * context.carousel.slideIndex}px)`;
            if(context.carousel.slideIndex === 3) {
              setTimeout(function() {
                slider.style.transition = "none"
                slider.style.transform = `translate(0px)`;
                context.carousel.slideIndex = 0;
              },1000)
            }
          console.log("slideIndex: " + context.carousel.slideIndex);
          console.log("sliderItems.length: " + sliderItems.length);

        }, 5000);
      }
    },
    mounted(){
      this.startCarousel()
    }
  }
</script>
<style scoped>
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

  .slider__dots {
    position: absolute;
    width: 41px;
    height: 12px;
    bottom: 16px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .follow-us {
    background-color: #E5e5e5;
    padding: 18px;
  }

  .title {
    text-transform: uppercase;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }

  .follows__wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .follows__item {
    display: block;
    width: 45%;
    margin: 5px 0;
  }

  .follows__img {
    width: 100%;
    height: 100%;
  }

  
</style>