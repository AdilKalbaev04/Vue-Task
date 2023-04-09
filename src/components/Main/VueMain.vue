<template>
  <main class="Cont_Main">
    <div class="wrapper">
      <div class="text">
        <span class="text_title">CREATIVE DESIGN AGENCY</span>
        <h1 class="title">
          We live to turn <br />
          great ideas
        </h1>
        <div class="link_cont">
          <span>Image from </span>
          <a class="link" href="https://www.freepik.com/" target="_blank"
            >Freepik</a
          >
        </div>
        <div class="icons_cont">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="icon-facebook"
          ></a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="icon-instagramV2"
          ></a>
          <a
            href="https://twitter.com/"
            target="_blank"
            class="icon-twitterV2"
          ></a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            class="icon-youtubeV2"
          ></a>
        </div>
      </div>
      <div class="text2">
        <span class="text2_desc"
          >We combine local knowledge with global <br />
          expertise, strategy with design, empathy with <br />
          creativity, meaning with magic. Reach out to <br />
          discuss how we might help you accelerate <br />
          change.</span
        >
        <b class="text_3">Duis aute irure dolor in reprehenderit</b>
        <div>
          <VButton @click="showModal = true">LEARN MORE</VButton>

          <BackDrop @click="showModal = false" v-if="showModal" />
          <div v-if="showModal">
            <div class="modal">
              <div class="info_cont">
                <span class="text_2"
                  >We combine local knowledge with global <br />
                  expertise, strategy with design, empathy with <br />
                  creativity, meaning with magic. Reach out to <br />
                  discuss how we might help you accelerate <br />
                  change.</span
                >
                <b class="short_text">Duis aute irure dolor in reprehenderit</b>
              </div>
              <button class="btn_modal" @click="showModal = false">
                <img class="exit" src="/exit.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import BackDrop from '../UI/BackDrop/Backdrop.vue'
import { ref } from 'vue'
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
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
}
.short_text {
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.7;
}
.btn_modal {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: #e84a90;
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
  background-color: #e84a90;
  padding: 20px;
  z-index: 9999;
  max-width: 500px;
  min-height: 400px;
  border-radius: 20px;
}

@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.eot?9jov7n');
  src: url('fonts/icomoon.eot?9jov7n#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?9jov7n') format('truetype'),
    url('fonts/icomoon.woff?9jov7n') format('woff'),
    url('fonts/icomoon.svg?9jov7n#icomoon') format('svg');
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
  text-decoration: none;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-twitter:before {
  content: '\e900';
}
.icon-youtube:before {
  content: '\e904';
}
.icon-twitter1:before {
  content: '\e905';
}
.icon-facebook:before {
  content: '\e906';
  color: white;
}
.icon-facebook1:before {
  content: '\e907';
}
.icon-youtubeV2:before {
  content: '\e903';
  color: white;
}
.icon-instagramV2:before {
  content: '\e901';
  color: white;
}
.icon-twitterV2:before {
  content: '\e902';
  color: white;
}

.Cont_Main {
  background-image: url('/background.jpg');
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 650px;
  color: white;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1136px;
  margin: 0 auto;
}
.link_cont {
  display: flex;
  gap: 5px;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
}
.btn {
  color: #ffffff !important;
  background-color: #e84a90 !important;
  border-radius: 50px !important;
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  border-style: none;
  margin: 35px auto 0 0;
  padding: 14px 32px 15px;
}
.link {
  color: white;
}
.title {
  font-size: 4rem;
  color: rgb(255, 255, 255);
}
.text {
  font-family: 'Bai Jamjuree', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: rgb(255, 255, 255);
}
.text2 {
  max-width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  padding: 30px;
  color: rgb(255, 255, 255);
}
.text_3 {
  font-weight: bold;
  font-size: 1.25rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.7;
  color: rgb(255, 255, 255);
}
.text2_desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
  color: rgb(255, 255, 255);
}
.icons_cont {
  position: absolute;
  top: 515px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 40px;
}
.text_title {
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 300;
}
@media screen and (max-width: 900px) {
  .wrapper {
    flex-direction: column;
  }
  .icons_cont {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .text2 {
    padding: 0;
  }
  .text {
    align-items: center;
  }
  .title {
    font-size: 2rem;
  }
}
</style>
