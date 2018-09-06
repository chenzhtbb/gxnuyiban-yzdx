<template>
  <div class="jp">
    <div>
      <div>
        <img src="./zjjlbg.png" style="width: 100%;">
        <h3 style="text-align: center;">摇一摇中奖记录</h3>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box" v-if="cj.status">
          <span class="info-box-icon bg-red"><i class="iconfont icon-jiangpin1" style="font-size: 48px;"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">{{cj.time}}</span>
            <span class="info-box-number">{{cj.info}}</span>
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
  export default {
    name: 'jp',
    data() {
      return {
        cj: {
          status: true,
          info: '易班熊',
          time: '2018-9-6 16:46:16'
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
