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
    <div class="new-arrival section">
      <div class="container">
        <h1 class="title">New Arrival</h1>
      <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="line">
      <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Apparel</a></li>
        <li><a href="#">Dress</a></li>
        <li><a href="#">Tshirt</a></li>
        <li><a href="#">Bag</a></li>
      </ul>
      <div class="new-arrival__wrap">
        <div class="new-arrival__item">
          <img class="new-arrival__img" src="@/assets/img/arrival1.svg" alt="arrival">
          <p>item1</p>
          <span>$120</span>
        </div>
        <div class="new-arrival__item">
          <img class="new-arrival__img" src="@/assets/img/arrival2.svg" alt="arrival">
          <p>item2</p>
          <span>$120</span>
        </div>
        <div class="new-arrival__item">
          <img class="new-arrival__img" src="@/assets/img/arrival3.svg" alt="arrival">
          <p>item3</p>
          <span>$120</span>
        </div>
        <div class="new-arrival__item">
          <img class="new-arrival__img" src="@/assets/img/arrival4.svg" alt="arrival">
          <p>item4</p>
          <span>$120</span>
        </div>
        <div class="new-arrival__item">
          <img class="new-arrival__img" src="@/assets/img/arrival1.svg" alt="arrival">
          <p>item5</p>
          <span>$120</span>
        </div>
      </div>
      <div>
        <span>Explore more</span>
        <img src="" alt="">
      </div>
      </div>
    </div>
  </section>
  <section>
    <div class="brands section">
      <div class="container">
        <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="line">
        <div class="brands__grid grid">
          <div class="brands__item">
            <img class="brands__img" src="@/assets/icons/prada.svg" alt="icon">
          </div>
          <div class="brands__item">
            <img class="brands__img" src="@/assets/icons/burberry.svg" alt="icon">
          </div>
          <div class="brands__item">
            <img class="brands__img" src="@/assets/icons/boss.svg" alt="icon">
          </div>
          <div class="brands__item">
            <img class="brands__img" src="@/assets/icons/cartier.svg" alt="icon">
          </div>
          <div class="brands__item">
            <img class="brands__img" src="@/assets/icons/gucci.svg" alt="icon">
          </div>
          <div class="brands__item">
            <img class="brands__img" src="@/assets/icons/tiffany&co.svg" alt="icon">
          </div>
        </div>
        <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="line">
      </div>
    </div>
  </section>
  <section>
    <div class="collections section">
      <h1 class="title">collections</h1>
      <div class="collections__wrap">
        <router-link to="/">
          <div class="collections__link">
            <img src="@/assets/img/october_colletion.svg" alt="collection">
          </div>
        </router-link>
        <router-link to="/">
          <div class="collections__link">
            <img src="@/assets/img/autumn_collection.svg" alt="colletion">
          </div>
        </router-link>
      </div>
    </div>
  </section>
  <section>
    <div class="video__section section">
      <video width="100%" controls>
        <source src="@/assets/video/main_theme.mp4" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    </div>
  </section>
  <section>
    <div class="trending section">
      <div class="container">
        <h1 class="title">@trending</h1>
        <div class="trending__wrap">
          <span class="tag">#2022</span>
          <span class="tag">#spring</span>
          <span class="tag">#collection</span>
          <span class="tag">#fall</span>
          <span class="tag">#dress</span>
          <span class="tag">#autumcollecion</span>
          <span class="tag">#openfashion</span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="open-fashion section">
      <div class="container">
        <img src="@/assets/icons/logo-middle.svg" alt="logo-middle">
        <p class="subtitle open-fashion__text">Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</p>
        <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="line">
        <div class="open-fashion__grid grid">
          <div class="open-fashion__item">
            <img src="@/assets/icons/sweet.svg" alt="icon">
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
          <div class="open-fashion__item">
            <img src="@/assets/icons/tree.svg" alt="icon">
            <p>Sustainable process from start to finish.</p>
          </div>
          <div class="open-fashion__item">
            <img src="@/assets/icons/stick.svg" alt="icon">
            <p>Unique designs and high-quality materials.</p>
          </div>
          <div class="open-fashion__item">
            <img src="@/assets/icons/heart.svg" alt="icon">
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
        </div>
        <img src="@/assets/icons/lasso.svg" alt="lasso">
      </div>
    </div>
  </section>
  <section>
    <div class="follow-us section">
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
  .section {
    padding: 10px 0;
  }

  .grid {
    margin: 10px 0;
  }

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

  .new-arrival__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .new-arrival__item {
    width: 45%;
  }

  .new-arrival__img {
    width: 100%;
  }

  .brands__grid {
    display: grid;
    grid-template-columns: 1fr 8px 1fr 8px 1fr;
    grid-template-rows: 1fr 8px 1fr;
  }

  .brands__img {
    vertical-align: middle;
  }

  .brands__item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end:1;
    grid-row-start:1;
    grid-row-start:1;
  }

  .brands__item:nth-child(2) {
    grid-column-start: 3;
    grid-column-end:3;
    grid-row-start:1;
    grid-row-start:1;
  }
  
  .brands__item:nth-child(3) {
    grid-column-start: 5;
    grid-column-end:5;
    grid-row-start:1;
    grid-row-start:1;
  }

  .brands__item:nth-child(4) {
    grid-column-start: 1;
    grid-column-end:1;
    grid-row-start:3;
    grid-row-start:3;
  }

  .brands__item:nth-child(5) {
    grid-column-start: 3;
    grid-column-end:3;
    grid-row-start:3;
    grid-row-start:3;
  }

  .brands__item:nth-child(6) {
    grid-column-start: 5;
    grid-column-end:5;
    grid-row-start:3;
    grid-row-start:3;
  }

  .collections__link {
    margin: 22px 0;
  }

  .trending {
    padding: 10px 0;
  }

  .trending__wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    padding: 8px 10px;
    background-color: #f9f9f9;
    border-radius: 30px;
    margin: 4px;
    font-size: 14px;
  }

  .subtitle {
    text-align: center;
    color: #555;
  }

  .open-fashion {
    background-color: #f2f2f2;
  }

  .open-fashion__text {
    font-size: 14px;
    line-height: 20px;
    width: 80%;
    margin: 0 auto;
  }

  .open-fashion__grid {
    margin: 10px;
    display: grid;
    grid-template-rows: 1fr 15px 1fr;
    grid-template-columns: 1fr 8px 1fr;
  }

  .open-fashion__item:nth-child(2){
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  .open-fashion__item:nth-child(3){
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
  }

  .open-fashion__item:nth-child(4){
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
  }

  .follow-us {
    background-color: #fcfcfc;
    padding: 18px 0;
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
    width: 47.5%;
    margin: 5px 0;
  }

  .follows__img {
    width: 100%;
    height: 100%;
  }

  
</style>