<template>
  <div class="Cont_block_4">
    <div class="wrapper">
      <div class="block_4_text_1">
        <img :src="dataPage.data.achievement?.images.url" alt="" />
        <span class="title">{{ dataPage?.data?.achievement?.title }}</span>
        <p class="text">
          {{ dataPage?.data?.achievement?.desc }}
        </p>
        <a class="link" href="#">MORE</a>
      </div>
      <div class="block_4_text_2">
        <img :src="dataPage.data.achievement?.images2.url" alt="" />
        <span class="title2">{{ dataPage?.data?.achievement?.title2 }}</span>
        <p class="text">
          {{ dataPage?.data?.achievement?.desc2 }}
        </p>
        <a class="link" href="#">MORE</a>
      </div>
      <div class="block_4_text_3">
        <img :src="dataPage.data.achievement?.images3.url" alt="" />
        <span class="title">{{ dataPage?.data?.achievement?.title3 }}</span>
        <p class="text">
          {{ dataPage?.data?.achievement?.desc3 }}
        </p>
        <a class="link" href="#">MORE</a>
      </div>
      <div class="block_4_text_4">
        <img :src="dataPage.data.achievement?.images4.url" alt="" />
        <span class="title2">{{ dataPage?.data?.achievement?.title4 }}</span>
        <p class="text">
          {{ dataPage?.data?.achievement?.desc4 }}
        </p>
        <a class="link" href="#">MORE</a>
      </div>
      <div class="block_4_text_5">
        <img :src="dataPage.data.achievement?.images5.url" alt="" />
        <span class="title">{{ dataPage?.data?.achievement?.title5 }}</span>
        <p class="text">
          {{ dataPage?.data?.achievement?.desc5 }}
        </p>
        <a class="link" href="#">MORE</a>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div class="Cont_block_4">
    <div class="wrapper">
      <div class="block_4_text_1">
        <img :src="dataPage.data.achievement?.images.url" alt="" />
        <span class="title">{{ dataPage?.data?.achievement?.title }}</span>
        <p class="text">
          {{ dataPage?.data?.achievement?.desc }}
        </p>
        <a class="link" href="#">MORE</a>
      </div>

      <div>
        <VueAchievementBlock
          v-for="item in dataPage.data"
          :key="item"
          :message="item?.achievement?.title"
          count="2"
        />
      </div>
    </div>
  </div>
</template> -->

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
.Cont_block_4 {
  background-image: linear-gradient(#545af8, #e84a90);
  min-height: 761px;
  max-width: 100%;
}
.wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 80px;
}
.block_4_text_1 {
  max-width: 215px;
  height: 440px;
  box-shadow: 5px 5px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px !important;
  background: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 130px;
}
.block_4_text_2 {
  max-width: 215px;
  height: 440px;
  box-shadow: 5px 5px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px !important;
  background: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.block_4_text_3 {
  max-width: 215px;
  height: 440px;
  box-shadow: 5px 5px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px !important;
  background: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 130px;
}
.block_4_text_4 {
  max-width: 215px;
  height: 440px;
  box-shadow: 5px 5px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px !important;
  background: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.block_4_text_5 {
  max-width: 215px;
  height: 440px;
  box-shadow: 5px 5px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px !important;
  background: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 130px;
}
.title {
  text-transform: uppercase;
  color: #e84a90 !important;
  word-wrap: break-word;
  letter-spacing: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
}
.title2 {
  text-transform: uppercase;
  word-wrap: break-word;
  letter-spacing: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
  color: #545af8 !important;
}
.text {
  font-style: italic;
  font-size: 1.25rem;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  color: #4c615a !important;
  word-wrap: break-word;
}
.link {
  color: #111111 !important;
  border-width: 1px;
  border-style: none none solid;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
}
@media screen and (max-width: 950px) {
  .wrapper {
    display: flex;
    gap: 20px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
  .block_4_text_1 {
    margin: 0;
  }
  .block_4_text_3 {
    margin: 0;
  }
  .block_4_text_5 {
    margin: 0;
  }
}
</style>
