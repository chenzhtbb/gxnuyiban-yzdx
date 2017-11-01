import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('components/home/home')
const Me = () => import('components/me/me')
const BindDean = () => import('components/me/bind-dean')
const Settings = () => import('components/me/settings')
const BindDorm = () => import('components/me/bind-dorm')
const Score = () => import('components/dean/score')
const ClassTable = () => import('components/dean/class-table')
const Selcourse = () => import('components/dean/selcourse')
const Appraise = () => import('components/dean/appraise')
const Library = () => import('components/dean/library')
const NewsTab = () => import('components/news/news-tab')
const NewsGwgg = () => import('components/news/news-gwgg')
const NewsHyap = () => import('components/news/news-hyap')
const NewsJwtz = () => import('components/news/news-jwtz')
const NewsJzbg = () => import('components/news/news-jzbg')
const NewsXyxw = () => import('components/news/news-xyxw')
const News = () => import('components/news/news')
const Electricity = () => import('components/life/electricity')
const SchoolBus = () => import('components/life/school-bus')
const LostAndFound = () => import('components/life/lost-and-found')
const Book = () => import('components/book/book')
const BookList = () => import('components/book/book-list')
const Lost = () => import('components/lost-found/lost')
const Found = () => import('components/lost-found/found')
const PutInfo = () => import('components/lost-found/put-info')
const Application = () => import('components/home/application')
Vue.use(Router)

export default new Router({
  base: '/yzdx/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/app',
      component: Application,
      children: [
        {
          path: 'lostandfound',
          component: LostAndFound,
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
              path: 'put',
              component: PutInfo
            }
          ]
        },
        {
          path: 'schoolbus',
          component: SchoolBus
        },
        {
          path: 'electricity',
          component: Electricity
        },
        {
          path: 'score',
          component: Score
        },
        {
          path: 'classtable',
          component: ClassTable
        },
        {
          path: 'selcourse',
          component: Selcourse
        },
        {
          path: 'appraise',
          component: Appraise
        },
        {
          path: 'library',
          component: Library
        },
        {
          path: 'newstab',
          component: NewsTab,
          children: [
            {
              path: '/',
              redirect: 'gwgg'
            },
            {
              path: '/app/newstab/gwgg',
              component: NewsGwgg
            },
            {
              path: 'hyap',
              component: NewsHyap
            },
            {
              path: 'jwtz',
              component: NewsJwtz
            },
            {
              path: 'xyxw',
              component: NewsXyxw
            },
            {
              path: 'jzbg',
              component: NewsJzbg
            },
            {
              path: 'news',
              component: News
            }
          ]
        },
        {
          path: 'binddean',
          component: BindDean
        },
        {
          path: 'settings',
          component: Settings
        },
        {
          path: 'binddorm',
          component: BindDorm
        },
        {
          path: 'booklist',
          component: BookList
        }
      ]
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
