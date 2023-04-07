<template>
  <div class="Cont_block_3">
    <div class="img_wrap"><img class="img" src="/s.jpg" alt="" /></div>
    <div class="block_3_text">
      <span class="title">Design Perfection</span>
      <p class="text">
        We’re a small creative design studio based in New York, working with
        adventurous clients and providing Creative Concept, Branding, Graphic
        Design, Art Direction and Digital Communication services.
      </p>
      <div class="link_cont">
        <span>Image from </span> <a class="link" href="">Freepik</a>
      </div>
      <a href="#">
        <VButton class="btn">Learn more</VButton>
      </a>
    </div>
    <div class="circle"></div>
  </div>
</template>

<script></script>

<style scoped>
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
  }
  .circle {
    display: none;
  }
}
</style>
