/* eslint-disable */
import Mock from 'mockjs'

const baseURL = process.env.API_PREFIX

function getParma (name, url) {
  var reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
  if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '))
  return ''
}

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
    },
    news: {
      author: '学工部',
      id: '10',
      link: 'http://xgb.gxnu.edu.cn/web/index/article/aId/bdb26db90eb4bc55c4b45c3fe332bf04',
      status: '1',
      title: '关于我校2016～2017学年度研究生校级先进集体推荐名单的公示'
    }
  }
  return data
})

Mock.mock(baseURL + '/getBook', () => {
  const data = {
    code: 1,
    items: [
      {
        'type': 1,
        'name': '校园应急电话'
      },
      {
        'type': 2,
        'name': '校领导'
      },
      {
        'type': 3,
        'name': '机关（群团）单位'
      },
      {
        'type': 4,
        'name': '校直业务及附属单位'
      },
      {
        'type': 5,
        'name': '教学单位（含独立学院）'
      },
      {
        'type': 6,
        'name': '后勤及校办产业单位 '
      }
    ]
  }
  return data
})

Mock.mock(baseURL + '/getBookList', () => {
  const data = [
    {
      'department': '出版社集团 ',
      'style': 'display: none;',
      'icon': 'fa-plus',
      'list': [
        {
          'name': '办公室',
          'tel': '2808798'
        },
        {
          'name': '党委书记董事长室',
          'tel': '2288688'
        },
        {
          'name': '总编辑室',
          'tel': ''
        },
        {
          'name': '总裁室',
          'tel': '2288886'
        },
        {
          'name': '副总编辑室',
          'tel': '2282558'
        },
        {
          'name': '党委副书记/纪委书记（兼）室',
          'tel': '2288699'
        },
        {
          'name': '副总裁室',
          'tel': '5838066'
        },
        {
          'name': '副总裁室',
          'tel': '2282325'
        },
        {
          'name': '副总编辑室',
          'tel': '2142898'
        },
        {
          'name': '总会计师室',
          'tel': '2288889'
        },
        {
          'name': '副总裁室',
          'tel': '5585151'
        },
        {
          'name': '副总裁室',
          'tel': '2100888'
        },
        {
          'name': '副总裁室',
          'tel': '2282363'
        },
        {
          'name': '战略规划与事业发展部',
          'tel': '2288300'
        },
        {
          'name': '总编室',
          'tel': '2282532'
        },
        {
          'name': '版权与法务部',
          'tel': '2282568'
        },
        {
          'name': '人力资源部',
          'tel': '2282389'
        },
        {
          'name': '财务部',
          'tel': '2282376'
        },
        {
          'name': '审计部',
          'tel': '2282550'
        },
        {
          'name': '出版部',
          'tel': '2809905'
        },
        {
          'name': '材料供应部',
          'tel': '2809089'
        },
        {
          'name': '市场运营与服务部',
          'tel': '2282575'
        },
        {
          'name': '资产管理与后勤保障部',
          'tel': '2282533'
        },
        {
          'name': '档案资料部',
          'tel': '2282056'
        }
      ]
    },
    {
      'department': '后勤服务集团 ',
      'style': 'display: none;',
      'icon': 'fa-plus',
      'list': [
        {
          'name': '办公室',
          'tel': '5848633'
        },
        {
          'name': '总经理室',
          'tel': '5848608'
        },
        {
          'name': '党委书记室',
          'tel': '5845970'
        },
        {
          'name': '副总经理室',
          'tel': '5857271'
        },
        {
          'name': '副总经理室',
          'tel': '5856585'
        },
        {
          'name': '总会计师室',
          'tel': '5838130'
        },
        {
          'name': '财务部',
          'tel': '5845837'
        },
        {
          'name': '人力资源与监控部',
          'tel': '5831701'
        },
        {
          'name': '装饰服务部',
          'tel': '5842727'
        },
        {
          'name': '第一饮食服务中心',
          'tel': '5848833'
        },
        {
          'name': '第一学生公寓管理中心',
          'tel': '5818547'
        },
        {
          'name': '物业管理中心',
          'tel': '5843214'
        },
        {
          'name': '校园管理服务中心',
          'tel': '5856685'
        },
        {
          'name': '水电供应服务中心',
          'tel': '5848491'
        },
        {
          'name': '运输服务中心',
          'tel': '5848828'
        },
        {
          'name': '后勤接待培训中心',
          'tel': '5848626'
        },
        {
          'name': '商贸服务中心',
          'tel': '5849857'
        },
        {
          'name': '第二饮食服务中心',
          'tel': '3698236'
        },
        {
          'name': '第二学生公寓管理中心',
          'tel': '3698216'
        }
      ]
    },
    {
      'department': '期刊传媒集团 ',
      'style': 'display: none;',
      'icon': 'fa-plus',
      'list': [
        {
          'name': '总经理室',
          'tel': '5838066'
        },
        {
          'name': '党总支书记室',
          'tel': '5826583'
        },
        {
          'name': '总编辑室',
          'tel': '7715511208'
        },
        {
          'name': '副总经理室',
          'tel': '5833599'
        },
        {
          'name': '副总编辑室',
          'tel': '5831790'
        },
        {
          'name': '副总编辑室',
          'tel': '5834908'
        },
        {
          'name': '副总编辑室',
          'tel': '5802901'
        },
        {
          'name': '行政部',
          'tel': '5840334'
        },
        {
          'name': '财务部',
          'tel': '5831632'
        },
        {
          'name': '项目事业部',
          'tel': '5835707'
        },
        {
          'name': '数字出版部',
          'tel': '5820209'
        },
        {
          'name': '总编室',
          'tel': '5835995'
        },
        {
          'name': '虎视传媒公司',
          'tel': '5801281'
        },
        {
          'name': '作文大王杂志社',
          'tel': '5831790'
        },
        {
          'name': '数学大王杂志社',
          'tel': '5831792'
        },
        {
          'name': '奇趣百科杂志社',
          'tel': '5831795'
        },
        {
          'name': '教育观察杂志社',
          'tel': '5831800'
        },
        {
          'name': '规划师杂志社',
          'tel': '7712436269'
        },
        {
          'name': '广西出版杂志社',
          'tel': '7715586837'
        }
      ]
    },
    {
      'department': '王城旅游公司 ',
      'style': 'display: none;',
      'icon': 'fa-plus',
      'list': [
        {
          'name': '办公室',
          'tel': '2804408'
        },
        {
          'name': '总经理室',
          'tel': '2860940'
        },
        {
          'name': '财务室',
          'tel': '2812341'
        }
      ]
    }
  ]
  return data
})

Mock.mock(baseURL + '/getScore', () => {
  const data = [
    {
      'title': '国家考试成绩单',
      'head': [
        '考试名称',
        '考试时间',
        '考试成绩'
      ],
      'body': [
        [
          'CET-4',
          '2017-06-16',
          390
        ],
        [
          'CET-4',
          '2016-12-17',
          350
        ]
      ]
    },
    {
      'title': '待确认成绩单',
      'head': [],
      'body': []
    },
    {
      'title': '',
      'head': [
        '课程名称',
        '总评',
        '总评成绩'
      ],
      'body': [
        [
          '军事理论',
          97,
          97
        ],
        [
          '山海经',
          93,
          93
        ]
      ]
    },
    {
      'title': '',
      'head': [
        '课程名称',
        '总评',
        '总评成绩'
      ],
      'body': [
        [
          '形势与政策（含大学生安全教育课）',
          91.4,
          91
        ]
      ]
    },
    {
      'title': '',
      'head': [
        '课程名称',
        '平时',
        '考试',
        '总评成绩'
      ],
      'body': [
        [
          '算法设计与分析',
          95,
          98,
          97
        ],
        [
          '软件工程',
          93,
          85,
          87
        ],
        [
          '计算复杂性',
          80,
          77,
          78
        ]
      ]
    },
    {
      'title': '2016学年春季学期',
      'head': [
        '课程名称',
        '成绩',
        '绩点',
        '学分'
      ],
      'body': [
        [
          '数据库技术及应用',
          98,
          4.8,
          3
        ],
        [
          'Linux系统与应用',
          98,
          4.8,
          2
        ],
        [
          '操作系统',
          96,
          4.6,
          4
        ],
        [
          '公共体育（4）',
          89,
          3.9,
          1
        ],
        [
          '模拟电子技术',
          89,
          3.9,
          3.5
        ],
        [
          '计算机网络',
          86,
          3.6,
          4
        ],
        [
          '中外优秀影片欣赏',
          85,
          3.5,
          1
        ],
        [
          '食品安全与健康',
          85,
          3.5,
          1
        ],
        [
          '毛泽东思想和中国特色社会主义理论体系概论',
          83,
          3.3,
          3
        ],
        [
          '大学英语IV',
          80,
          3,
          3
        ],
        [
          '数字电子技术',
          80,
          3,
          3.5
        ]
      ]
    },
    {
      'title': '2016学年秋季学期',
      'head': [
        '课程名称',
        '成绩',
        '绩点',
        '学分'
      ],
      'body': [
        [
          '数据库课程设计',
          94,
          4.4,
          1
        ],
        [
          '公共体育（3）',
          93,
          4.3,
          1
        ],
        [
          '形势与政策（含大学生安全教育课）',
          91,
          4.1,
          0
        ],
        [
          '大学英语III',
          89,
          3.9,
          3
        ],
        [
          'Java课程设计',
          89,
          3.9,
          1
        ],
        [
          '马克思主义基本原理概论',
          87,
          3.7,
          3
        ],
        [
          '毛泽东思想和中国特色社会主义理论体系概论',
          86,
          3.6,
          3
        ],
        [
          '数据库原理',
          85,
          3.5,
          3
        ],
        [
          '走近德意志',
          80,
          3,
          1
        ],
        [
          '营养学概论',
          80,
          3,
          1
        ],
        [
          '电路分析基础',
          78,
          2.8,
          3
        ],
        [
          'JAVA程序设计',
          77,
          2.7,
          3
        ]
      ]
    },
    {
      'title': '2015学年春季学期',
      'head': [
        '课程名称',
        '成绩',
        '绩点',
        '学分'
      ],
      'body': [
        [
          '公共体育（2）',
          97,
          4.7,
          1
        ],
        [
          '数据结构',
          95,
          4.5,
          4
        ],
        [
          '形势与政策（含大学生安全教育课）',
          95,
          4.5,
          0.5
        ],
        [
          '数据结构课程设计',
          92,
          4.2,
          1
        ],
        [
          '中国近现代史纲要',
          92,
          4.2,
          2
        ],
        [
          '面向对象程序设计',
          91,
          4.1,
          4
        ],
        [
          '大学生心理健康',
          90,
          4,
          1
        ],
        [
          '运动损伤与康复',
          90,
          4,
          1
        ],
        [
          '高等数学2',
          87,
          3.7,
          6
        ],
        [
          '离散数学',
          87,
          3.7,
          4
        ],
        [
          '面向对象程序设计课程设计',
          87,
          3.7,
          1
        ],
        [
          '20世纪战争与和平',
          84,
          3.4,
          1
        ],
        [
          '大学英语II',
          81,
          3.1,
          4
        ],
        [
          '汇编语言',
          78,
          2.8,
          3
        ]
      ]
    },
    {
      'title': '2015学年秋季学期',
      'head': [
        '课程名称',
        '成绩',
        '绩点',
        '学分'
      ],
      'body': [
        [
          '程序设计基础课程设计',
          98,
          4.8,
          0.5
        ],
        [
          '程序设计基础',
          94,
          4.4,
          4
        ],
        [
          '网站建设与网页设计',
          94,
          4.4,
          3
        ],
        [
          '大学生职业生涯规划',
          92,
          4.2,
          0.5
        ],
        [
          '计算机组装与维护见习',
          90,
          4,
          0.5
        ],
        [
          '思想道德修养与法律基础',
          86,
          3.6,
          3
        ],
        [
          '计算机科学导论',
          81,
          3.1,
          3
        ],
        [
          '公共体育（1）',
          78,
          2.8,
          1
        ],
        [
          '军事课',
          77,
          2.7,
          2
        ],
        [
          '高等数学1',
          72,
          2.2,
          5
        ],
        [
          '大学英语I',
          70,
          2,
          4
        ]
      ]
    }
  ]
  return data
})

Mock.mock(/getNewsList/, (options) => {
  const type = getParma('type', options.url)
  let data = []
  switch (type) {
    case '1': {
      data = [
        {
          'id': '151954961030167752',
          'title': '关于更改参加原副校长江士敏同志遗体告别仪式乘车时间的通知',
          'author': '校长办公室',
          'time': '2018-02-25',
          'top': 0
        },
        {
          'id': '151946549257816910',
          'title': '讣  告',
          'author': '校长办公室',
          'time': '2018-02-24',
          'top': 0
        },
        {
          'id': '151887727184574170',
          'title': '通告',
          'author': '保卫处',
          'time': '2018-02-17',
          'top': 0
        },
        {
          'id': '151817246082780240',
          'title': '关于组织申报2018年度教育部人文社会科学研究专项任务项目（中国特色社会主义理论体系研究）的通知',
          'author': '社会科学研究处',
          'time': '2018-02-09',
          'top': 0
        },
        {
          'id': '151817280307950760',
          'title': '关于组织申报2018年度教育部人文社会科学研究专项任务项目（工程科技人才培养研究）申报工作的通知',
          'author': '社会科学研究处',
          'time': '2018-02-09',
          'top': 0
        },
        {
          'id': '151817315042144581',
          'title': '关于组织申报2018年度教育部人文社会科学研究专项任务项目（教育廉政理论研究）的通知',
          'author': '社会科学研究处',
          'time': '2018-02-09',
          'top': 0
        },
        {
          'id': '151817280307950760',
          'title': '关于组织申报2018年度教育部人文社会科学研究专项任务项目（工程科技人才培养研究）的通知',
          'author': '社会科学研究处',
          'time': '2018-02-09',
          'top': 0
        },
        {
          'id': '151807794600891411',
          'title': '转发自治区高等学校工作委员会办公室关于做好先进典型推荐工作的通知',
          'author': '人事处',
          'time': '2018-02-08',
          'top': 0
        },
        {
          'id': '151779806742484390',
          'title': '关于参加2018年全区教育工作视频会议的通知',
          'author': '校长办公室',
          'time': '2018-02-05',
          'top': 0
        },
        {
          'id': '151745577452265116',
          'title': '转发自治区社科联关于征集第三届中国-东盟民族文化论坛论文的通知',
          'author': '社会科学研究处',
          'time': '2018-02-01',
          'top': 0
        },
        {
          'id': '151736098476790254',
          'title': '关于做好新一轮“美丽广西”乡村建设（扶贫）工作队员选派工作的通知',
          'author': '组织部',
          'time': '2018-01-31',
          'top': 0
        },
        {
          'id': '151728148417383706',
          'title': '关于做好2018年党外代表人士实践锻炼基地挂职报名推荐工作的通知',
          'author': '组织部',
          'time': '2018-01-30',
          'top': 0
        },
        {
          'id': '151721426644599455',
          'title': '关于做好2018年广西高等学校高水平创新团队及卓越学者计划申报工作的通知',
          'author': '人事处',
          'time': '2018-01-29',
          'top': 0
        },
        {
          'id': '151719573259736176',
          'title': '关于2017年创新人才推进计划拟推荐人选的公示',
          'author': '科学技术处',
          'time': '2018-01-29',
          'top': 0
        },
        {
          'id': '151701557240053940',
          'title': '关于电信、联通、移动宽带用户如何使用校园网新认证计费系统的通知',
          'author': '网络信息中心',
          'time': '2018-01-27',
          'top': 0
        },
        {
          'id': '151695477152242683',
          'title': '关于组织参加2018年全国同等学力统一考试广西借考工作的通知',
          'author': '研究生学院',
          'time': '2018-01-26',
          'top': 0
        },
        {
          'id': '151693163365894635',
          'title': '关于2018年开展组织我校研究生班学员登陆“全国同等学力人员申请硕士学位管理工作信息平台”进行注册和申请硕士学位全国统一考试报名工作的通知',
          'author': '研究生学院',
          'time': '2018-01-26',
          'top': 0
        },
        {
          'id': '151688521808511822',
          'title': '关于组织申报2018年度教育部人文社会科学研究一般项目的通知',
          'author': '社会科学研究处',
          'time': '2018-01-25',
          'top': 0
        },
        {
          'id': '151678938059215241',
          'title': '“相思江·奥林苑”商品房建设工作情况通报（2017年12月19日-2018年1月24日）',
          'author': '校工会',
          'time': '2018-01-24',
          'top': 0
        },
        {
          'id': '151677964542480848',
          'title': '关于公布我校2017年度“诚华青年教师奖”获得者名单的通知',
          'author': '学校教育发展基金会',
          'time': '2018-01-24',
          'top': 0
        }
      ]
      break
    }
    case '2': {
      data = []
      break
    }
    case '3': {
      data = [
        {
          'id': 'dean6663',
          'title': '2017-2018学年第一学期期末课程考核情况通报五',
          'author': '教务处',
          'time': '2018-01-17',
          'top': 0
        },
        {
          'id': 'dean6660',
          'title': '2017-2018学年第一学期期末课程考核情况通报四',
          'author': '教务处',
          'time': '2018-01-15',
          'top': 0
        },
        {
          'id': 'dean6652',
          'title': '关于印发《广西师范大学2018年全日制普通本科辅修专业学士学位教育招生简章》的通知',
          'author': '教务处',
          'time': '2018-01-12',
          'top': 0
        },
        {
          'id': 'dean6646',
          'title': '2017-2018学年第一学期期末课程考核情况通报三',
          'author': '教务处',
          'time': '2018-01-10',
          'top': 0
        },
        {
          'id': 'dean6641',
          'title': '2017-2018学年第一学期期末课程考核情况通报二',
          'author': '教务处',
          'time': '2018-01-09',
          'top': 0
        },
        {
          'id': 'dean6629',
          'title': '2017-2018学年第一学期期末课程考核情况通报一',
          'author': '教务处',
          'time': '2018-01-05',
          'top': 0
        },
        {
          'id': 'dean6621',
          'title': '关于填报2018年全日制普通本科辅修专业学士学位教育招生计划的通知',
          'author': '教务处',
          'time': '2018-01-02',
          'top': 0
        },
        {
          'id': 'dean6607',
          'title': '关于取消覃勇等同学课程考核资格的决定',
          'author': '教务处',
          'time': '2017-12-28',
          'top': 0
        },
        {
          'id': 'dean6600',
          'title': '关于开展优秀教研室表彰暨教研室工作交流与研讨会的通知',
          'author': '教务处',
          'time': '2017-12-27',
          'top': 0
        },
        {
          'id': 'dean6595',
          'title': '关于开展2017～2018学年第一学期学生网上评教和教师网上评学工作的通知',
          'author': '教务处',
          'time': '2017-12-26',
          'top': 0
        },
        {
          'id': 'dean6574',
          'title': '关于印发学生参加全国第五届大学生艺术展演 活动名单的通知',
          'author': '教务处',
          'time': '2017-12-22',
          'top': 0
        },
        {
          'id': 'dean6569',
          'title': '关于印发本学期学生参加体育竞赛 集训队队员名单的通知',
          'author': '教务处',
          'time': '2017-12-22',
          'top': 0
        },
        {
          'id': 'dean6579',
          'title': '关于印发学生参加全国校园跨年晚会名单的通知',
          'author': '教务处',
          'time': '2017-12-22',
          'top': 0
        },
        {
          'id': 'dean6586',
          'title': '关于印发学生参加校史话剧演出名单的通知',
          'author': '教务处',
          'time': '2017-12-22',
          'top': 0
        },
        {
          'id': 'dean6564',
          'title': '关于我校2015级学前教育（中英合作办学）专业学生拟分流名单的公示',
          'author': '教务处',
          'time': '2017-12-20',
          'top': 0
        },
        {
          'id': 'dean6556',
          'title': '2017届本科毕业论文（设计）归档材料检查情况通报',
          'author': '教务处',
          'time': '2017-12-18',
          'top': 0
        },
        {
          'id': 'dean6552',
          'title': '2017届本科毕业论文（设计）归档材料检查情况通报',
          'author': '教务处',
          'time': '2017-12-18',
          'top': 0
        },
        {
          'id': 'dean6546',
          'title': '关于给予韦韬等40名学生拟退学处理的公告',
          'author': '教务处',
          'time': '2017-12-14',
          'top': 0
        },
        {
          'id': 'dean6539',
          'title': '关于2017年12月全国大学英语等级考试巡视的通知',
          'author': '教务处',
          'time': '2017-12-13',
          'top': 0
        },
        {
          'id': 'dean6530',
          'title': '关于2017～2018学年第二学期学生网上选课的通知',
          'author': '教务处',
          'time': '2017-12-11',
          'top': 0
        }
      ]
      break
    }
    case '4': {
      data = [
        {
          'id': '752ee6b3922a4b26b0c2866730597234',
          'title': '邓军书记为出版社集团作学习贯彻党的十九大精神专题报告',
          'author': '师大要闻',
          'time': '2018-02-11',
          'top': 0
        },
        {
          'id': 'c96a8831cdcd45db973448a0b3666460',
          'title': '贺祖斌校长、赵铁副书记出席出版社集团2017年度总结表彰大会',
          'author': '师大要闻',
          'time': '2018-02-11',
          'top': 0
        },
        {
          'id': '605c9d563bd24872b8de94cff5bd8898',
          'title': '校领导深入结对帮扶贫困村开展调查走访和新春慰问活动',
          'author': '师大要闻',
          'time': '2018-01-23',
          'top': 0
        },
        {
          'id': '7d70d32c14204b30ad106c843d66b882',
          'title': '我校在2017年全国学位授权审核中获得四个一级学科博士学位授权点',
          'author': '师大要闻',
          'time': '2018-01-23',
          'top': 0
        },
        {
          'id': 'ad2c69a5d93748098005f7d3579c416c',
          'title': '校党委召开常委会专题研究2018年学校深化巡视整改工作',
          'author': '师大要闻',
          'time': '2018-01-23',
          'top': 0
        },
        {
          'id': 'bd40636f5e104f6980360b5a25182959',
          'title': '学校党委常委会专题研究学校财务工作',
          'author': '师大要闻',
          'time': '2018-01-23',
          'top': 0
        },
        {
          'id': '38e711c30eb54ab6bcdbd891af38e244',
          'title': '校党委召开常委会专题研究学校党风廉政建设工作',
          'author': '师大要闻',
          'time': '2018-01-22',
          'top': 0
        },
        {
          'id': '7110359665c04e068a7e920336b67bba',
          'title': '广西师范大学“双师教学”广西模式改革试点项目顺利完成自治区教育厅中期评估',
          'author': '师大要闻',
          'time': '2018-01-21',
          'top': 0
        },
        {
          'id': '99c0235f1732415f8db8c09ad46ac495',
          'title': '学校召开2017年度二级单位党组织书记抓党建现场述职评议会',
          'author': '师大要闻',
          'time': '2018-01-20',
          'top': 0
        },
        {
          'id': '375a9472ad8443f2b64e28feb011ce73',
          'title': '出版社图书荣获广西第十四届精神文明建设“五个一工程”奖',
          'author': '师大要闻',
          'time': '2018-01-19',
          'top': 0
        },
        {
          'id': 'f32ab4fbbee948b3a30bc87505ffdfb8',
          'title': '邓军书记贺祖斌校长赴京看望北京校友',
          'author': '师大要闻',
          'time': '2018-01-19',
          'top': 0
        },
        {
          'id': '024dff0025134ce3b721aad4c11b82ae',
          'title': '邓军书记贺祖斌校长率团访问北京师范大学',
          'author': '师大要闻',
          'time': '2018-01-19',
          'top': 0
        },
        {
          'id': 'dd7cf360c0f94f08986aacf86149e47a',
          'title': '我校机关党委举办2018年迎新歌咏诵读会',
          'author': '师大要闻',
          'time': '2018-01-18',
          'top': 0
        },
        {
          'id': '7b518a907c9d4e8b8884f8b4b330a875',
          'title': '我校召开2018年出版编审委员会工作会暨出版社集团年度出版计划论证会',
          'author': '师大要闻',
          'time': '2018-01-18',
          'top': 0
        },
        {
          'id': '9a30a096c75541608106fa492f049daf',
          'title': '出版社图书入选广电总局第二届向全国推荐中华优秀传统文化普及图书',
          'author': '师大要闻',
          'time': '2018-01-18',
          'top': 0
        },
        {
          'id': 'fdd90e9739614361a6ae1a7e3a35b680',
          'title': '美国内布拉斯加大学奥马哈分校代表团访问我校',
          'author': '师大要闻',
          'time': '2018-01-17',
          'top': 0
        },
        {
          'id': '10b73bbc01a44ee7bcfb1bc12079a8a4',
          'title': '我校荣获光明日报社2017年度新闻宣传工作突出贡献奖',
          'author': '师大要闻',
          'time': '2018-01-17',
          'top': 0
        },
        {
          'id': '70a3bf92baec46f4b4aa1904862656e3',
          'title': '党办、校办党支部结合学校综合改革方案学习学校第十一次党代会精神',
          'author': '师大要闻',
          'time': '2018-01-17',
          'top': 0
        },
        {
          'id': '75ec184a6cde478c858d20d1145bffdb',
          'title': '“学习贯彻习近平新时代中国特色社会主义思想”学术研讨在我校召开',
          'author': '师大要闻',
          'time': '2018-01-17',
          'top': 0
        },
        {
          'id': '2eaa7e17f4e8414f840d636d7e695460',
          'title': '【综合改革】学校综合改革领导小组召开工作会议',
          'author': '师大要闻',
          'time': '2018-01-17',
          'top': 0
        }
      ]
      break
    }
    case '5': {
      data = [
        {
          'id': '151444907766815162',
          'title': '美国纽约州立大学Ho Hon, Leung教授学术报告',
          'author': '法学院/政治与公共管理学院',
          'time': '2017-12-28',
          'top': 0
        },
        {
          'id': '151436457772225959',
          'title': '外国语学院系列学术活动',
          'author': '外国语学院',
          'time': '2017-12-27',
          'top': 0
        },
        {
          'id': '151438221969783925',
          'title': '云南大学牛雪梅研究员学术报告',
          'author': '化学与药学学院',
          'time': '2017-12-27',
          'top': 0
        },
        {
          'id': '151429472110151239',
          'title': '云南大学蒋峰芝教授学术报告',
          'author': '化学与药学学院',
          'time': '2017-12-26',
          'top': 0
        },
        {
          'id': '151425765131220481',
          'title': '东南大学王志功教授学术报告',
          'author': '电子工程学院',
          'time': '2017-12-26',
          'top': 0
        },
        {
          'id': '151416810276981312',
          'title': '广西文科中心第110期人文强桂系列学术沙龙：2018年国家社科基金项目选题学术沙龙专场之二',
          'author': '社会科学研究处',
          'time': '2017-12-25',
          'top': 0
        },
        {
          'id': '151416805208570073',
          'title': '东北大学王建华教授学术报告',
          'author': '化学与药学学院',
          'time': '2017-12-25',
          'top': 0
        },
        {
          'id': '151416656335839935',
          'title': '广西文科中心第109期人文强桂系列学术沙龙：2018年国家社科基金项目选题学术沙龙专场之一',
          'author': '社会科学研究处',
          'time': '2017-12-25',
          'top': 0
        },
        {
          'id': '151374294349689269',
          'title': '学术报告：社会主要矛盾转变与新时代基层社会治理创新、大学生如何实现高质量就业',
          'author': '法学院/政治与公共管理学院',
          'time': '2017-12-20',
          'top': 0
        },
        {
          'id': '151367257046179356',
          'title': '关于开展“谈谈性说说艾”2017高校学子性健康与防艾倡导计划专题讲座的通知',
          'author': '校团委',
          'time': '2017-12-19',
          'top': 0
        },
        {
          'id': '151364437643614260',
          'title': '北京大学张文雄教授学术报告：稀土金属杂环试剂的研发及应用',
          'author': '化学与药学学院',
          'time': '2017-12-19',
          'top': 0
        },
        {
          'id': '151321839189133073',
          'title': '中国社会科学院学部委员张海鹏教授学术报告',
          'author': '广西人文社会科学发展研究中心社会科学研究处',
          'time': '2017-12-14',
          'top': 0
        },
        {
          'id': '151321587478656814',
          'title': '第二届 “珠江-西江经济带发展研究”高端论坛公告',
          'author': '广西人文社会科学发展研究中心',
          'time': '2017-12-14',
          'top': 0
        },
        {
          'id': '151298306429099087',
          'title': '学术报告：高能物理实验中的径迹探测',
          'author': '物理科学与技术学院',
          'time': '2017-12-11',
          'top': 0
        },
        {
          'id': '151272178732745987',
          'title': '音乐学院首届学术活动周公告',
          'author': '音乐学院',
          'time': '2017-12-08',
          'top': 0
        },
        {
          'id': '151243712397125374',
          'title': '关于广西高等学校千名中青年骨干教师培育计划第一期培养对象补充推荐人选的公示',
          'author': '人事处',
          'time': '2017-12-05',
          'top': 0
        },
        {
          'id': '151245798482655995',
          'title': '关于组织填报国家自然科学基金项目结题和进展报告的通知',
          'author': '科学技术处',
          'time': '2017-12-05',
          'top': 0
        },
        {
          'id': '151244356369832554',
          'title': '独秀大讲坛讲座预告：中国传统文化系列之古代弦歌与吟唱暨古琴演奏会',
          'author': '校团委',
          'time': '2017-12-05',
          'top': 0
        },
        {
          'id': '151237349235312400',
          'title': '南开大学彭谦教授学术报告',
          'author': '化学与药学学院',
          'time': '2017-12-04',
          'top': 0
        },
        {
          'id': '151237449410466431',
          'title': '北京大学医学部杨振军教授学术报告',
          'author': '化学与药学学院',
          'time': '2017-12-04',
          'top': 0
        }
      ]
      break
    }
    case '6': {
      data = []
      break
    }
    default: {
      data = []
      break
    }
  }
  return data
})

Mock.mock(/getNews/, () => {
  let data = `
  
  <html><body><div> <p> </p> <p> <span>   光阴荏苒，金秋十月，广西师范大学将迎来  </span> <span>   85  </span> <span>   周岁生日。在此，我们向长期关心和支持学校建设与发展的各级领导、各界朋友和海内外校友致以诚挚的问候和崇高的敬意！  </span> <span> <?xml:namespace prefix = "o" ns = "urn:schemas-microsoft-com:office:office" /> <o:p> </o:p> </span> </p> <p> <span>   为进一步推进校园文化建设，更好营造师生员工和广大校友爱校荣校的氛围，推动学校各项事业更好地发展，学校拟在  </span> <span>   85  </span> <span>   周年校庆日之际，于  </span> <span>   10  </span> <span>   月中旬开展校庆日纪念系列活动。现将  </span> <span>   85  </span> <span>   周年校庆日主要纪念活动公告如下：  </span> <span> <o:p> </o:p> </span> </p> <div> <table border="1" cellpadding="0" cellspacing="0"> <tbody> <tr> <td> <p> <font> <b> <span>          “         </span> </b> <b> <span>          五个一         </span> </b> <b> <span>          ”          <o:p> </o:p> </span> </b> </font> </p> <p> <font> <b> <span>          主题系列活动         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          活动时间         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          活动内容         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          活动地点         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          负责单位         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> </tr> <tr> <td rowspan="12"> <p> <font size="3"> <font> <span>          一系列校史         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          文化传承活动         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td rowspan="2"> <p> <font size="3"> <font> <?xml:namespace prefix = "st1" ns = "urn:schemas-microsoft-com:office:smarttags" /> <st1:chsdate day="9" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           9          </span> <span>           日          </span> </st1:chsdate> <span>          -13         </span> <span>          日         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          老年书画摄影作品展         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td rowspan="2"> <p> <font size="3"> <font> <span>          雁山校区纯道楼         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td rowspan="2"> <p> <font size="3"> <font> <span>          宣传部、校办、离退处、老年诗书画摄影协会、摄影学会、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          校友总会秘书处         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <span>          “         </span> <span>          耕耘风采与成果         </span> <span>          ”          <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          摄影作品展         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          7:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校庆升国旗仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          王城校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          育才校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          雁山校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          学工部（处）         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          8:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          一起做弘文励教的朗读者         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          王城校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          育才校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          出版社观文馆、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          8:50          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校训石落成仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          雁山校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          宣传部、党办、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          校办、后勤基建处、校友总会秘书处         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          15:20          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友集体婚礼         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          王城校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、桂林校友会青年分会（筹）         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          20:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校史故事系列书籍         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          首发仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          王城校区国学堂         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          出版集团         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          20:30          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          原创校史话剧《杨东莼》         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          王城校区国学堂         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          宣传部、校团委、         </span> <span> </span> <span>          学工部（处）         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <span> <font size="3"> <font> <span> </span> <span> </span> <st1:chsdate day="20" islunardate="False" isrocdate="False" month="9" w:st="on" year="2017">           9           <span> <span>             月            </span> </span>           20           <span> <span>             日            </span> </span> </st1:chsdate>          -          <o:p> </o:p> </font> </font> </span> </p> <p> <font size="3"> <font> <st1:chsdate day="20" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           20          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校史校情教育活动         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          王城校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          育才校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          雁山校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          学工部（处）         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="24" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           24          </span> <span>           日          </span> </st1:chsdate> <span>          9:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          出版集团总部大楼         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          启用仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          出版集团总部大楼         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          出版集团         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="30" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           30          </span> <span>           日          </span> </st1:chsdate> <span>          -          <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <st1:chsdate day="3" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           3          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          “         </span> <span>          独秀精神         </span> <span> </span> <span>          乐群文化         </span> <span>          ”          <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          校史故事动漫、平面作品         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          创作大赛作品展         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          雁山校区纯道楼         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          宣传部         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="26" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           26          </span> <span>           日          </span> </st1:chsdate> <span>          9:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          杨东莼铜像落成仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          雁山校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          北京校友会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td rowspan="3"> <p> <font> <span>         一系列学术论坛        </span> <span> <o:p> </o:p> </span> </font> </p> </td> <td> <p> <font size="3"> <font> <st1:chsdate day="24" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           24          </span> <span>           日          </span> </st1:chsdate> <span>          -26         </span> <span>          日         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          G20         </span> <span>          教育对话和         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          东南亚会议         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          育才校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          教育学部、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="20" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           20          </span> <span>           日          </span> </st1:chsdate> <span>          -          <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <st1:chsdate day="10" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           10          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          杰出校友报告会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          王城校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          育才校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          雁山校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、宣传部、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          各学院（部）         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="20" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           20          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          中华优秀传统文化传承         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          发展论坛         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          出版集团大楼         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          育才校区         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          独秀书院、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会、出版集团         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font> <b> <span>          “         </span> </b> <b> <span>          五个一         </span> </b> <b> <span>          ”          <o:p> </o:p> </span> </b> </font> </p> <p> <font> <b> <span>          主题系列活动         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          活动时间         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          活动内容         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          活动地点         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> <td> <p> <font> <b> <span>          负责单位         </span> </b> <b> <span> <o:p> </o:p> </span> </b> </font> </p> </td> </tr> <tr> <td rowspan="2"> <p> <font> <span>         一个捐赠体系        </span> <span> <o:p> </o:p> </span> </font> </p> </td> <td> <p> <span> <font size="3"> <font> <span> </span> <st1:chsdate day="20" islunardate="False" isrocdate="False" month="9" w:st="on" year="2017">           9           <span> <span>             月20            </span> </span> <span> <span>             日            </span> </span> </st1:chsdate>          -          <o:p> </o:p> </font> </font> </span> </p> <p> <font size="3"> <font> <st1:chsdate day="20" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月           <span>            20           </span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <span> <font size="3"> <font>          慈善捐赠文化教育活动          <span> <o:p> </o:p> </span> </font> </font> </span> </p> </td> <td> <p> <span> <font size="3"> <font>          王城校区          <span> <o:p> </o:p> </span> </font> </font> </span> </p> <p> <span> <font size="3"> <font>          育才校区          <span> <o:p> </o:p> </span> </font> </font> </span> </p> <p> <span> <font size="3"> <font>          雁山校区          <span> <o:p> </o:p> </span> </font> </font> </span> </p> </td> <td> <p> <span> <font size="3"> <font>          学工部（处）、          <span> <o:p> </o:p> </span> </font> </font> </span> </p> <p> <span> <font size="3"> <font>          教育发展基金会          <span> <o:p> </o:p> </span> </font> </font> </span> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="13" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           13          </span> <span>           日          </span> </st1:chsdate> <span>          9:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          “         </span> <span>          让每一位校友都能共享到母校发展成果         </span> <span>          ”         </span> <span>          恳谈会          <span> <o:p> </o:p> </span> </span> </font> </font> </p> </td> <td> <p> <span> <font size="3"> <font>          育才校区校友之家          <span> <o:p> </o:p> </span> </font> </font> </span> </p> </td> <td> <p> <font size="3"> <font> <span>          校教育发展基金会、         </span> <span>          校友总会秘书处          <span> <o:p> </o:p> </span> </span> </font> </font> </p> </td> </tr> <tr> <td rowspan="7"> <p> <font> <span>         一个校友        </span> <span> <o:p> </o:p> </span> </font> </p> <p> <font> <span>         工作创新        </span> <span> <o:p> </o:p> </span> </font> </p> <p> <font> <span>         机制        </span> <span> <o:p> </o:p> </span> </font> </p> </td> <td> <p> <font size="3"> <font> <st1:chsdate day="23" islunardate="False" isrocdate="False" month="9" w:st="on" year="2017"> <span>           9          </span> <span>           月          </span> <span>           23          </span> <span>           日          </span> </st1:chsdate> <span>          10:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          柳州校友会青年分会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          成立仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          柳         </span> <span> </span> <span>          州         </span> <span> </span> <span>          市         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          柳州校友会、柳州校友会青年分会（筹）         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="24" islunardate="False" isrocdate="False" month="9" w:st="on" year="2017"> <span>           9          </span> <span>           月          </span> <span>           24          </span> <span>           日          </span> </st1:chsdate> <span>          10:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          喜迎         </span> <span>          85         </span> <span>          周年校庆         </span> <span>          2017         </span> <span>          年         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          南宁校友绿色骑行活动         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          南         </span> <span> </span> <span>          宁         </span> <span> </span> <span>          市         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          南宁校友会青年分会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          11:00          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          企业家校友联谊会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          第二次理事会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          育才校区校友之家         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、教育发展基金会、企业家校友联谊会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <span> <font size="3"> <font> <span> </span> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017">           10           <span> <span>             月            </span> </span>           12           <span> <span>             日            </span> </span> </st1:chsdate>          -          <o:p> </o:p> </font> </font> </span> </p> <p> <font size="3"> <font> <st1:chsdate day="30" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           30          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          开展         </span> <span>          “         </span> <span>          校友乐群公益日         </span> <span>          ”          <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          活         </span> <span> <span> </span> </span> <span>          动         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          各地校友会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          校团委、各地校友会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="18" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           18          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          桂林校友会青年分会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          成立仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          育才校区校友之家         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          桂林校友会青年分会（筹）         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="20" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           20          </span> <span>           日          </span> </st1:chsdate> <span>          -          <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <st1:chsdate day="30" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           30          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          成立湖北校友会、山东校友会、玉林校友会青年分会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          湖北武汉         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          山东济南         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          广西玉林         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <st1:chsdate day="1" islunardate="False" isrocdate="False" month="11" w:st="on" year="2017"> <span>           11          </span> <span>           月          </span> <span>           1          </span> <span>           日          </span> </st1:chsdate> <span>          -          <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <st1:chsdate day="30" islunardate="False" isrocdate="False" month="12" w:st="on" year="2017"> <span>           12          </span> <span>           月          </span> <span>           30          </span> <span>           日          </span> </st1:chsdate> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          成立教师教育校友联谊会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          南         </span> <span> </span> <span>          宁         </span> <span> </span> <span>          市         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          桂         </span> <span> </span> <span>          林         </span> <span> </span> <span>          市         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友总会秘书处、         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教师教学发展中心         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          教育发展基金会         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> </tr> <tr> <td> <p> <font size="3"> <font> <span>          一个校友之家         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <st1:chsdate day="12" islunardate="False" isrocdate="False" month="10" w:st="on" year="2017"> <span>           10          </span> <span>           月          </span> <span>           12          </span> <span>           日          </span> </st1:chsdate> <span>          10:20          <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          校友之家         </span> <span>          •         </span> <span>          红豆咖啡         </span> <span> <o:p> </o:p> </span> </font> </font> </p> <p> <font size="3"> <font> <span>          揭牌仪式         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <font size="3"> <font> <span>          育才校区校友之家         </span> <span> <o:p> </o:p> </span> </font> </font> </p> </td> <td> <p> <span> <font size="3">         校友总会秘书处、教育发展基金会        </font> </span> <span> <o:p> </o:p> </span> </p> </td> </tr> </tbody> </table> </div> <p> <span>   不忘初心，砥砺前行；春华秋实，盛世相约。  </span> <span>   85  </span> <span>   周年校庆日纪念活动，是学校传承优良传统、再续华章的新起点，也是全体师大人共同期盼、共享欢乐的新载体。我们热烈欢迎校友再聚母校，共叙友情，齐商未来；我们热切期盼社会各界继续关心和支持学校各项事业的发展，共同为中国高等教育事业做出更大的贡献！  </span> <span> <br/> </span> <span>   特此公告，敬祈周知。  </span> <span> <br/> </span> <span>   联系方式：  </span> <span> <br/> </span> <span>   联系电话：  </span> <span>   0773-5846895      0773-5818780  </span> <span>   （传真）  </span> <span> <br/>   E-mail  </span> <span>   ：  </span> <span> <a href="mailto:xyzh@gxnu.edu.cn"> <span>     xyzh@gxnu.edu.cn    </span> </a> </span> <span> <br/> </span> <span>   通讯地址：广西桂林市七星区育才路  </span> <span>   15  </span> <span>   号  </span> <span> </span> <span>   邮编：  </span> <span>   541004   <o:p> </o:p> </span> </p> <p> <span> <br/> <br/> </span> <span>   广西师范大学  </span> <span> <br/>   2017  </span> <span>   年  </span> <span>   10  </span> <span>   月  </span> <span>   10  </span> <span>   日  </span> <span> <o:p> </o:p> </span> </p></div></body></html>

  `
  data = `<div>${data}
    <style scoped>
      p {
          text-indent: 2em;
          font-size: 16px;
      }
      
      font {
          word-wrap: break-word;
          font-size: 16px;
      }
      
      td {
          text-align: center;
          vertical-align: middle;
          border: solid #000;
          border-width: 0px 1px 1px 0px;
          padding: 10px 0px;
      }
      
      table {
          width: 100%;
          border: solid #000;
          border-width: 1px 0px 0px 1px;
      }
      
      td>p {
          text-indent: 0;
      }
      
    </style>
  </div>`
  data = {
    'id': '151954961030167752',
    'title': '关于更改参加原副校长江士敏同志遗体告别仪式乘车时间的通知',
    'author': '校长办公室',
    'time': '2018-02-25',
    'content': data,
    'download': [
      {
        'id': '1',
        'title': '附件1',
        'link': ''
      },
      {
        'id': '2',
        'title': '附件2',
        'link': ''
      }
    ]
  }
  return data
})

Mock.mock(/getXgbList/, (options) => {
  const key = getParma('key', options.url)
  let data = []
  if (key === '9a9870f3ebbd8fde2da5d1dd615b5f54') {
    data = [
      {
        'key': '3bc612fca261019dd6c7bb33d502b3bb',
        'title': '关于组织我校本科生国家奖学金获奖学生担任 “学生资助宣传大使”的通知',
        'author': '学生资助管理中心',
        'time': '2018-01-19T10:33:02.929Z'
      },
      {
        'key': '6c7d70764ec4aaabdca4c60810f719be',
        'title': '关于做好2017级新生入学教育考试的通知',
        'author': '思教科',
        'time': '2018-01-08T07:22:41.416Z'
      },
      {
        'key': '2a0d55cd8c26a511fdaf62987ccf09a9',
        'title': '关于期末期间暂停校易班办公室值班的通知',
        'author': '易班中心',
        'time': '2018-01-06T08:24:52.807Z'
      },
      {
        'key': '5118db62be3730afccc81b1cde724a85',
        'title': '关于做好我校预防艾滋病健康教育工作的通知',
        'author': '思教科',
        'time': '2018-01-05T07:09:30.695Z'
      },
      {
        'key': 'aaa10f029ebe5db5eaf0984ec04bb93c',
        'title': '关于做好2017-2018学年第一学期期末和寒假期间学生工作的通知',
        'author': '学生管理科',
        'time': '2018-01-05T01:59:52.048Z'
      },
      {
        'key': 'c81d6c27293212d4888ddc043556e391',
        'title': '关于做好我校2018年优秀毕业生评选工作的通知',
        'author': '大学生就业指导中心',
        'time': '2017-12-28T07:28:13.123Z'
      },
      {
        'key': '2219b6150a2de10e37099d1d5818a37c',
        'title': '关于做好2018年元旦放假期间学生安全稳定工作的通知',
        'author': '学生管理科',
        'time': '2017-12-28T01:17:10.705Z'
      },
      {
        'key': '074b6560275ff8650a9956ee9832f15b',
        'title': '关于做好2017年度新长城自强助学金资助工作的通知',
        'author': '学生资助管理中心',
        'time': '2017-12-27T01:50:07.363Z'
      },
      {
        'key': '3dda8c7761affb3929cf2f805c1478c7',
        'title': '关于开展2017年度学生资助工作先进个人评选工作的通知',
        'author': '学生资助管理中心',
        'time': '2017-12-27T01:46:35.346Z'
      },
      {
        'key': '9a2a26b1a513bad2b72e1394b00d6c8d',
        'title': '关于召开我校2017年度奖学金、助学金颁发仪式 暨评优表彰大会的通知',
        'author': '学生资助管理中心',
        'time': '2017-12-27T01:27:22.260Z'
      },
      {
        'key': 'e5c4250ca88e5c8210fcac76cd46a01a',
        'title': '关于开展“学习贯彻党的十九大精神——辅导员校园巡讲”活动的通知',
        'author': '思教科',
        'time': '2017-12-25T08:32:40.788Z'
      },
      {
        'key': 'c16810b77c1233ad2b12fb7bdfa46471',
        'title': '关于我校2016～2017学年度本科生校级先进班集体推荐班级的公示',
        'author': '学生资助管理中心',
        'time': '2017-12-22T07:32:03.469Z'
      },
      {
        'key': 'bdb26db90eb4bc55c4b45c3fe332bf04',
        'title': '关于我校2016～2017学年度研究生校级先进集体推荐名单的公示',
        'author': '学生资助管理中心',
        'time': '2017-12-20T02:13:28.654Z'
      },
      {
        'key': '12a615065c324e51e5de14b4746949e9',
        'title': '关于申报2017年度辅导员基地科研成果奖励的通知',
        'author': '辅导员基地',
        'time': '2017-12-15T06:46:40.677Z'
      },
      {
        'key': '4f1dbf12c6fd45ba142c4c8656488cd5',
        'title': '关于参加2016-2017学年度本科生校级先进班集体现场展评会的通知',
        'author': '学生资助管理中心',
        'time': '2017-12-14T03:26:38.831Z'
      },
      {
        'key': 'ef1059745420c3147ed15b36cad5373c',
        'title': '关于“学习十九大精神 争当新时代先锋”网络知识竞赛获奖名单的公示',
        'author': '易班中心',
        'time': '2017-12-13T13:38:33.627Z'
      },
      {
        'key': '1d7f737f349363f63014d767a8f8c223',
        'title': '关于我校2018年“资助部分高校优秀大学生出国研学”项目推荐人选的公示',
        'author': '学生资助管理中心',
        'time': '2017-12-08T07:51:29.308Z'
      },
      {
        'key': 'abfd510ca831581ab07374c2aebab7bd',
        'title': '关于做好2017年生源地信用助学贷款抵扣学杂费工作的通知',
        'author': '学生资助管理中心',
        'time': '2017-11-30T08:52:20.585Z'
      },
      {
        'key': '7d0fccc9db102e569effff4760fa7450',
        'title': '关于做好我校2017—2018学年度校园地助学贷款 申报工作的通知',
        'author': '学生资助管理中心',
        'time': '2017-11-30T08:47:49.672Z'
      },
      {
        'key': '1ee32d417d9c8eb3ab39d1ed498bfd22',
        'title': '关于开展2017年秋季学期遴选研究生担任本科生兼职辅导员工作的通知',
        'author': '思教科',
        'time': '2017-11-29T07:15:08.912Z'
      }
    ]
  } else if (key === '55938ef9fe8c8e8a617a093c90cf19ee') {
    data = [
      {
        'key': '2a0d55cd8c26a511fdaf62987ccf09a9',
        'title': '关于期末期间暂停校易班办公室值班的通知',
        'author': '易班中心',
        'time': '2018-01-06T08:24:52.807Z'
      },
      {
        'key': 'ef1059745420c3147ed15b36cad5373c',
        'title': '关于“学习十九大精神 争当新时代先锋”网络知识竞赛获奖名单的公示',
        'author': '易班中心',
        'time': '2017-12-13T13:38:33.627Z'
      },
      {
        'key': 'dacbfe77101a4d6e99af5111bf2c53d9',
        'title': '关于开展2017年度优秀易班评选工作的通知',
        'author': '易班中心',
        'time': '2017-11-22T06:43:22.138Z'
      },
      {
        'key': '6e808f42a3080a3fd3f248f5d33fc7dd',
        'title': '关于组织学生开展“学习十九大精神 争当新时代先锋”网络知识竞赛的通知',
        'author': '易班中心',
        'time': '2017-11-22T03:35:01.213Z'
      },
      {
        'key': '0e36dba84b2589351fcc02c6f54ef7c0',
        'title': '关于组织动员师生参与“2017年全国易班优秀评选”投票活动的通知',
        'author': '易班中心',
        'time': '2017-11-22T01:44:38.680Z'
      },
      {
        'key': 'a78a5fe93c81ed219a68fb936a561a31',
        'title': '广西民族大学到我校考察交流易班建设工作',
        'author': '易班中心',
        'time': '2017-11-14T01:32:37.818Z'
      },
      {
        'key': 'f8f2deca48ee6963214be4c41001f643',
        'title': '常见易班问题及易班客服电话QQ',
        'author': '易班中心',
        'time': '2017-11-08T02:17:12.243Z'
      },
      {
        'key': '43382eaef170592b316c16d0d4a47369',
        'title': '【校运会活动】校易班将开展系列校运会活动',
        'author': '易班中心',
        'time': '2017-11-08T02:05:36.017Z'
      },
      {
        'key': '3170f09069a5b9350b89d1d19640bd90',
        'title': '易班学生工作站（分站）活动立项申请表',
        'author': '易班中心',
        'time': '2017-11-08T02:01:35.977Z'
      },
      {
        'key': '205210430f7369ebc460487cdb2cf197',
        'title': '学院、班级客户端首页资讯公共平台使用手册',
        'author': '易班中心',
        'time': '2017-11-08T01:58:45.763Z'
      },
      {
        'key': '7ecbe5ef64e143a2d2b43ffca4ef1a43',
        'title': '辅导员易班建群等操作说明书-20170825',
        'author': '易班中心',
        'time': '2017-11-08T01:50:25.668Z'
      },
      {
        'key': 'b54260484c9f0f1d858fa347b45242dc',
        'title': '我校易班学生工作站举行素质拓展活动',
        'author': '易班工作站',
        'time': '2017-11-03T15:35:18.305Z'
      },
      {
        'key': '38b9555d2ec7a69277ef688751c8ae74',
        'title': '关于2017级本科生用优课课群学习军事理论课的通知',
        'author': '易班工作站',
        'time': '2017-11-02T15:51:14.528Z'
      },
      {
        'key': '358458ed9d3163f16b6e0341b9649958',
        'title': '【学习贯彻十九大】易班表白十九大 打call新时代',
        'author': '易班工作站',
        'time': '2017-11-02T15:41:31.127Z'
      }
    ]
  } else if (key === 'e42c9b4c2866afef633ee98f7c49c155') {
    data = [
      {
        'key': 'f8f2deca48ee6963214be4c41001f643',
        'title': '常见易班问题及易班客服电话QQ',
        'author': '易班中心',
        'time': '2017-11-08T02:17:12.243Z'
      }
    ]
  }
  return data
})

Mock.mock(/getTimetable/, (options) => {
  let data = [
    {
      'num': 1,
      'class': [
        {
          'name': '计算机系统结构',
          'xf': 3,
          'teacher': '陆遥',
          'xqh': '雁山',
          'room': '周1雁山理科一区1-406',
          'week': 1,
          'start': 1,
          'end': 2,
          'num': 2
        },
        {
          'name': '编译原理',
          'xf': 3,
          'teacher': '闻炳海',
          'xqh': '雁山',
          'room': '周2雁山理科一区1-505',
          'week': 2,
          'start': 1,
          'end': 2,
          'num': 2
        },
        {
          'isclass': 0
        },
        {
          'name': '编译原理',
          'xf': 3,
          'teacher': '闻炳海',
          'xqh': '雁山',
          'room': '周4雁山理科二区2-501',
          'week': 4,
          'start': 1,
          'end': 2,
          'num': 2
        },
        {
          'name': 'VLSI 设计基础',
          'xf': 2,
          'teacher': '罗辉',
          'xqh': '雁山',
          'room': '周5雁山理科二区2-501',
          'week': 5,
          'start': 1,
          'end': 3,
          'num': 3
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 2,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 3,
      'class': [
        {
          'isclass': 0
        },
        {
          'name': '专业英语',
          'xf': 3,
          'teacher': '黄健民',
          'xqh': '雁山',
          'room': '周2雁山理科一区1-505',
          'week': 2,
          'start': 3,
          'end': 5,
          'num': 3
        },
        {
          'name': '计算机系统结构',
          'xf': 3,
          'teacher': '陆遥',
          'xqh': '雁山',
          'room': '周3雁山理科一区1-502',
          'week': 3,
          'start': 3,
          'end': 5,
          'num': 3
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 4,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 5,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 6,
      'class': [
        {
          'name': '手机应用软件开发技术',
          'xf': 3,
          'teacher': '宁凤辉',
          'xqh': '雁山',
          'room': '周1雁山理科二区2-501',
          'week': 1,
          'start': 6,
          'end': 9,
          'num': 4
        },
        {
          'isclass': 0
        },
        {
          'name': '线性代数',
          'xf': 3,
          'teacher': '唐胜达',
          'xqh': '雁山',
          'room': '周3雁山理科一区1-206',
          'week': 3,
          'start': 6,
          'end': 8,
          'num': 3
        },
        {
          'isclass': 0
        },
        {
          'name': '大学生就业指导',
          'xf': 0.5,
          'teacher': '朱伟军',
          'xqh': '雁山',
          'room': '周5雁山文四区202',
          'week': 5,
          'start': 6,
          'end': 8,
          'num': 3
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 7,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 8,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 9,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 10,
      'class': [
        {
          'name': '软件开发实训',
          'xf': 2,
          'teacher': '李肖坚',
          'xqh': '雁山',
          'room': '周1雁山理科二区2-307',
          'week': 1,
          'start': 10,
          'end': 12,
          'num': 3
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'name': '形势与政策（含大学生安全教育课）',
          'xf': 0.5,
          'teacher': '沈青',
          'xqh': '雁山',
          'room': '周7雁山文四区203',
          'week': 7,
          'start': 10,
          'end': 12,
          'num': 3
        }
      ]
    },
    {
      'num': 11,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    },
    {
      'num': 12,
      'class': [
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        },
        {
          'isclass': 0
        }
      ]
    }
  ]
  return data
})

Mock.mock(/getEle/, () => {
  let data = {
    'count': 545,
    'day': 42,
    'data': [
      {
        'sum': 3064.92,
        'date': '05/28',
        'use': 5.02
      },
      {
        'sum': 3052.06,
        'date': '05/27',
        'use': 12.86
      },
      {
        'sum': 3032.03,
        'date': '05/26',
        'use': 20.03
      },
      {
        'sum': 3011.54,
        'date': '05/25',
        'use': 20.49
      },
      {
        'sum': 3003.2,
        'date': '05/24',
        'use': 8.34
      },
      {
        'sum': 2991.39,
        'date': '05/23',
        'use': 11.81
      },
      {
        'sum': 2971.22,
        'date': '05/22',
        'use': 20.17
      }
    ],
    'buy': [
      {
        'count': '185',
        'cash': '100.66',
        'time': '2018-5-25 10:57:43',
        'type': '免费'
      },
      {
        'count': '367',
        'cash': '199.68',
        'time': '2018-5-20 16:26:45',
        'type': '正常'
      },
      {
        'count': '1102',
        'cash': '599.6',
        'time': '2017-10-23 16:39:28',
        'type': '正常'
      },
      {
        'count': '18',
        'cash': '9.79',
        'time': '2017-6-25 15:38:14',
        'type': '正常'
      },
      {
        'count': '18',
        'cash': '9.79',
        'time': '2017-6-13 17:20:02',
        'type': '正常'
      }
    ]
  }
  return data
})

Mock.mock(/getCharge/, () => {
  let data = [
    {
      'ChargeYear': '2017',
      'ItemName': '代收医疗保险费',
      'ChargeDate': '2017-07-05',
      'ShouldAmount': 180,
      'ReduceAmount': 0,
      'RealAmount': 180,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2017',
      'ItemName': '学费',
      'ChargeDate': '2016-01-02',
      'ShouldAmount': 7600,
      'ReduceAmount': 0,
      'RealAmount': 7600,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2017',
      'ItemName': '雁山住宿费(学校)',
      'ChargeDate': '2016-01-02',
      'ShouldAmount': 900,
      'ReduceAmount': 0,
      'RealAmount': 900,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2017',
      'ItemName': '住宿费K',
      'ChargeDate': '2016-01-02',
      'ShouldAmount': 150,
      'ReduceAmount': 0,
      'RealAmount': 150,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2016',
      'ItemName': '学费',
      'ChargeDate': '2016-01-01',
      'ShouldAmount': 7600,
      'ReduceAmount': 0,
      'RealAmount': 7600,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2016',
      'ItemName': '雁山住宿费(学校)',
      'ChargeDate': '2016-01-01',
      'ShouldAmount': 1200,
      'ReduceAmount': 0,
      'RealAmount': 1200,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2016',
      'ItemName': '住宿费K',
      'ChargeDate': '2016-01-01',
      'ShouldAmount': 150,
      'ReduceAmount': 0,
      'RealAmount': 150,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2015',
      'ItemName': '代收教材费',
      'ChargeDate': '2015-01-01',
      'ShouldAmount': 600,
      'ReduceAmount': 0,
      'RealAmount': 600,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2015',
      'ItemName': '代收军训服装费',
      'ChargeDate': '2015-01-01',
      'ShouldAmount': 60,
      'ReduceAmount': 0,
      'RealAmount': 60,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2015',
      'ItemName': '代收体检费',
      'ChargeDate': '2015-01-01',
      'ShouldAmount': 120,
      'ReduceAmount': 0,
      'RealAmount': 120,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2015',
      'ItemName': '代收医疗保险费',
      'ChargeDate': '2015-01-01',
      'ShouldAmount': 140,
      'ReduceAmount': 0,
      'RealAmount': 140,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2015',
      'ItemName': '学费',
      'ChargeDate': '2015-01-01',
      'ShouldAmount': 7600,
      'ReduceAmount': 0,
      'RealAmount': 7600,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2015',
      'ItemName': '雁山住宿费(学校)',
      'ChargeDate': '2015-01-01',
      'ShouldAmount': 1200,
      'ReduceAmount': 0,
      'RealAmount': 1200,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    },
    {
      'ChargeYear': '2015',
      'ItemName': '住宿费K',
      'ChargeDate': '2015-01-01',
      'ShouldAmount': 100,
      'ReduceAmount': 0,
      'RealAmount': 100,
      'BufferAmount': 0,
      'ReturnAmount': 0,
      'OweAmount': 0
    }
  ]
  return data
})
