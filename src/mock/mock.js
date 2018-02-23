import Mock from 'mockjs'

const baseURL = process.env.API_PREFIX

Mock.mock(baseURL + '/getUser', () => {
  const data = {
    yb: {
      yb_birthday: '197-01-31',
      yb_exp: '1266',
      yb_identity: '学生',
      yb_money: '41709',
      yb_realname: '陈震海',
      yb_regtime: '2015-08-25 05:16:03',
      yb_schoolid: '418',
      yb_schoolname: '广西师范大学',
      yb_sex: 'M',
      yb_studentid: '201512300018',
      yb_userhead: 'http://img02.fs.yiban.cn/5720091/avatar/user/200',
      yb_userid: '5720091',
      yb_username: 'Biubiubiu~~~',
      yb_usernick: 'Biubiubiu~~~'
    },
    dean: {
      dean: 1,
      username: '201512300018'
    },
    dorm: {
      dorm: 1,
      campus: '雁山校区',
      room: '16-5-510'
    }
  }
  return data
})

Mock.mock(baseURL + '/getSliderNews', () => {
  const data = [
    {
      author: '学工部',
      id: '10',
      link: 'http://xgb.gxnu.edu.cn/web/index/article/aId/bdb26db90eb4bc55c4b45c3fe332bf04',
      status: '1',
      title: '关于我校2016～2017学年度研究生校级先进集体推荐名单的公示'
    }
  ]
  return data
})

Mock.mock(baseURL + '/getBook', () => {
  const data = {
    code: 1,
    items: [
      {
        type: '1',
        name: '校园应急电话'
      }
    ]
  }
  return data
})