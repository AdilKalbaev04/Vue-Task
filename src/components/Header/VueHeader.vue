<template>
  <header class="Cont_Header">
    <div class="logo_cont">
      <a href="#"> <img class="logo" src="../icons/logo.png" alt="" /></a>
      <div class="icons_cont">
        <a class="auth" href="/Admin">Sing in</a>
        <a class="auth" href="/auth">Sing up</a>
        <!-- <a
          class="auth"
          @click="
            () => {
              Cookie.remove('key')
            }
          "
          href="/Admin"
          >EXIT</a
        > -->

        <a href="https://www.facebook.com/" target="_blank">
          <img class="icons" src="../icons/facebook.png" alt="" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img class="icons" src="../icons/twitter.png" alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img class="icons" src="../icons/instagram.png" alt="" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
// import Cookie from 'js-cookie'
</script>

<style scoped>
.Cont_Header {
  max-width: 1506px;
  margin: 0 auto;
}
.icons {
  height: 26px;
  width: 26px;
}
.logo_cont {
  display: flex;
  max-width: 1152px;
  align-items: center;
  padding: 25px;
  margin: 0 auto;
  justify-content: space-between;
}
.icons_cont {
  display: flex;
  align-items: center;
  gap: 10px;
}
.auth {
  text-decoration: none;
  color: #111111;
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 500;
}
</style>
