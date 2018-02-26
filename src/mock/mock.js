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
