import router from './router'
import { getOauthToken, setOauthToken, removeOauthToken } from 'common/js/oauth'
import { oauth } from 'api/oauth'
import { getSessionToken, setSessionToken } from 'common/js/cache'
import { ERR_OR, REDIRECT_URL, CLIENT_ID } from 'api/config'

router.beforeEach((to, from, next) => {
  // removeOauthToken()
  // setOauthToken('123')
  let token = getOauthToken() ? getOauthToken() : to.query.uid
  if (token) {
    // 判断是否在根目录，在根目录则验证token
    if (to.path === '/home' && !getSessionToken()) {
      oauth(token, to.query.uid).then((res) => {
        if (res.code === ERR_OR) {
          // 设置新的token
          setOauthToken(res.token)
          setSessionToken()
          next()
        } else {
          removeOauthToken()
          // 授权过期，重定向到授权服务器重新授权
          setTimeout(() => {
            next(false)
            window.location.href = `https://openapi.yiban.cn/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`
          }, 20)
        }
      })
    } else {
      next()
    }
  } else {
    // token不存在，第一次进入或者授权过期，需要重新授权
    window.location.href = `https://openapi.yiban.cn/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`
  }
})
