<template>
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
</template>

<script setup>
import { reactive } from 'vue'
import { getDataImg } from '../../api/request'
// let dataImg = reactive({
//   img: {},
//   title: ''
// })
const dataPage = reactive({
  data: {}
})

getDataImg().then((res) => {
  dataPage.data = res.data
})
</script>

<style scoped>
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
}
.icon-twitterV2:before {
  content: '\e906';
  color: white;
}
.icon-youtubeV2:before {
  content: '\e907';
  color: white;
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
</style>
