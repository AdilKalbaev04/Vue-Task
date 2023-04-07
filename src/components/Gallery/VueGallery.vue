<template>
  <div class="gallery">
    <div class="background"></div>
    <div class="gallery__thumbnails">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="gallery__thumbnail"
        @click="openModal(index)"
      >
        <img :src="photo.thumbnail" :alt="photo.caption" />
      </div>
    </div>
    <div
      v-if="activePhotoIndex !== null"
      class="gallery__modal"
      @click="closeModal"
    >
      <div class="gallery__modal-content" @click.stop>
        <img :src="activePhoto.main" :alt="activePhoto.caption" />
        <div class="gallery__caption">{{ activePhoto.caption }}</div>
      </div>
    </div>
    <div class="text_cont">
      <span class="title">Our Portfolio</span>
      <p class="text">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <div class="link_cont">
        <span>Image from </span> <a class="link" href="">Freepik</a>
      </div>
      <a href="#"> <VButton class="btn">Learn more</VButton></a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const photos = ref([
  {
    thumbnail: '/gallery1.jpg',
    main: '/gallery1.jpg',
    caption: 'Gallery'
  },
  {
    thumbnail: '/gallery2.jpg',
    main: '/gallery2.jpg',
    caption: 'Gallery'
  },
  {
    thumbnail: '/gallery3.jpg',
    main: '/gallery3.jpg',
    caption: 'Gallery'
  },
  {
    thumbnail: '/gallery4.jpg',
    main: '/gallery4.jpg',
    caption: 'Gallery'
  },
  {
    thumbnail: '/gallery5.jpg',
    main: '/gallery5.jpg',
    caption: 'Gallery'
  },
  {
    thumbnail: '/gallery6.jpg',
    main: '/gallery6.jpg',
    caption: 'Gallery'
  }
])

const activePhotoIndex = ref(null)

const openModal = (index) => {
  activePhotoIndex.value = index
}

const closeModal = () => {
  activePhotoIndex.value = null
}

const activePhoto = computed(() => photos.value[activePhotoIndex.value])
</script>

<style scoped>
.link_cont {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.text_cont {
  max-width: 455px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  position: absolute;
  top: 623px;
  right: 194px;
  background: white;
  z-index: 5;
}

.title {
  font-weight: 400;
  font-size: 3.75rem;
  line-height: 1.1;
  font-family: 'Bai Jamjuree';
}
.text {
  letter-spacing: normal;
  line-height: 32px;
  font-size: 1.25rem;
  font-weight: 300;
  color: #111111;
  font-family: 'Open Sans', sans-serif;
}
.btn {
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  margin: 20px auto 0 0;
  padding: 14px 32px 15px;
  background-color: #545af8 !important;
}
.btn:hover {
  background-color: #3e44f8 !important;
}
.background {
  width: 643px;
  background-image: linear-gradient(#545af8, #e84a90);
  height: 1048px;
  position: absolute;
  top: -42px;
  left: 379px;
}
.gallery {
  max-width: 1506px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-bottom: 250px;
  min-height: 900px;
}

.gallery__thumbnails {
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 20px);
  max-width: 1030px;
}

.gallery__thumbnail {
  margin: 10px;
  cursor: pointer;
  max-width: 320px;
  min-height: 330px;
}

.gallery__thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery__modal-content {
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery__modal-content img {
  width: 100%;
  object-fit: contain;
}
</style>
