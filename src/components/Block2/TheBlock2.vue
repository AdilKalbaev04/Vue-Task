<template>
  <div class="Cont_block_5">
    <div class="img_wrap">
      <img class="img" :src="dataPage.data.about_us?.images.url" alt="" />
    </div>
    <div class="block_cont">
      <div class="img_wrap_3">
        <img class="img3" :src="dataPage.data.about_us?.images2.url" alt="" />
      </div>
    </div>
    <div class="block_cont_2">
      <div class="img_wrap_2">
        <img class="img2" :src="dataPage.data.about_us?.images3.url" alt="" />
      </div>
      <div class="text_cont_2">
        <div class="svg_wrap"><img class="xz" src="/xz.png" alt="" /></div>
        <span class="title_2">{{ dataPage?.data?.about_us?.banner }} </span>
      </div>
    </div>
  </div>
  <div class="Cont_block_6_digital container">
    <div class="wrapper_digital">
      <div class="background_digital"></div>
      <div class="block_6_digital">
        <div class="img_wrap_digital">
          <img
            class="img_digital"
            :src="dataPage.data.digital_marketing?.images.url"
            alt=""
          />
        </div>
        <div class="text_cont_digital">
          <span class="title_digital">{{
            dataPage?.data?.digital_marketing?.title
          }}</span>
          <p class="text_digital">
            {{ dataPage?.data?.digital_marketing?.desc }}
          </p>
          <div>
            <VButton class="btn_digital" @click="showModal = true"
              >read more</VButton
            >

            <BackDrop @click="showModal = false" v-if="showModal" />
            <div v-if="showModal">
              <div class="modal_digital">
                <div class="info_cont_digital">
                  <span class="text_2_digital">{{
                    dataPage?.data?.digital_marketing?.title
                  }}</span>
                  <p class="short_text_digital">
                    {{ dataPage?.data?.digital_marketing?.desc }}
                  </p>
                </div>
                <button class="btn_modal_digital" @click="showModal = false">
                  <img class="exit_digital" src="/exit.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background_2_digital"></div>
    </div>
  </div>
  <div class="gallery container">
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
      <span class="title"> {{ dataPage?.data?.our_portfolio?.title }}</span>
      <p class="text">
        {{ dataPage?.data?.our_portfolio?.desc }}
      </p>

      <div>
        <VButton class="btn" @click="showModal = true">Learn more</VButton>

        <BackDrop @click="showModal = false" v-if="showModal" />
        <div v-if="showModal">
          <div class="modal">
            <div class="info_cont">
              <span class="text_2">
                {{ dataPage?.data?.our_portfolio?.title }}</span
              >
              <p class="short_text">
                {{ dataPage?.data?.our_portfolio?.desc }}
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
import BackDrop from '../UI/BackDrop/BackDrop.vue'
import { computed, reactive, ref } from 'vue'
import { getDataImg } from '../../api/request'
const dataPage = reactive({
  data: {}
})
const showModal = ref(false)

getDataImg().then((res) => {
  dataPage.data = res.data
})

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

.info_cont_digital {
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: center;
}
.text_2_digital {
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
  font-weight: 400;
  color: white;
}
.short_text_digital {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: white;
}
.btn_modal_digital {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: #545af8 !important;
}
.exit_digital {
  width: 20px;
  height: 20px;
}
.modal_digital {
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
.Cont_block_6_digital {
  margin-top: 130px;
  margin-bottom: 130px;
}
.wrapper_digital {
  position: relative;
}
.block_6_digital {
  max-width: 1018px;
  min-height: 566px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 5;
}

.img_wrap_digital {
  max-width: 550px;
}
.img_digital {
  width: 85%;
}
.link_cont_digital {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.text_cont_digital {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title_digital {
  text-transform: none;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.2;
  font-family: 'Bai Jamjuree';
}
.text_digital {
  letter-spacing: normal;
  line-height: 32px;
  font-size: 1.25rem;
  font-weight: 300;
  color: #111111;
  font-family: 'Open Sans', sans-serif;
}
.btn_digital {
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  margin: 20px auto 0 0;
  padding: 14px 32px 15px;
  background-color: #545af8 !important;
}
.btn_digital:hover {
  background-color: #3e44f8 !important;
}
.background_digital {
  height: 403px;
  width: 1014px;
  background-image: linear-gradient(#545af8, #e84a90);
  position: absolute;
  top: -70px;
  right: 190px;
  z-index: -1;
}
.background_2_digital {
  width: 757px;
  height: 452px;
  background-color: #e84a90;
  position: absolute;
  top: 190px;
  left: 185px;
  z-index: -1;
}
@media screen and (max-width: 950px) {
  .background_2_digital {
    display: none;
  }
  .background_digital {
    display: none;
  }
  .block_6_digital {
    max-width: 1018px;
    min-height: 566px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    z-index: 5;
    padding: 20px;
    flex-direction: column;
  }
}

.block_cont {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
}
.Cont_block_5 {
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link_cont {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
  color: #111111;
}
.img_wrap {
  max-width: 400px;
  margin-bottom: 180px;
}
.img {
  width: 100%;
}
.img2 {
  width: 100%;
}
.img3 {
  width: 100%;
}
.img_wrap_2 {
  max-width: 380px;
}
.img_wrap_3 {
  max-width: 360px;
}
.title {
  font-family: 'Bai Jamjuree';
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.2;
}
.title_2 {
  line-height: 1.6;
  font-weight: 400;
  font-family: 'Bai Jamjuree';
  font-size: 2.25rem;
  color: white;
}
.svg_wrap {
  width: 64px;
}
.xz {
  width: 100%;
}
.text {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  color: #111111;
}
.text_cont {
  padding: 30px;
  max-width: 360px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: 75%;
  right: 190px;
}

.text_cont_2 {
  max-width: 380px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-image: linear-gradient(#545af8, #e84a90);
}
.block_cont_2 {
  display: flex;
  flex-direction: column;
  margin-bottom: 276px;
}
@media screen and (max-width: 1150px) {
  .Cont_block_5 {
    flex-direction: column;
    gap: 20px;
  }
  .block_cont {
    margin: 0;
  }
  .img_wrap {
    margin: 0;
  }
}
</style>
