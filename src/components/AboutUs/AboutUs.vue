<template>
  <div class="Cont_block_5">
    <div class="img_wrap">
      <img class="img" :src="dataPage.data.about_us?.images.url" alt="" />
    </div>
    <div class="block_cont">
      <div class="text_cont">
        <span class="title">{{ dataPage?.data?.about_us?.title }}</span>
        <p class="text">
          {{ dataPage?.data?.about_us?.desc }}
        </p>
      </div>
      <div class="img_wrap_3">
        <img class="img3" :src="dataPage.data.about_us?.images2.url" alt="" />
      </div>
    </div>
    <div class="block_cont_2">
      <div class="img_wrap_2">
        <img class="img2" :src="dataPage.data.about_us?.images3.url" alt="" />
      </div>
      <div class="text_cont_2">
        <div class="svg_wrap"><img class="xz" src="/xz.png" alt="" /></div>
        <span class="title_2">{{ dataPage?.data?.about_us?.banner }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { getDataImg } from '../../api/request'
const dataPage = reactive({
  data: {}
})

getDataImg().then((res) => {
  dataPage.data = res.data
})
</script>

<style scoped>
.block_cont {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
}
.Cont_block_5 {
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link_cont {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.img_wrap {
  max-width: 400px;
  margin-bottom: 180px;
}
.img {
  width: 100%;
}
.img2 {
  width: 100%;
}
.img3 {
  width: 100%;
}
.img_wrap_2 {
  max-width: 380px;
}
.img_wrap_3 {
  max-width: 360px;
}
.title {
  font-family: 'Bai Jamjuree';
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.2;
}
.title_2 {
  line-height: 1.6;
  font-weight: 400;
  font-family: 'Bai Jamjuree';
  font-size: 2.25rem;
  color: white;
}
.svg_wrap {
  width: 64px;
}
.xz {
  width: 100%;
}
.text {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  color: #111111;
}
.text_cont {
  padding: 30px;
  max-width: 360px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.text_cont_2 {
  max-width: 380px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-image: linear-gradient(#545af8, #e84a90);
}
.block_cont_2 {
  display: flex;
  flex-direction: column;
  margin-bottom: 276px;
}
@media screen and (max-width: 1150px) {
  .Cont_block_5 {
    flex-direction: column;
    gap: 20px;
  }
  .block_cont {
    margin: 0;
  }
  .img_wrap {
    margin: 0;
  }
}
</style>
