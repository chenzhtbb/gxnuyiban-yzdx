import Vue from 'vue'
import Router from 'vue-router'

const Tab = () => import('home/tab')
const Index = () => import('home/index/index')
const Book = () => import('home/book/book')
const BookList = () => import('home/book/type')
const Me = () => import('home/me/me')
const Dean = () => import('home/me/bind-dean')
const Dorm = () => import('home/me/bind-dorm')
const Feedback = () => import('home/me/feedback')
const Application = () => import('app/application')
const Cj = () => import('app/dean/cj')
const Kcb = () => import('app/dean/kcb')
const Tsg = () => import('app/dean/tsg')
// const Xk = () => import('app/dean/xk')
const Pj = () => import('app/dean/pj')
const PjContent = () => import('app/dean/pj-content')
const Xcsk = () => import('app/life/xcsk')
const Swzl = () => import('app/life/lost-and-found/tab')
const Lost = () => import('app/life/lost-and-found/lost')
const Found = () => import('app/life/lost-and-found/lost')
const Goods = () => import('app/life/lost-and-found/lost')
const Publish = () => import('app/life/lost-and-found/publish')
const Office = () => import('app/office/office-tab')
const News = () => import('app/office/news')
const Gg = () => import('app/office/type/gg')
const Gw = () => import('app/office/type/gw')
const Hyap = () => import('app/office/type/hyap')
const Jwtz = () => import('app/office/type/jwtz')
const Xyxw = () => import('app/office/type/xyxw')
const Jzbg = () => import('app/office/type/jzbg')

Vue.use(Router)

export default new Router({
  base: '/test/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Tab,
      children: [
        {
          path: '/',
          redirect: 'index'
        },
        {
          path: 'index',
          component: Index
        },
        {
          path: 'book',
          component: Book
        },
        {
          path: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/app',
      component: Application,
      children: [
        {
          path: 'book/:type',
          component: BookList
        },
        {
          path: 'me/dean',
          component: Dean
        },
        {
          path: 'me/dorm',
          component: Dorm
        },
        {
          path: 'me/feedback',
          component: Feedback
        },
        {
          path: 'dean/cj',
          component: Cj
        },
        {
          path: 'dean/kcb',
          component: Kcb
        },
        {
          path: 'dean/tsg',
          component: Tsg
        },
        {
          path: 'dean/xk',
          component: Cj
        },
        {
          path: 'dean/pj',
          component: Pj
        },
        {
          path: 'dean/pjcontent',
          component: PjContent
        },
        {
          path: 'life/xcsk',
          component: Xcsk
        },
        {
          path: 'life/swzl',
          component: Swzl,
          children: [
            {
              path: '/',
              redirect: 'lost'
            },
            {
              path: 'lost',
              component: Lost
            },
            {
              path: 'found',
              component: Found
            },
            {
              path: 'goods/:id',
              component: Goods
            },
            {
              path: 'publish',
              component: Publish
            },
            {
              path: '*',
              redirect: 'lost'
            }
          ]
        },
        {
          path: 'life/essc',
          component: Cj
        },
        {
          path: 'life/zfcx',
          component: Cj
        },
        {
          path: 'life/ssyd',
          component: Cj
        },
        {
          path: 'office',
          component: Office,
          children: [
            {
              path: 'news/:id',
              component: News
            },
            {
              path: 'gg',
              component: Gg
            },
            {
              path: 'gw',
              component: Gw
            },
            {
              path: 'hyap',
              component: Hyap
            },
            {
              path: 'jwtz',
              component: Jwtz
            },
            {
              path: 'xyxw',
              component: Xyxw
            },
            {
              path: 'jzbg',
              component: Jzbg
            },
            {
              path: '*',
              redirect: 'gg'
            }
          ]
        },
        {
          path: 'online/xgtz',
          component: Cj
        },
        {
          path: 'online/zzyr',
          component: Cj
        },
        {
          path: 'online/ybzx',
          component: Cj
        },
        {
          path: 'online/bszn',
          component: Cj
        },
        {
          path: 'online/jyfw',
          component: Cj
        },
        {
          path: '*',
          redirect: '/'
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
