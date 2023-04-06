<template>
  <footer class="Cont_Footer">
    <span class="footer_text"
      >Sample text. Click to select the text box. Click again or double <br />
      click to start editing the text.</span
    >
    <div class="link_cont">
      <a class="link" href="">Website Templates </a>
      <p class="text">created with</p>
      <a class="link" href="">Website Builder Software.</a>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.Cont_Footer {
  width: 100%;
  min-height: 200px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  font-family: 'Open Sans', sans-serif;
}
.footer_text {
  color: white;
  text-align: center;
}
.link_cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
}
.link {
  color: #f6b3d1;
}
.text {
}
</style>
