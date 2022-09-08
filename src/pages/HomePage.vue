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
        <ul class="nav">
          <li class="nav__item nav__current" @click="filterArrival('all'), navTarget($event)">
            All
            <rectangle-icon class="nav__rectangle" 
            v-if="this.currentType === 'all'"
            :style="{fill:'red'}"
            >
      </rectangle-icon> 
          </li>
          <li class="nav__item" @click="filterArrival('apparel'), navTarget($event)">
            Apparel
            <rectangle-icon class="nav__rectangle"
            v-if="this.currentType === 'apparel'"
            :style="{fill:'red'}"
            >
      </rectangle-icon> 
          </li>
          <li class="nav__item" @click="filterArrival('dress'), navTarget($event)">
            Dress
            <rectangle-icon class="nav__rectangle"
            v-if="this.currentType === 'dress'"
            :style="{fill:'red'}"
            >
      </rectangle-icon> 
          </li>
          <li class="nav__item" @click="filterArrival('tshirt'), navTarget($event)">
            Tshirt
            <rectangle-icon class="nav__rectangle" 
            v-if="this.currentType === 'tshirt'"
            :style="{fill:'red'}"
            >
          </rectangle-icon> 
          </li>
          <li class="nav__item" @click="filterArrival('bag'), navTarget($event)">
            Bag
            <rectangle-icon class="nav__rectangle" 
            v-if="this.currentType === 'bag'"
            :style="{fill:'red'}"
            >
            </rectangle-icon> 
          </li>
        </ul>
        <div class="new-arrival__wrap">
          <div 
          v-for="item in filteredArrival" 
          class="new-arrival__item">
            <img class="new-arrival__img" :src="item.url" alt="arrival">
            <p class="new-arrival__title">{{item.name}}</p>
            <span class="new-arrival__price">{{item.price}}</span>
          </div>
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
    <div class="jfu section">
      <div class="container jfu__container">
        <h1 class="title">Just for you</h1>
        <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="line">
        <div class="jfu__wrap" 
        @mousedown = "startSlider"
        @mousemove = "moveSlider"
        @mouseup="stopSlider"
        >
          <div 
          v-for="item in arrival" 
          class="jfu__item">
            <img class="jfu__img" :src="item.url" alt="arrival">
            <p class="jfu__title">{{item.name}}</p>
            <span class="jfu__price">{{item.price}}</span>
            <span class="jfu__price">x: {{x}}</span>
          </div>
        </div>
      </div>
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
        },
        arrival: [
          {id:1, type: "apparel", name: "21WN reversible angora cardigan", url:require("@/assets/img/arrival1.svg"),price: "$120"},
          {id:2, type: "dress", name: "21WN reversible angora cardigan", url:require("@/assets/img/arrival2.svg"),price: "$70"},
          {id:3, type: "tshirt", name: "21WN reversible angora cardigan", url:require("@/assets/img/arrival3.svg"),price: "$10"},
          {id:4, type: "bag", name: "21WN reversible angora cardigan", url:require("@/assets/img/arrival4.svg"),price: "$180"},
          {id:5, type: "bag", name: "21WN reversible angora cardigan", url:require("@/assets/img/arrival4.svg"),price: "$210"}
        ],
        filteredArrival: [],
        currentType: "",
        dragging: false,
        x: 'no'
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
          //console.log("slideIndex: " + context.carousel.slideIndex);
        }, 5000);
      },
      filterArrival(type) {
        this.filteredArrival = [];
        if(type === "all") {
         this.filteredArrival = this.arrival.filter(item => item.type)
        }else {
          this.filteredArrival = this.arrival.filter(item => item.type === type)
        }
        this.currentType = type
        console.log(this.currentType)
      },
      navTarget(event) {
        let navLinks = document.querySelectorAll(".nav__item");
       for(let i = 0; i < navLinks.length; i++) {
          if(navLinks[i].classList.contains("nav__current")){
            navLinks[i].classList.remove("nav__current")
          }
        }
        event.target.classList.add("nav__current")
        console.log(navLinks)
      },
      startSlider(event) {
        this.dragging = true;
        this.x = event.clientX
        console.log(this.x)
      },
      stopSlider() {
        this.dragging = false;
        this.x = 'no'
        console.log("Отпустили мышь")
      },
      moveSlider(event) {
        if (this.dragging) {
          this.x = event.clientX;
          console.log(this.x)
        }
      }
    },
    mounted(){
      this.startCarousel();
      this.filterArrival("all");
      window.addEventListener('mouseup', this.stopSlider)
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

  .nav {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
  }

  .nav__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #888888;
    font-size: 14px;
  }

  .nav__current {
    color: #212806;
  }

  .new-arrival__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .new-arrival__item {
    width: 45%;
    margin: 5px 0;
  }

  .new-arrival__img {
    width: 100%;
  }

  .new-arrival__title {
    color:#333333;
    font-size: 12px;
  }

  .new-arrival__price {
    color: #dd8560;
    font-size: 15px;
  }

  .jfu__wrap {
    display: flex;
    width: calc(45%*5);
    justify-content: space-between;
  }

  .jfu__item {
    width: 45%;
    margin: 5px 5px;
  }

  .jfu__item:last-child {
    margin-right: 0px;
  }

  .jfu__img {
    width: 100%;
  }

  .jfu__title {
    color:#333333;
    font-size: 12px;
  }

  .jfu__price {
    color: #dd8560;
    font-size: 15px;
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