<template>
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
</style>
