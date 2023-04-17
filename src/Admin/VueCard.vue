<template>
  <div class="card">
    <a class="link" href="/Admin"
      >Back <img class="back" src="../../public/back.svg" alt=""
    /></a>

  

    <h1>Admin Panel</h1>
    <form class="form" @submit.prevent="onSubmitData">
      <div class="table">
        <h4>Main</h4>
        <span>Title: </span>
        <input v-model="dataPage.data.main.title" class="title" type="text" />
        <span>Some Text: </span>
        <input class="title" value="CREATIVE DESIGN AGENCY" type="text" />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.main.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Key Features</h4>
        <span>Title: </span>
        <input
          v-model="dataPage.data.key_features.title"
          class="title"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.key_features.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>What We Do</h4>
        <span>Title: </span>
        <input
          class="title"
          v-model="dataPage.data.what_we_do.title"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.what_we_do.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Design Perfection</h4>
        <span>Title: </span>
        <input
          class="title"
          v-model="dataPage.data.design_perfection.title"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.design_perfection.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>

      <div class="table">
        <h4>About Us</h4>
        <span>Title: </span>
        <input
          class="title"
          v-model="dataPage.data.about_us.title"
          type="text"
        />
        <span>banner: </span>
        <input
          class="title"
          v-model="dataPage.data.about_us.banner"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.about_us.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>

        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Digital Marketing</h4>
        <span>Title: </span>
        <input
          class="title"
          v-model="dataPage.data.digital_marketing.title"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.digital_marketing.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Our Portfolio</h4>
        <span>Title: </span>
        <input
          class="title"
          v-model="dataPage.data.our_portfolio.title"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.our_portfolio.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>

        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Achievement</h4>
        <span>Title 1: </span>
        <input
          class="title"
          v-model="dataPage.data.achievement.title"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.achievement.desc"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>

      <div class="table">
        <h4>Achievement</h4>
        <span>Title 2: </span>
        <input
          class="title"
          v-model="dataPage.data.achievement.title2"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.achievement.desc2"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Achievement</h4>
        <span>Title 3: </span>
        <input
          class="title"
          v-model="dataPage.data.achievement.title3"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.achievement.desc3"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Achievement</h4>
        <span>Title 4: </span>
        <input
          class="title"
          v-model="dataPage.data.achievement.title4"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.achievement.desc4"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>
        <VButton class="btn">save</VButton>
      </div>
      <div class="table">
        <h4>Achievement</h4>
        <span>Title 5: </span>
        <input
          class="title"
          v-model="dataPage.data.achievement.title5"
          type="text"
        />
        <span>Description: </span>
        <textarea
          v-model="dataPage.data.achievement.desc5"
          class="desc"
          cols="30"
          rows="15"
        ></textarea>

        <VButton class="btn">save</VButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { changeData, getDataImg } from '../api/request'

const dataPage = reactive({
  data: {}
})
getDataImg().then((res) => {
  dataPage.data = res.data
})
const onSubmitData = () => {
  changeData(dataPage.data)
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
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  width: 100%;
  background: rgb(24, 24, 38);
}

input,
textarea {
  width: 100%;
  padding: 20px;
  border: 1px solid rgb(74, 74, 106);
  background: none;
  color: #f2f2f2;
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
  align-items: center;
  background: rgb(33, 33, 52);
  padding: 20px;
}

.btn {
  width: 200px;
  background-color: rgb(73, 69, 255);
}
.form {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
