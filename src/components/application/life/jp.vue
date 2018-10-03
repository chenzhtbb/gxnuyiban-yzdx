<template>
  <div class="jp">
    <div>
      <div>
        <img src="./zjjlbg.png" style="width: 100%;">
        <h3 style="text-align: center;">摇一摇中奖记录</h3>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box" v-if="isJp==='1'" @click="lq">
          <span class="info-box-icon bg-red"><i class="iconfont icon-jiangpin1" style="font-size: 48px;"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">{{info.time}}</span>
            <span class="info-box-number">{{info.prize}}</span>
            <span class="info-box-number">{{info.yes===0?'未领取':'已领取'}}</span>
          </div>
        </div>
        <div class="info-box" v-else>
          <span class="info-box-number"
                style="display: block;text-align: center;vertical-align: middle;padding-top:30px;">暂无奖品</span>
        </div>
        <div class="info-box-text">
          中奖小伙伴可到育才和雁山的迎新点领取奖品
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    name: 'jp',
    activated() {
      this.$http.get('myjp', {
        xh: this.uinfo.yb_studentid
      }).then((res) => {
        this.isJp = res.isJp
        this.info = res.info
      })
    },
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    },
    methods: {
      lq() {
        this.$createDialog({
          type: 'confirm',
          title: '领取提示',
          content: '确认要领取奖品吗？请到易班迎新点再领取哦！',
          icon: 'cubeic-alert',
          confirmBtn: {
            text: '立即领取',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '点错了',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            this.$http.get('myjp', {xh: this.uinfo.yb_studentid, yes: 1, tip: 1}).then((res) => {
              this.info = res.info
            })
          },
          onCancel: () => {
          }
        }).show()
      }
    },
    data() {
      return {
        isJp: '0',
        info: {
          'prize': null,
          'yes': null,
          'time': null
        }
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .jp
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #faf9f7
    z-index 200
</style>
