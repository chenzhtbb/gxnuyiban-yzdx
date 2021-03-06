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
const Xk = () => import('app/dean/xk')
const Mine = () => import('app/dean/xk/mineCourse')
const Sel = () => import('app/dean/xk/selCourse')
const SelList = () => import('app/dean/xk/list')
const Trade = () => import('app/dean/xk/tradeCourse')
const Pj = () => import('app/dean/pj')
const PjContent = () => import('app/dean/pj-content')
const Essc = () => import('app/life/second-hand')
const Xcsk = () => import('app/life/xcsk')
const Zfcx = () => import('app/life/zfcx')
const Ssyd = () => import('app/life/ssyd')
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
const Zzyr = () => import('app/online/zzyr')
const Jyfw = () => import('app/online/jyfw')
const Xgtz = () => import('app/online/xgtz')
const Notice = () => import('app/online/notice')

Vue.use(Router)

export default new Router({
  base: '/yzdx/',
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
          path: 'work',
          name: 'work',
          component: () => import('home/work'),
          children: [
            {
              path: 'leave2',
              component: () => import('home/work/teacher/leave2'),
              name: 'home-index-work-teacher-leave2'
            },
            {
              path: 'dorm2',
              component: () => import('home/work/teacher/dorm2'),
              name: 'home-index-work-teacher-dorm2'
            },
            {
              path: 'attend',
              component: () => import('home/work/teacher/attend'),
              name: 'home-index-work-teacher-attend'
            },
            {
              path: 'dorm1',
              component: () => import('home/work/teacher/dorm1'),
              name: 'home-index-work-teacher-dorm1'
            },
            {
              path: 'leave1',
              component: () => import('home/work/teacher/leave1'),
              name: 'home-index-work-teacher-leave1'
            },
            {
              path: 'leave',
              name: 'leave',
              component: () => import('home/work/student/leave.vue')
            },
            {
              path: 'dorm',
              name: 'dorm',
              component: () => import('home/work/student/dorm.vue')
            },
            {
              path: 'book',
              name: 'book',
              component: () => import('home/work/student/book.vue')
            }
          ]
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
          component: Xk,
          children: [
            {
              path: 'sel',
              component: Sel
            },
            {
              path: 'mine',
              component: Mine
            },
            {
              path: 'trade',
              component: Trade
            },
            {
              path: 'list',
              component: SelList
            }
          ]
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
          path: 'life/ssyd',
          component: Ssyd
        },
        {
          path: 'life/new-stu-index',
          component: () => import('app/life/new-stu-index')
        },
        {
          path: 'life/new-stu',
          component: () => import('app/life/new-stu')
        },
        {
          path: 'life/jp',
          component: () => import('app/life/jp')
        },
        {
          path: 'life/sycx',
          component: () => import('app/life/sycx')
        },
        {
          path: 'life/yyy',
          component: () => import('app/life/yyy')
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
          component: Essc
        },
        {
          path: 'life/zfcx',
          component: Zfcx
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
          path: 'online/xgtz/:key',
          component: Xgtz
        },
        {
          path: 'online/notice/:key',
          component: Notice
        },
        {
          path: 'online/zzyr',
          component: Zzyr
        },
        {
          path: 'online/jyfw',
          component: Jyfw
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
