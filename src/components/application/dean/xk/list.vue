<template>
  <div class="list">
    <scroll style="height: 100%;" :data="[]">
      <div>
        <template v-for="item in items">
          <div class="box box-warning">
            <div class="box-header with-border">
              <h3 class="box-title">{{item.kcmc}}</h3>
              <div class="box-tools pull-right">
                <cube-button :inline="true" :outline="true" @click="sel(item)">选课</cube-button>
              </div>
            </div>
            <div class="box-body">
              <div>
                <b>课程序号：</b>
                <div class="box-tools pull-right">{{item.kcxh}}</div>
              </div>
              <div>
                <b>课程学分：</b>
                <div class="box-tools pull-right">{{item.zxf}}</div>
              </div>
              <div>
                <b>教师姓名：</b>
                <div class="box-tools pull-right">{{item.jsxms}}</div>
              </div>
              <div>
                <b>上课校区：</b>
                <div class="box-tools pull-right">{{item.xqh}}</div>
              </div>
              <template v-for="(info,index) in item.info">
                <div>
                  <b>安排{{index + 1}}：</b>
                  <div class="box-tools pull-right">
                    第{{info.ksz}}-{{info.jsz}}周&nbsp;&nbsp;周{{info.zc}}&nbsp;&nbsp;第{{info.ksj}}-{{info.jsj}}节&nbsp;&nbsp;{{info.jsmc}}
                  </div>
                </div>
              </template>
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
      showToastTime0 () {
        this.toast = this.$createToast({
          time: 0,
          txt: '正在选课选课系统...',
          mask: true
        })
        this.toast.show()
      },
      sel (item) {
//        this.showToastTime0()
        this.$http.get('/selCourse', {
          kcxh: item.kcxh
        }).then((res) => {
//          this.toast.hide()
          if (res.code === '200') {
            this.$createDialog({
              type: 'alert',
              title: '系统提示',
              content: item.kcmc + '选课成功',
              icon: 'cubeic-alert'
            }).show()
          } else {
            this.$createDialog({
              type: 'alert',
              title: '系统提示',
              content: item.kcmc + '选课失败',
              icon: 'cubeic-alert'
            }).show()
          }
        })
      }
    },
    activated () {
      this.$http.get('/getCourseList', {
        type: this.$route.query.type
      }).then((res) => {
        this.items = res
      })
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .list
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
</style>
