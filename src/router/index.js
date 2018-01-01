import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('components/home/home')
const Me = () => import('components/me/me')
const BindDean = () => import('components/me/bind-dean')
const Settings = () => import('components/me/settings')
const BindDorm = () => import('components/me/bind-dorm')
const Feedback = () => import('components/me/feedback')
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
const Gg = () => import('components/news/news-gg')
const Gw = () => import('components/news/news-gw')
const Electricity = () => import('components/life/electricity')
const SchoolBus = () => import('components/life/school-bus')
const LostAndFound = () => import('components/life/lost-and-found')
const SecondHand = () => import('components/life/second-hand')
const Book = () => import('components/book/book')
const BookList = () => import('components/book/book-list')
const Lost = () => import('components/lost-found/lost')
const Found = () => import('components/lost-found/found')
const PutInfo = () => import('components/lost-found/put-info')
const Application = () => import('components/home/application')
const HelpPeople = () => import('components/online/help-people')
const WorkService = () => import('components/online/work-service')
const XgbNotice = () => import('components/online/xgb-notice')
const Notice = () => import('components/online/notice')
const Pj = () => import('components/dean/pj')
const PjContent = () => import('components/dean/pj-content')
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
          path: 'pj',
          component: Pj
        },
        {
          path: 'pjcontent',
          component: PjContent
        },
        {
          path: 'feedback',
          component: Feedback
        },
        {
          path: 'secondhand',
          component: SecondHand
        },
        {
          path: 'xgbnotice',
          component: XgbNotice
        },
        {
          path: 'notice',
          component: Notice
        },
        {
          path: 'helppeople',
          component: HelpPeople
        },
        {
          path: 'workservice',
          component: WorkService
        },
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
              redirect: 'gg'
            },
            {
              path: 'gg',
              component: NewsGwgg,
              children: [
                {
                  path: '/',
                  redirect: '1'
                },
                {
                  path: '1',
                  component: Gg
                },
                {
                  path: '6',
                  component: Gw
                }
              ]
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
