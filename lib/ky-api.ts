import ky from 'ky-universal'

export const kyAPI = ky.create({
  throwHttpErrors: true,
  prefixUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/api`,
  timeout: false,
})

export default kyAPI
