<template>
  <main class="container">
    <div class="wrapper">
      <div class="text">
        <span class="text_title">CREATIVE DESIGN AGENCY</span>
        <h1 class="title">
          We live to turn <br />
          great ideas
        </h1>
        <div class="link_cont">
          <span>Image from </span> <a class="link" href="">Freepik</a>
        </div>
        <div class="icons_cont">
          <a href="#" class="icon-facebookV2"></a>
          <a href="#" class="icon-instagramV2"></a>
          <a href="#" class="icon-twitterV2"></a>
          <a href="#" class="icon-youtubeV2"></a>
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
        <VButton class="btn">Learn more</VButton>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree&family=Open+Sans&display=swap');
@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.eot?m79ii0');
  src: url('fonts/icomoon.eot?m79ii0#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?m79ii0') format('truetype'),
    url('fonts/icomoon.woff?m79ii0') format('woff'),
    url('fonts/icomoon.svg?m79ii0#icomoon') format('svg');
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
  color: white;
  text-decoration: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-youtubeV2:before {
  content: '\e903';
}
.icon-instagramV2:before {
  content: '\e901';
}
.icon-twitterV2:before {
  content: '\e902';
}
.icon-facebookV2:before {
  content: '\e900';
}

.container {
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
}
.text {
  font-family: 'Bai Jamjuree', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.text2 {
  max-width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  padding: 30px;
}
.text_3 {
  font-weight: bold;
  font-size: 1.25rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.7;
}
.text2_desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
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
</style>
