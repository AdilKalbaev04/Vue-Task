<template>
  <div class="Cont_Block_1">
    <div class="text_cont">
      <span class="title">Key Features</span>
      <p class="some_text">
        Sample text. Click to select the text box. Click again or double click
        to start <br />
        editing the text.
      </p>
    </div>
    <div class="img_wrapper">
      <div class="img_wrap">
        <img class="img" src="/public/ffff.jpg" alt="" />
      </div>
      <div class="block_1_cont_icons">
        <div class="block_1_icons">
          <img src="/dev.svg" alt="" />
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
        <div class="block_2_icons">
          <img src="/skill.svg" alt="" />
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
        <div class="block_3_icons">
          <img src="/design.svg" alt="" />
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
        <div class="block_4_icons">
          <img src="/res.svg" alt="" />
          <span class="block_1_icons_text">DEVELOPMENT</span>
        </div>
      </div>
    </div>
    <div class="link_cont">
      <span>Image from </span>
      <a class="link" href="https://www.freepik.com/" target="_blank"
        >Freepik</a
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.img_wrap {
  max-width: 649px;
}
.img {
  width: 100%;
}
.block_1_cont_icons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.block_1_icons {
  max-width: 275px;
  color: #ffffff;
  background-color: #e84a90;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_2_icons {
  max-width: 275px;
  color: #111111;
  background-color: #e5e5e5;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_3_icons {
  max-width: 275px;
  color: #111111;
  background-color: #e5e5e5;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_4_icons {
  max-width: 275px;
  color: #ffffff;
  background-color: #545af8;
  height: 254px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.block_1_icons_text {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.2;
}
.img_wrapper {
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
}
.title {
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 1.1;
  font-family: 'Bai Jamjuree';
}
.some_text {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Bai Jamjuree';
}
.text_cont {
  text-align: center;
  text-align: center;
  padding: 40px;
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
  color: #111111;
  text-decoration: underline;
}

@media screen and (max-width: 1100px) {
  .img_wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
  }
  .block_1_cont_icons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
}
</style>
