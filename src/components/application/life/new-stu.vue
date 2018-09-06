<template>
  <div class="new-stu">
    <cube-scroll :data="[user]" style="background: #fff;height: 100%;">
      <div class="stu">
        <div class="logo">
          <p style="padding-top: 16px;font-size: 18px;">新生信息查询</p>
        </div>
        <div class="box-info">
          <div class="box-note">姓名：</div>
          <div class="box-note">{{user.name}}</div>
        </div>
        <div class="box-info">
          <div class="box-note">学号：</div>
          <div class="box-note">{{user.stu}}</div>
        </div>
        <div class="box-info">
          <div class="box-note">学院：</div>
          <div class="box-note">{{user.xy}}</div>
        </div>
        <div class="box-info">
          <div class="box-note">专业：</div>
          <div class="box-note">{{user.zy}}</div>
        </div>
        <div class="box-info">
          <div class="box-note">班级：</div>
          <div class="box-note">{{user.bj}}</div>
        </div>
        <div class="box-info">
          <div class="box-note">宿舍：</div>
          <div class="box-note">{{user.lou}}{{user.room}}</div>
        </div>
        <div class="box-info">
          <div class="box-note">规格：</div>
          <div class="box-note">{{user.num}}人间</div>
        </div>
        <template v-for="item, index in split1(user.fdy,user.tel)">
          <div class="box-info">
            <div class="box-note">辅导员{{index+1}}：</div>
            <div class="box-note">{{item.fdy}}</div>
          </div>
          <div class="box-info">
            <div class="box-note">辅导员电话{{index+1}}：</div>
            <a class="box-note" @click="tel(item.tel)" style="color: #0099FF;">{{item.tel}}</a>
          </div>
        </template>
        <cube-button primary
                     @click="$router.push({path: '/app/life/sycx', query:{lou: user.lou, room: user.room}})">舍友查询
        </cube-button>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {phoneFun, browser} from 'common/js/ybh5'

  export default {
    name: 'new-stu',
    activated() {
      process.env.NODE_ENV !== 'development' && this.getStu()
    },
    methods: {
      tel(telephone) {
        let num = telephone
        if (telephone.length === 7) {
          num = '0773' + telephone
        }
        if (browser.versions.ios) {
          window.location.href = `tel:${num}`
        } else if (browser.versions.android) {
          phoneFun(num)
        }
      },
      split1(fdy, tel) {
        let fdys = fdy.split('|')
        let tels = tel.split('|')
        let data = []
        for (let i = 0; i < tels.length; i++) {
          data.push({fdy: fdys[i], tel: tels[i]})
        }
        return data
      },
      getStu() {
        this.$http.get('getStu').then((res) => {
          this.isLogin = res.isLogin
          this.user = res.user
        }).catch((err) => {
          this.user = {
            stu: '',
            name: '',
            xy: '',
            zy: '',
            bj: '',
            lou: '',
            room: '',
            num: '',
            fdy: '',
            tel: ''
          }
          this.showMsg(err, '获取信息失败')
        })
      },
      showMsg(err, msg) {
        this.$createDialog({
          type: 'alert',
          title: msg,
          content: err.toString(),
          icon: 'cubeic-alert'
        }).show()
      }
    },
    data() {
      return {
        user: {
          stu: '',
          name: '',
          xy: '',
          zy: '',
          bj: '',
          lou: '',
          room: '',
          num: '',
          fdy: '',
          tel: ''
          // stu: '201512300018',
          // name: '陈震海',
          // xy: '计算机科学与信息工程学院',
          // zy: '计算机科学与技术',
          // bj: '1班',
          // lou: '雁山8栋',
          // room: '106',
          // num: '6',
          // fdy: '岑洁静|杨真宝|颉晓凯',
          // tel: '13737709529|13737704188|15577351180'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .new-stu
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #faf9f7
    margin 5px
    .logo
      margin-bottom 48px
      text-align center
    .bind
      text-align center
      padding 128px 24px 12px 24px
    .in
      margin 5px 12px

  .stu
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    height 100%
    background #faf9f7

  .box-info
    display flex
    margin 10px
    font-size 14px
    height 16px
    align-items center
    justify-content space-between
    .box-note
      color #606266
</style>
