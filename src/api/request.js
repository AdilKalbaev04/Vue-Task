import ky from 'ky'

const StrapiApi = ky.create({
  prefixUrl: import.meta.env.VITE_FIREBASE_API
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

// identitier, password
