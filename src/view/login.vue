<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';
import { getUserToken, makeRequest, setUserToken, UserToken } from '../utils/appRequests';
import QRCode from 'qrcode'
import { useRouter } from 'vue-router'
const router = useRouter()

const localId: string = uuidv4().replace(/-/g, '');
const authCode = ref(null)
const qrCodeImageUrl = ref(null)

const refreshQrCode = () => {
  makeRequest(`https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code`, 'post', { 'local_id': localId })
    .then(res => res.json())
    .then(data => {
        authCode.value = data.data.auth_code
        QRCode.toDataURL(data.data.url)
            .then((url: string) => {
                qrCodeImageUrl.value = url
            })
            .catch(console.error)
        
        startLoginListener()
    })
}

const startLoginListener = () => {
  setTimeout(checkLogin, 3000)
}

const checkLogin = () => {
  makeRequest(`https://passport.bilibili.com/x/passport-tv-login/qrcode/poll`, 'post', { 'auth_code': authCode.value, 'local_id': localId })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.code === 0) {
        setUserToken(data.data.token_info)
        onAuthenticated()
        return
      }
      if (data.code && data.code !== 86039) { // QR code not scanned yet
        refreshQrCode()
        return
      }
      setTimeout(checkLogin, 3000)
    })
    .catch(err => {
      console.log(err)
      refreshQrCode()
    })
}

const isTokenValid = (token: UserToken) => {
  return makeRequest(`https://passport.bilibili.com/api/oauth2/info`, 'get', { 'access_token': token.access_token })
    .then(res => res.json())
    .then(data => {
      console.log('hey')
      console.log(data)
      return Promise.resolve(data.code === 0)
    })
}

const onAuthenticated = () => {
  router.push('/')
}

getUserToken()
  .then((token: UserToken) => {
    if (!token) {
      refreshQrCode()
      return
    }
    isTokenValid(token)
      .then(valid => {
        if (!valid) {
          refreshQrCode()
        } else {
          onAuthenticated()
        }
    })
  })

</script>

<template>
  <div style="height: 100vh;" class="flex flex-column justify-content-center align-items-center">
    <div v-if="qrCodeImageUrl" class="flex flex-column justify-content-center align-items-center">
      <div class="caption">
        请使用移动端 Bilibili 扫码登录
      </div>
      <div>
        <img :src="qrCodeImageUrl" />
      </div>
    </div>
  </div>
  
</template>

<style>
.caption {
  color: rgb(251, 114, 153);
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
}
</style>
