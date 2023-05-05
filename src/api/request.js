import ky from 'ky'

const StrapiApi = ky.create({
  prefixUrl: import.meta.env.VITE_STRAPI_API
})

export const sendData = (data) => {
  return StrapiApi.post('data-v2s', { json: data })
}

export const loginUser = (data) => {
  return StrapiApi.post('auth/local', { json: data }).json()
}

export const getUserInfo = (token) => {
  return StrapiApi.get('users/me?populate=role', {
    headers: { Authorization: `Bearer ${token}` }
  }).json()
}

export const getDataImg = () => {
  return StrapiApi.get('vue-task?populate=deep').json()
}
export const changeData = (data) => {
  return StrapiApi.put('vue-task?populate=*', { json: data }).json()
}

export const changeDataImg = (data, id) => {
  console.log(data)
  return StrapiApi.post(`upload?id=${id}`, {
    body: data
  }).json()
}

export const registerUser = (data) => {
  return StrapiApi.post('auth/local/register', { json: data }).json()
}
