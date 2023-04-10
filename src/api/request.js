import ky from 'ky'

const StrapiApi = ky.create({
  prefixUrl: import.meta.env.VITE_FIREBASE_API
})

export const sendData = (data) => {
  return StrapiApi.post('data-v2s', { json: data })
}
