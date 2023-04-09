<template>
  <div class="gallery">
    <!-- <div v-for="item in galleryds[0]?.images" :key="item.id">
      <img :src="item.url" alt="bla" />
    </div> -->
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
        <span>Image from </span>
        <a class="link" href="https://www.freepik.com/" target="_blank"
          >Freepik</a
        >
      </div>

      <div>
        <VButton class="btn" @click="showModal = true">Learn more</VButton>

        <BackDrop @click="showModal = false" v-if="showModal" />
        <div v-if="showModal">
          <div class="modal">
            <div class="info_cont">
              <span class="text_2"> Our Portfolio </span>
              <p class="short_text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
            <button class="btn_modal" @click="showModal = false">
              <img class="exit" src="/exit.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackDrop from '../UI/BackDrop/Backdrop.vue'
import { ref, computed } from 'vue'
const showModal = ref(false)
// import axios from 'axios'
// const galleryds = ref([])

// axios
//   .get('http://localhost:1337/api/galleries?populate=images')
//   .then((response) => {
//     console.log(response.data.data[0].images)
//     galleryds.value = response.data.data
//   })

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
.info_cont {
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: center;
}
.text_2 {
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
  font-weight: 400;
  color: white;
}
.short_text {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: white;
}
.btn_modal {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: #545af8 !important;
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
  background-color: #545af8 !important;
  padding: 20px;
  z-index: 9999;
  max-width: 500px;
  min-height: 400px;
  border-radius: 20px;
}
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
  justify-content: center;
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

@media screen and (max-width: 1100px) {
  .background {
    display: none;
  }
  .text_cont {
    display: none;
  }
  .gallery {
    max-width: 1506px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: initial;
    margin-bottom: 250px;
    min-height: 900px;
  }
}
</style>
