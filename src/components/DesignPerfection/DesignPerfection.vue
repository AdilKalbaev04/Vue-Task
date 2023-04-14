<template>
  <div class="Cont_block_3">
    <div class="img_wrap">
      <img class="img" :src="dataPage.data.design_perfection?.images.url" alt="" />
    </div>
    <div class="block_3_text">
      <span class="title">{{ dataPage?.data?.design_perfection?.title }}</span>
      <p class="text">
        {{ dataPage?.data?.design_perfection?.desc }}
      </p>
      <div class="link_cont">
        <span>Image from </span>
        <a class="link" href="https://www.freepik.com/" target="_blank"
          >Freepik</a
        >
      </div>

      <div>
        <VButton class="btn" @click="showModal = true">Learn more</VButton>

        <BackDrop @click="showModal = false" v-if="showModal" />
        <div v-if="showModal">
          <div class="modal">
            <div class="info_cont">
              <span class="text_2"
                >{{ dataPage?.data?.design_perfection?.title }}
              </span>
              <p class="short_text">
                {{ dataPage?.data?.design_perfection?.desc }}
              </p>
            </div>
            <button class="btn_modal" @click="showModal = false">
              <img class="exit" src="/exit.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="circle"></div>
  </div>
</template>

<script setup>
import BackDrop from '../UI/BackDrop/BackDrop.vue'
import { ref, reactive } from 'vue'
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
.info_cont {
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: center;
}
.text_2 {
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
  font-weight: 400;
  color: white;
}
.short_text {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: white;
}
.btn_modal {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: #545af8 !important;
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
  background-color: #545af8 !important;
  padding: 20px;
  z-index: 9999;
  max-width: 500px;
  min-height: 400px;
  border-radius: 20px;
}
.Cont_block_3 {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 70px;
  padding: 80px;
}
.img_wrap {
  max-width: 695px;
}
.img {
  width: 100%;
}
.title {
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
  font-weight: 400;
}
.text {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.link_cont {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.btn {
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  margin: 20px auto 0 0;
  padding: 14px 32px 15px;
  background-color: #545af8 !important;
}
.block_3_text {
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
.btn:hover {
  background-color: #3e44f8 !important;
}
.circle {
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
  .Cont_block_3 {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  .circle {
    display: none;
  }
}
</style>
