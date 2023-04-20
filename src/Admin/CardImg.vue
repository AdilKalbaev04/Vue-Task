<template>
  <div class="card">
    <RouterLink class="link" to="/Admin"
      >Back <img class="back" src="../../public/back.svg" alt=""
    /></RouterLink>
    <h1>ALL IMAGES</h1>

    <form class="form" @submit.prevent="onSubmitData">
      <VButton class="btn">save</VButton>

      <div class="table">
        <h4>Key Features</h4>

        <img class="img" :src="dataPage.data.key_features?.images.url" alt="" />
        <input
          name="key_features"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>
      <div class="table">
        <h4>What We Do</h4>
        <img class="img" :src="dataPage.data.what_we_do?.images.url" alt="" />
        <input name="what_we_do" @change="changeImg" class="file" type="file" />
      </div>
      <div class="table">
        <h4>Design Perfection</h4>
        <img
          class="img"
          :src="dataPage.data.design_perfection?.images.url"
          alt=""
        />
        <input
          name="design_perfection"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>

      <div class="table">
        <h4>About Us</h4>
        <span>Image 1</span>
        <img class="img" :src="dataPage.data.about_us?.images.url" alt="" />
        <input name="about_us" @change="changeImg" class="file" type="file" />
      </div>
      <div class="table">
        <h4>About Us</h4>
        <span>Image 2</span>
        <img class="img" :src="dataPage.data.about_us?.images2.url" alt="" />
        <input name="about_us2" @change="changeImg" class="file" type="file" />
      </div>
      <div class="table">
        <h4>About Us</h4>
        <span>Image 3</span>
        <img class="img" :src="dataPage.data.about_us?.images3.url" alt="" />
        <input name="about_us3" @change="changeImg" class="file" type="file" />
      </div>
      <div class="table">
        <h4>Digital Marketing</h4>
        <img
          class="img"
          :src="dataPage.data.digital_marketing?.images.url"
          alt=""
        />
        <input
          name="digital_marketing"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>

      <div class="table">
        <h4>Achievement 1</h4>
        <img class="img" :src="dataPage.data.achievement?.images.url" alt="" />
        <input
          name="achievement"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>

      <div class="table">
        <h4>Achievement 2</h4>
        <img class="img" :src="dataPage.data.achievement?.images2.url" alt="" />
        <input
          name="achievement"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>
      <div class="table">
        <h4>Achievement 3</h4>
        <img class="img" :src="dataPage.data.achievement?.images3.url" alt="" />
        <input
          name="achievement"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>
      <div class="table">
        <h4>Achievement 4</h4>
        <img class="img" :src="dataPage.data.achievement?.images4.url" alt="" />
        <input
          name="achievement"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>
      <div class="table">
        <h4>Achievement 5</h4>
        <img class="img" :src="dataPage.data.achievement?.images5.url" alt="" />
        <input
          name="achievement"
          @change="changeImg"
          class="file"
          type="file"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { changeDataImg, getDataImg } from '../api/request'
import { RouterLink } from 'vue-router'
let dataImg = reactive({
  img: {},
  title: ''
})
const dataPage = reactive({
  data: {}
})

getDataImg().then((res) => {
  dataPage.data = res.data
})
const onSubmitData = () => {
  const submitData = new FormData()
  submitData.append('files', dataImg.img)
  changeDataImg(submitData, dataPage.data[dataImg.title].images.id)
}

const changeImg = (event) => {
  console.log(event)
  dataImg.img = event.target.files[0]
  dataImg.title = event.target.name
}
</script>

<style scoped>
@font-face {
  font-family: 'icomoon';
  src: url('./fonts/icomoon.eot?6pi20p');
  src: url('./fonts/icomoon.eot?6pi20p#iefix') format('embedded-opentype'),
    url('./fonts/icomoon.ttf?6pi20p') format('truetype'),
    url('./fonts/icomoon.woff?6pi20p') format('woff'),
    url('./fonts/icomoon.svg?6pi20p#icomoon') format('svg');
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

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-basket:before {
  content: '\e903';
  color: #ccc;
}
.icon-pencil:before {
  content: '\e901';
  color: #ccc;
}
.icon-home:before {
  content: '\e902';
  color: #ccc;
}
.icon-copy:before {
  content: '\e900';
  color: #ccc;
}
.card_cont {
  display: flex;
  justify-content: center;
}

.card {
  padding: 20px;
  width: 100%;
  background: rgb(24, 24, 38);
}

.img {
  width: 200px;
}
input,
textarea {
  width: 100%;
  padding: 20px;
  border: 1px solid rgb(74, 74, 106);
  background: none;
  color: rgb(165, 165, 186);
}
.file {
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  color: rgb(165, 165, 186);
}
a {
  color: white;
  text-decoration: none;
}
b {
  color: white;
}
h4 {
  color: white;
}
span {
  color: white;
}
h1 {
  color: white;
}
.back {
  width: 25px;
}
.link {
  display: flex;
  align-items: center;
  gap: 5px;
}
.table {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  background: rgb(33, 33, 52);
  padding: 20px;
}

.btn {
  width: 200px;
  background: rgb(65, 65, 172);
  position: absolute;
  top: 50px;
  right: 130px;
}
.btn:active {
  transform: scale(0.9);
}
.form {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
