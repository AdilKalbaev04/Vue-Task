<template>
  <div class="Cont_block_6">
    <div class="wrapper">
      <div class="background"></div>
      <div class="block_6">
        <div class="img_wrap"><img class="img" src="/static.jpg" alt="" /></div>
        <div class="text_cont">
          <span class="title"> Digital Marketing</span>
          <p class="text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div class="link_cont">
            <span>Image from </span> <a class="link" href="">Freepik</a>
          </div>
          <a href="#"> <VButton class="btn">read more</VButton></a>
        </div>
      </div>
      <div class="background_2"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.Cont_block_6 {
  margin-top: 130px;
  margin-bottom: 130px;
}
.wrapper {
  position: relative;
}
.block_6 {
  max-width: 1018px;
  min-height: 566px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 5;
}

.img_wrap {
  max-width: 550px;
}
.img {
  width: 85%;
}
.link_cont {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.text_cont {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title {
  text-transform: none;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
}
.text {
  letter-spacing: normal;
  line-height: 32px;
  font-size: 1.25rem;
  font-weight: 300;
  color: #111111;
  font-family: 'Open Sans', sans-serif;
}
.btn {
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  margin: 20px auto 0 0;
  padding: 14px 32px 15px;
  background-color: #545af8 !important;
}
.btn:hover {
  background-color: #3e44f8 !important;
}
.background {
  height: 403px;
  width: 1014px;
  background-image: linear-gradient(#545af8, #e84a90);
  position: absolute;
  top: -70px;
  right: 190px;
  z-index: -1;
}
.background_2 {
  width: 757px;
  height: 452px;
  background-color: #e84a90;
  position: absolute;
  top: 190px;
  left: 185px;
  z-index: -1;
}
@media screen and (max-width: 950px) {
  .background_2 {
    display: none;
  }
  .background {
    display: none;
  }
  .block_6 {
    max-width: 1018px;
    min-height: 566px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    z-index: 5;
    padding: 20px;
    flex-direction: column;
  }
 
}
</style>
