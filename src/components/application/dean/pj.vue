<template>
  <div class="box box-widget widget-user pj">
    <scroll :data="items" style="height: 100%">
      <div>
        <div class="widget-user-header bg-black bg-orange">
          <h3 class="username">欢迎使用易班评教</h3>
          <!--<h5 class="desc">{{user.yb_schoolname}}</h5>-->
        </div>
        <div class="box-footer no-padding">
          <ul class="nav nav-stacked">
            <li>
              <router-link tag="a" to="/app/pjcontent">
                评教须知
              </router-link>
            </li>
            <div style="margin:10px;font-weight: 400;color: #337ab7;">若课程没有显示，请检查绑定的教务处密码是否正确。选课高峰时期该功能关闭！</div>
            <li v-for="item in items">
              <a @click="goto(item)">
                {{item.kcmc}}
                <span class="pull-right badge bg-blue" v-if="item.pjzt == '已评'">已评教</span>
                <span class="pull-right badge bg-green" v-else>未评教</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
//  import { getJxpgList } from 'api/dean'
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    methods: {
      goto (item) {
        if (item.pjzt === '已评') {
//          this.$iosAlert('您已对该课程评教~')
//          return
        }
        this.$router.push({path: '/app/dean/pjcontent', query: {kch: item.kch}})
      }
    },
    data () {
      return {
        items: []
      }
    },
    activated () {
      setTimeout(() => {
        this.$http.get('/getJxpgList').then((res) => {
          this.items = res
        })
      }, 20)
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .pj
    position fixed
    height 100%
</style>
