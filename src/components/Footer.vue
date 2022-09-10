<template>
  <footer>
    <div class="footer">
      <div class="footer__icons">
        <router-link to="/twitter" class="icons__item" id="twitter">
          <img src="@/assets/icons/twitter.svg" alt="twitter">
        </router-link>
        <router-link to="/instagram" class="icons__item" id="">
          <img src="@/assets/icons/instagram.svg" alt="twitter">
        </router-link>
        <router-link to="/youtube" class="icons__item" id="">
          <img src="@/assets/icons/youtube.svg" alt="twitter">
        </router-link>
      </div>
      <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="twitter">
      <div class="footer_contacts">
        <router-link  class="contacts__item" to="email"><p>support@openui.design</p></router-link>
        <router-link  class="contacts__item" to="tel:+60825876"><p>+60 825 876</p></router-link>
        <p class="contacts__item" >08:00 - 22:00 - EveryDay</p>
      </div>
      <img src="@/assets/icons/left-right-arrow.svg" class="left-right-arrow" alt="twitter">
      <div class="footer__links">
        <router-link to="#" class="links__item">About</router-link>
        <router-link to="#" class="links__item">Contact</router-link>
        <router-link to="/blog" class="links__item">Blog</router-link> 
      </div>
      <div class="copyright">
        <p class="copyright__text">Copyright© OpenUI All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
  .footer {
    font-family: "Tenor Sans";
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer__icons {
    display: flex;
    justify-content: center;
  }

  .icons__item {
    margin: 22px;
  }

  .footer_contacts {
    margin: 22px 0;
    color: #333;
    line-height: 1.7;
  }

  .contacts__item {
    text-decoration: none;
    color: #333;
  }

  .footer__links {
    margin: 22px 0;
  }

  .links__item {
    margin: 0 22px;
    text-decoration: none;
    color: #000;
  }
  .copyright {
    width: 100%;
    background-color: #C4C4C4;
    font-size: 12px;
    color: #555;
  }

  .copyright__text {
    padding: 15px 0;
  }
</style>