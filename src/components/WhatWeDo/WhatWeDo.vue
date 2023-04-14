<template>
  <div class="Cont_block_2">
    <div class="block_2">
      <span class="title"> {{ dataPage?.data?.what_we_do?.title }}</span>
      <p class="text">
        {{ dataPage?.data?.what_we_do?.desc }}
      </p>
      <div class="img_wrap">
        <img class="img" :src="dataPage.data.what_we_do?.images.url" alt="" />
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
.title {
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 1.1;
  font-family: 'Bai Jamjuree';
}
.text {
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
</style>
