<template>
  <div class="zfcx">
    <scroll :data="items" style="height: 100%">
      <div>
        <template v-for="item in items" class="col-xs-12">
          <div class="info-box bg-aqua">
            <span class="info-box-icon"><i class="iconfont icon-zizhujiaofei"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">{{item.ItemName}}</span>
              <span class="info-box-number">已收:￥{{item.RealAmount}}&nbsp;&nbsp;欠费:￥{{item.OweAmount}}</span>
              <span class="progress-description">
                学年:{{item.ChargeYear}}&nbsp;&nbsp;&nbsp;&nbsp;日期:{{item.ChargeDate}}
              </span>
              <span class="progress-description">
                应收:￥{{item.ShouldAmount}}&nbsp;&nbsp;&nbsp;&nbsp;减免:￥{{item.ReduceAmount}}
              </span>
            </div>
          </div>
        </template>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    mounted () {
      this.$nextTick(
        this.getCharge()
      )
    },
    data () {
      return {
        items: []
      }
    },
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    },
    methods: {
      getCharge () {
        this.$http.get('/getCharge', {
          studentId: this.uinfo.yb_studentid
        }).then((res) => {
          this.items = res
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .zfcx
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background #EEEEEE

  .iconfont
    font-size 48px

  .info-box-icon
    height 95px

</style>
