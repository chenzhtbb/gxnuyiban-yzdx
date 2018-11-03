<template>
  <div class="mine">
    <scroll style="height: 100%;" :data="[]">
      <div>
        <template v-for="(item,index) in items">
          <div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title">{{item.kcmc}}</h3>
              <div class="box-tools pull-right">
                <cube-button :inline="true" :outline="true" @click="del(item,index)">退课</cube-button>
              </div>
            </div>
            <div class="box-body">
              <div>
                <b>课程序号：</b>
                <div class="box-tools pull-right">{{item.kcxh}}</div>
              </div>
              <div>
                <b>课程学分：</b>
                <div class="box-tools pull-right">{{item.xf}}</div>
              </div>
              <div>
                <b>教师姓名：</b>
                <div class="box-tools pull-right">{{item.jsxm}}</div>
              </div>
              <div>
                <b>上课地点：</b>
                <div class="box-tools pull-right">{{item.xqh}}{{item.jsmc}}</div>
              </div>
              <div>
                <b>上课时间：</b>
                <div class="box-tools pull-right">第{{item.ksz}}-{{item.jsz}}周-周{{item.zc}}-第{{item.ksj}}-{{item.jsj}}节
                </div>
              </div>

            </div>
          </div>
        </template>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    data () {
      return {
        items: []
      }
    },
    methods: {
      del (item, index) {
        this.$http.get('/delCourse', {
          kcxh: item.kcxh
        }).then((res) => {
//          this.toast.hide()
          if (res.code === '200') {
            this.$createDialog({
              type: 'alert',
              title: '系统提示',
              content: item.kcmc + '退课成功',
              icon: 'cubeic-alert'
            }).show()
            this.items.splice(index, 1)
          } else {
            this.$createDialog({
              type: 'alert',
              title: '系统提示',
              content: item.kcmc + '退课失败',
              icon: 'cubeic-alert'
            }).show()
          }
        })
      }
    },
    activated () {
      setTimeout(() => {
        this.$http.get('/getMineCourse').then((res) => {
          this.items = res
        })
      }, 20)
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .mine
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
</style>
