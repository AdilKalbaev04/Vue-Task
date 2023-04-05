<template>
  <main class="container">
    <div>
      <span>CREATIVE DESIGN AGENCY</span>
      <h1>We live to turn great ideas</h1>
      <div class="link_cont"><span>Image from </span> <a class="link" href="">Freepik</a></div>
    </div>
    <span
      >We combine local knowledge with global expertise, strategy with design, empathy with
      creativity, meaning with magic. Reach out to discuss how we might help you accelerate
      change.</span
    >
    <span>Duis aute irure dolor in reprehenderit</span>
    <button class="btn">Learn more</button>
  </main>
</template>

<script setup></script>

<style scoped>
.container {
  background-image: url('/background.jpg');
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 1000px;
  color: white;
}
.link_cont {
  display: flex;
  gap: 5px;
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
</style>
