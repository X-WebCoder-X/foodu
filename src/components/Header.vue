<template>
  <header>
    <div class="header">
      <div class="header__item">
        <input type="checkbox" id="toogle-menu">
        <label for="toogle-menu">
          <img class="header__icon" src="@/assets/icons/menu.svg" alt="gamburger-menu">
        </label>
      </div>
      <div class="header__item">
        <router-link to="#">
          <img src="@/assets/icons/logo.svg" alt="logo">
        </router-link>
      </div>
      <div class="header__item">
        <img class="header__icon" src="@/assets/icons/search.svg" alt="search">
        <img class="header__icon" src="@/assets/icons/basket.svg" alt="basket">
      </div>
    </div>
  </header>
</template>
<style scoped>
  header {
    height: 8vh;
  }
  .header {
    background-color: #E7EAEF;
    display: flex;
    justify-content: space-around;
    padding: 18px 0;
    align-items: center;
    position:fixed;
    width: 100%;
    height: 8vh;
    z-index: 999;
  }

  .header__icon {
    padding: 0 8px;
  }
</style>