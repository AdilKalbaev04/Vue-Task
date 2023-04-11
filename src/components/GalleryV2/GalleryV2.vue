<template>
  <lightgallery
    :settings="{ speed: 500, plugins: [lgZoom, lgVideo] }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <a
      data-lg-size="1406-1390"
      class="gallery-item"
      data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
    >
      <img
        class="img-responsive"
        src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
      />
    </a>
    <a
      data-lg-size="1400-1400"
      class="gallery-item"
      data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    >
      <img
        class="img-responsive"
        src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
      />
    </a>
    <a
      data-lg-size="1400-1400"
      class="gallery-item"
      data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
    >
      <img
        style="width: 200px"
        class="img-responsive"
        src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
      />
    </a>
    <a
      class="gallery-item"
      data-video='{"source": [{"src":"https://www.lightgalleryjs.com/videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
      data-poster=""
    >
      <img
        width="200"
        class="img-responsive"
        src="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"
      />
    </a>
  </lightgallery>
</template>

<script setup>
import Lightgallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

const onInit = () => {
  console.log('lightGallery has been initialized')
}
const onBeforeSlide = () => {
  console.log('calling before slide')
}
</script>

<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
</style>
