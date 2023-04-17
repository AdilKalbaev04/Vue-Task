<template>
  <div class="cont">
    <div class="header">
      <a class="link" href="/"
        >Back <img class="back" src="../../public/back.svg" alt=""
      /></a>

      <a
        class="auth_2"
        @click="
          () => {
            Cookie.remove('key')
          }
        "
        href="/Admin"
        >EXIT</a
      >
    </div>
    <a href="/item">
      <div class="panel_cont">
        <div class="panel">
          <div class="table">
            <span>TITLE</span>
            <span>IMAGES</span>
            <span>CREATEDAT</span>
            <span>STATE</span>
          </div>
          <div class="table_2">
            <b>1</b>
            <span> Home </span>
            <i class="icon-home"></i>
            <span>{{ dataPage.data.createdAt }}</span>
            <span></span>
            <span>PUBLISHED</span>
            <i class="icon-pencil"></i>
            <i class="icon-copy"></i>
            <i class="icon-basket"></i>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import Cookie from 'js-cookie'
import { getDataImg } from '../api/request'
import { reactive } from 'vue'

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
.panel_cont {
  display: flex;
  justify-content: center;
  padding: 30px;
}
.table {
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.table_2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link {
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  text-decoration: none;
  padding: 30px;
}
.back {
  width: 25px;
}
.panel {
  padding: 20px;
  width: 1000px;
  background: rgb(123, 121, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cont {
  font-family: 'Open Sans', sans-serif;
  background: rgb(24, 24, 38);
  width: 100%;
  height: 1000px;
}
b {
  color: white;
}

span {
  color: white;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.auth_2 {
  color: white;
  text-decoration: none;
}
</style>
