<template>
  <main class="Cont_Main">
    <div class="wrapper">
      <div class="text">
        <span class="text_title"> {{ dataPage?.data?.main?.sometext }}</span>
        <h1 class="title">
          {{ dataPage?.data?.main?.title }}
        </h1>

        <div class="icons_cont">
          <i
            href="https://www.facebook.com/"
            target="_blank"
            class="icon-facebook"
          ></i>
          <i
            href="https://www.instagram.com/"
            target="_blank"
            class="icon-instagramV2"
          ></i>
          <i
            href="https://twitter.com/"
            target="_blank"
            class="icon-twitterV2"
          ></i>
          <i
            href="https://www.youtube.com/"
            target="_blank"
            class="icon-youtubeV2"
          ></i>
        </div>
      </div>
      <div class="text2">
        <span class="text2_desc">{{ dataPage?.data?.main?.desc }}</span>
        <b class="text_3">{{ dataPage?.data?.main?.text2 }}</b>

        <div>
          <VButton @click="showModal = true">LEARN MORE</VButton>

          <BackDrop @click="showModal = false" v-if="showModal" />
          <div v-if="showModal">
            <div class="modal">
              <div class="info_cont">
                <span class="text_2">{{ dataPage?.data?.main?.desc }}</span>
                <b class="short_text">{{ dataPage?.data?.main?.text2 }}</b>
              </div>
              <button class="btn_modal" @click="showModal = false">
                <img class="exit" src="/exit.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="Cont_Block_1">
    <div class="text_cont">
      <span class="title"> {{ dataPage?.data?.key_features?.title }}</span>
      <p class="some_text">
        {{ dataPage?.data?.key_features?.desc }}
      </p>
    </div>
    <div class="img_wrapper">
      <div class="img_wrap">
        <img class="img" :src="dataPage.data.key_features?.images.url" alt="" />
      </div>
      <div class="block_1_cont_icons">
        <div class="block_1_icons">
          <i class="icon-dev"></i>
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
        <div class="block_2_icons">
          <i class="icon-skill"></i>
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
        <div class="block_3_icons">
          <i class="icon-design"></i>
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
        <div class="block_4_icons">
          <i class="icon-res"></i>
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
      </div>
    </div>
  </div>
  <div class="Cont_block_2">
    <div class="block_2">
      <span class="title2"> {{ dataPage?.data?.what_we_do?.title }}</span>
      <p class="text5">
        {{ dataPage?.data?.what_we_do?.desc }}
      </p>
      <div class="img_wrap">
        <img class="img" :src="dataPage.data.what_we_do?.images.url" alt="" />
      </div>
    </div>
  </div>

  <div class="Cont_block_3_design">
    <div class="img_wrap_design">
      <img
        class="img_design"
        :src="dataPage.data.design_perfection?.images.url"
        alt=""
      />
    </div>
    <div class="block_3_text_design">
      <span class="title_design">{{
        dataPage?.data?.design_perfection?.title
      }}</span>
      <p class="text_design">
        {{ dataPage?.data?.design_perfection?.desc }}
      </p>
      <div class="link_cont_design">
        <span>Image from </span>
        <a class="link_design" href="https://www.freepik.com/" target="_blank"
          >Freepik</a
        >
      </div>

      <div>
        <VButton class="btn_design" @click="showModal = true"
          >Learn more</VButton
        >

        <BackDrop @click="showModal = false" v-if="showModal" />
        <div v-if="showModal">
          <div class="modal_design">
            <div class="info_cont_design">
              <span class="text_2_design"
                >{{ dataPage?.data?.design_perfection?.title }}
              </span>
              <p class="short_text_design">
                {{ dataPage?.data?.design_perfection?.desc }}
              </p>
            </div>
            <button class="btn_modal_design" @click="showModal = false">
              <img class="exit_design" src="/exit.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="circle_design"></div>
  </div>
</template>

<script setup>
import BackDrop from '../UI/BackDrop/BackDrop.vue'
import { reactive, ref } from 'vue'
import { getDataImg } from '../../api/request'
const dataPage = reactive({
  data: {}
})
getDataImg().then((res) => {
  dataPage.data = res.data
})
const showModal = ref(false)
</script>

<style scoped>
.info_cont_design {
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: center;
}
.text_2_design {
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
  font-weight: 400;
  color: white;
}
.short_text_design {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: white;
}
.btn_modal_design {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: #545af8 !important;
}
.exit_design {
  width: 20px;
  height: 20px;
}
.modal_design {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #545af8 !important;
  padding: 20px;
  z-index: 9999;
  max-width: 500px;
  min-height: 400px;
  border-radius: 20px;
}
.Cont_block_3_design {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 70px;
  padding: 80px;
}
.img_wrap_design {
  max-width: 695px;
}
.img_design {
  width: 100%;
}
.title_design {
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
  font-weight: 400;
}
.text_design {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.link_cont_design {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.btn_design {
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  margin: 20px auto 0 0;
  padding: 14px 32px 15px;
  background-color: #545af8 !important;
}
.block_3_text_design {
  gap: 10px;
  max-width: 385px;
  background-color: #f2f2f2;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
  margin-top: 60px;
}
.btn:hover_design {
  background-color: #3e44f8 !important;
}
.circle_design {
  position: absolute;
  top: 0;
  right: 459px;
  width: 228px;
  height: 228px;
  background-image: linear-gradient(#e84a90, #545af8);
  border-radius: 50%;
  z-index: 2;
}
@media screen and (max-width: 1190px) {
  .Cont_block_3_design {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .circle_design {
    display: none;
  }
}

.Cont_block_2 {
  color: #111111;
  background-color: #e5e5e5;
}
.block_2 {
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 35px;
  margin-bottom: 50px;
}
.title2 {
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 1.1;
  font-family: 'Bai Jamjuree';
}
.text5 {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  max-width: 651px;
  line-height: 32px;
}
.link_cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: 'Bai Jamjuree';
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  color: #111111 !important;
  padding: 30px;
}
.link {
  text-decoration: underline #111111;
  color: #111111;
}
.img_wrap {
  max-width: 570px;
  min-height: 352px;
}
.img {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.eot?re0rmg');
  src: url('fonts/icomoon.eot?re0rmg#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?re0rmg') format('truetype'),
    url('fonts/icomoon.woff?re0rmg') format('woff'),
    url('fonts/icomoon.svg?re0rmg#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^='icon-'],
[class*=' icon-'] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: 90px;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-design:before {
  content: '\e900';
  color: #545af8;
}
.icon-res:before {
  content: '\e901';
}
.icon-skill:before {
  content: '\e902';
  color: #545af8;
}
.icon-dev:before {
  content: '\e950 ';
}
.icon-twitter:before {
  content: '\e904';
}
.icon-instagramV2:before {
  content: '\e905';
  color: white;
  font-size: 16px;
}
.icon-twitterV2:before {
  content: '\e906';
  color: white;
  font-size: 16px;
}
.icon-youtubeV2:before {
  content: '\e907';
  color: white;
  font-size: 16px;
}
.icon-youtube:before {
  content: '\e908';
}
.icon-twitter1:before {
  content: '\e909';
}
.icon-facebook:before {
  content: '\e90a';
  color: white;
  font-size: 16px;
}
.icon-facebook1:before {
  content: '\e90b';
}
.icon-mail:before {
  content: '\e90c';
}
.icon-call:before {
  content: '\e90d';
}
.icon-location:before {
  content: '\e90e';
}
.Cont_Block_1 {
  margin-bottom: 40px;
}
.img_wrap {
  max-width: 649px;
}
.img {
  width: 100%;
}
.block_1_cont_icons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.block_1_icons {
  max-width: 275px;
  color: #ffffff;
  background-color: #e84a90;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_2_icons {
  max-width: 275px;
  color: #111111;
  background-color: #e5e5e5;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_3_icons {
  max-width: 275px;
  color: #111111;
  background-color: #e5e5e5;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_4_icons {
  max-width: 275px;
  color: #ffffff;
  background-color: #545af8;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_1_icons_text {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
}
.img_wrapper {
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
}
.title {
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 1.1;
  font-family: 'Bai Jamjuree';
}
.some_text {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Bai Jamjuree';
}
.text_cont {
  text-align: center;
  text-align: center;
  padding: 40px;
}
.link_cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: 'Bai Jamjuree';
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  color: #111111 !important;
  padding: 30px;
}
.link {
  color: #111111;
  text-decoration: underline;
}

@media screen and (max-width: 1100px) {
  .img_wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
  }
  .block_1_cont_icons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
}

.info_cont {
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: center;
}
.text_2 {
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
}
.short_text {
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.7;
}
.btn_modal {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: #e84a90;
}
.exit {
  width: 20px;
  height: 20px;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e84a90;
  padding: 20px;
  z-index: 9999;
  max-width: 500px;
  min-height: 400px;
  border-radius: 20px;
}

.Cont_Main {
  background-image: url('/background.jpg');
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 650px;
  color: white;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1136px;
  margin: 0 auto;
}
.link_cont {
  display: flex;
  gap: 5px;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
}
.btn {
  color: #ffffff !important;
  background-color: #e84a90 !important;
  border-radius: 50px !important;
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  border-style: none;
  margin: 35px auto 0 0;
  padding: 14px 32px 15px;
}
.link {
  color: white;
}
.title {
  font-size: 4rem;
  color: rgb(255, 255, 255);
}
.text {
  font-family: 'Bai Jamjuree', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: rgb(255, 255, 255);
}
.text2 {
  max-width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  padding: 30px;
  color: rgb(255, 255, 255);
}
.text_3 {
  font-weight: bold;
  font-size: 1.25rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.7;
  color: rgb(255, 255, 255);
}
.text2_desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
  color: rgb(255, 255, 255);
}
.icons_cont {
  position: absolute;
  top: 460px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 40px;
}
.text_title {
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 300;
}
@media screen and (max-width: 900px) {
  .wrapper {
    flex-direction: column;
  }
  .icons_cont {
    display: none;
  }
  .text2 {
    padding: 20px;
    max-width: unset;
  }
}

@media screen and (max-width: 600px) {
  .text {
    align-items: center;
  }
  .title {
    font-size: 2rem;
  }
}
</style>
