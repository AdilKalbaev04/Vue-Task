<script setup>
import VueHeader from './components/Header/VueHeader.vue'
import VueMain from './components/Main/VueMain.vue'
import VueFooter from './components/Footer/VueFooter.vue'
// import VueForm from './components/Form/VueForm.vue'
import KeyFeatures from './components/KeyFeatures/KeyFeatures.vue'
import WhatWeDo from './components/WhatWeDo/WhatWeDo.vue'
import DesignPerfection from './components/DesignPerfection/DesignPerfection.vue'
import Achievement from './components/Achievement/VueAchievement.vue'
import './assets/css/App.css'
</script>

<template>
  <div>
    <VueHeader />
    <VueMain />
    <KeyFeatures />
    <WhatWeDo />
    <DesignPerfection />
    <Achievement />
    <!-- <VueForm /> -->
    <VueFooter />
  </div>
</template>

<style scoped></style>
