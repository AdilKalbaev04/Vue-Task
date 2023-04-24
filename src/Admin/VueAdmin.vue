<template>
  <div
    style="
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      padding: 15px;
      font-family: 'Open Sans', sans-serif;
    "
    v-if="!AdminInfo.isConfirmed"
  >
    <form @submit.prevent="onSubmit">
      <h1>Авторизация</h1>
      <div class="text-field text-field_floating">
        <input
          required
          class="text-field__input"
          type="email"
          v-model="Admin.identifier"
        />
        <label
          v-if="failReqest.errorMessege === 'Invalid identifier or password'"
          class="text-field__label_2"
          for="email"
          >Неверный пороль или email</label
        >
        <label v-else class="text-field__label" for="email">Email</label>
      </div>
      <div class="text-field text-field_floating">
        <input
          class="text-field__input"
          :type="showPassword ? 'text' : 'password'"
          v-model="Admin.password"
        />

        <label class="text-field__label" for="name">Password</label>
      </div>
      <div class="showPass">
        <img v-if="showPassword" class="show" src="./show.svg" alt="" />
        <img v-else class="hide" src="./hide.svg" alt="" />
        <input
          type="checkbox"
          v-model="showPassword"
          name=""
          id=""
          placeholder="Показать пороль"
        />
      </div>

      <!-- <div v-if="failReqest.errorMessege === 'Invalid identifier or password'">
        <h2>Неверный пороль или email</h2>
      </div> -->
      <v-button class="btn">submit</v-button>
    </form>
  </div>
  <div v-if="AdminInfo.isConfirmed">
    <AdminPanel />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { loginUser, getUserInfo } from '@/api/request'
import Cookie from 'js-cookie'
import AdminPanel from './AdminPanel.vue'
import router from '../router'
const showPassword = ref(false)

const Admin = reactive({
  identifier: '',
  password: ''
})
const failReqest = reactive({
  errorMessege: ''
})

const AdminInfo = reactive({
  token: Cookie.get('key') || null,
  isConfirmed: false
})

if (AdminInfo.token) {
  getUserInfo(AdminInfo.token).then((resp) => {
    if (resp.role.type === 'admin') {
      AdminInfo.isConfirmed = true
    }
  })
}

if (AdminInfo.token) {
  getUserInfo(AdminInfo.token).then((resp) => {
    if (resp.role.type === 'authenticated') {
      AdminInfo.isConfirmed = true
    }
  })
}

const onSubmit = () => {
  loginUser(Admin)
    .then((resp) => {
      Cookie.set('key', resp.jwt)
      router.push('/')
    })
    .catch((error) => {
      console.error(error)
      return error.response.text().then((strapiErrorResponse) => {
        failReqest.errorMessege = JSON.parse(strapiErrorResponse).error.message
      })
    })
}
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
}
.showPass {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
}

p {
  font-weight: 500;
}
.show {
  width: 20px;
  height: 20px;
}
.hide {
  width: 20px;
  height: 20px;
}

.text-field {
  margin-bottom: 1rem;
}

.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-field__label_2 {
  display: block;
  margin-bottom: 0.25rem;
  color: red;
}

.text-field__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.text-field__input[type='search']::-webkit-search-decoration,
.text-field__input[type='search']::-webkit-search-cancel-button,
.text-field__input[type='search']::-webkit-search-results-button,
.text-field__input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field__input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}

/* with floating label */
.text-field_floating {
  position: relative;
}

.text-field_floating input {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
  padding: 1rem 0.75rem;
}

.text-field_floating label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}

.text-field_floating input::-moz-placeholder {
  color: transparent;
}

.text-field_floating input::placeholder {
  color: transparent;
}

.text-field_floating input:focus,
.text-field_floating input:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}

.text-field_floating input:focus ~ label,
.text-field_floating input:not(:placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.75rem) translateX(0.15rem);
}

/* is invalid */
.text-field__input_invalid,
.text-field__input_valid {
  border-color: #dc3545;
  padding-right: 2.25rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5625rem center;
  background-size: 1.125rem 1.125rem;
}

.text-field__input_valid {
  border-color: #198754;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
}

.text-field__input_invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.text-field__input_valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgb(25 135 84 / 25%);
}

.text-field__message {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
}

.text-field__input_valid ~ .text-field__message {
  color: #198754;
}

.text-field__input_invalid ~ .text-field__message,
.text-field__input_valid ~ .text-field__message {
  display: block;
}
</style>
