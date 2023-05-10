<template>
  <div class="Cont_Form">
    <div class="form_block">
      <div class="block_1">
        <span class="block_1_title">Contact Info</span>
        <span class="block_1_text">
          <i class="icon-call"></i> +1 (234) 567-8910
        </span>
        <span class="block_1_text"
          ><i class="icon-mail"></i> contact@yourmail.com
        </span>
        <span class="block_1_text"
          ><i class="icon-location"></i> 203, Envato Labs, Behind Alis Steet,
          Australia</span
        >
        <div class="icons_cont">
          <a href="#" class="icon-facebook1"></a>
          <a href="#" class="icon-twitter"></a>
          <a href="#" class="icon-instagramV2"></a>
          <a href="#" class="icon-youtube"></a>
        </div>
      </div>
      <form @submit.prevent="submitForm" class="block_2">
        <VInput
          name="name"
          v-model="name"
          placeholder="Enter your Name"
          type="text"
        />
        <VInput
          name="email"
          v-model="email"
          placeholder="Enter a valid email address"
          type="email"
        />
        <VInput
          name="desc"
          v-model="desc"
          placeholder="Enter your messege"
          type="textarea"
        />
        <VButton class="block_2_btn">SUBMIT</VButton>
      </form>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup>
import { sendData } from '../../api/request'
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const desc = ref('')

const submitForm = (event) => {
  event.preventDefault()
  const data = {
    name: name.value,
    email: email.value,
    desc: desc.value
  }

  sendData(data).finally(() => {
    name.value = ''
    email.value = ''
    desc.value = ''
  })
}
</script>

<style scoped>
@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.eot?nxt0ns');
  src: url('fonts/icomoon.eot?nxt0ns#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?nxt0ns') format('truetype'),
    url('fonts/icomoon.woff?nxt0ns') format('woff'),
    url('fonts/icomoon.svg?nxt0ns#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^='icon-'],
[class*=' icon-'] {
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  font-size: 30px;
  text-decoration: none;
  color: #545af8;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-location:before {
  content: '\e90a';
}
.icon-mail:before {
  content: '\e908';
}
.icon-call:before {
  content: '\e909';
}
.icon-twitter:before {
  content: '\e900';
}
.icon-youtube:before {
  content: '\e904';
  color: #545af8;
}
.icon-twitter1:before {
  content: '\e905';
}
.icon-facebook:before {
  content: '\e906';
}
.icon-facebook1:before {
  content: '\e907';
}
.icon-youtubeV2:before {
  content: '\e903';
}
.icon-instagramV2:before {
  content: '\e901';
  color: #545af8;
}
.icon-twitterV2:before {
  content: '\e902';
}

.Cont_Form {
  min-height: 400px;
  position: relative;
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.block_1_title {
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.2;
}
.icons_cont {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
.line {
  width: 100%;
  height: 224px;
  background: linear-gradient(#545af8, #e84a90);
  position: absolute;
  top: 24%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.form_block {
  max-width: 965px;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 60px;
  gap: 70px;
  align-items: center;
  z-index: 2;
  box-shadow: 0px 3px 10px 2px #cccc;
}
.block_1_text {
  display: flex;
  gap: 5px;
}
.block_1 {
  display: flex;
  flex-direction: column;
  width: 274px;
  gap: 12px;
}
.block_2 {
  width: 475px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.block_2_btn {
  color: #ffffff !important;
  background-color: #545af8 !important;
  border-style: none;
  border-radius: 0 !important;
  text-transform: uppercase;
  width: 100%;
  font-weight: 600;
}
.block_1_text {
  font-family: 'Open Sans', sans-serif;
  border-style: none;
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 400;
}
@media screen and (max-width: 1240px) {
  .form_block {
    position: relative;
    top: 0;
    left: 0;
    flex-direction: column;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 490px) {
  .block_2 {
    max-width: 475px;
    width: auto;
  }
  .Cont_Form {
    padding: 0;
  }
}
</style>
