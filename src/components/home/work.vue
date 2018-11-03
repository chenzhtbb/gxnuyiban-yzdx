<template>
  <div class="work">
    <template v-if="true">
      <div style="position: fixed;left: 0;right: 0;z-index: 9">
        <el-row class="border-b">
          <el-col :span="3">
            <div style="text-align: center;padding: 7.6px;background: #fff;border-right: 1px #ddd solid">
              <router-link to="link.teacher">
                <i class="iconfont icon-qiehuanjiaose" style="font-size: 25px"></i>
              </router-link>
            </div>
          </el-col>
          <el-col :span="21" style="padding: 0 5px;background: #fff;">
            <cube-scroll-nav-bar :current="bar.current" :labels="bar.labels" :txts="bar.txts" @change="changeHandler"/>
          </el-col>
        </el-row>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </template>
    <template v-else>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'work',
    activated() {
      setTimeout(() => {
        window.location.href = 'http://localhost:3000'
      }, 20)
      console.log(123)
      // this.$router.push({name: this.bar.current})
    },
    methods: {
      changeHandler(url) {
        this.bar.current = url
        url = '/home/work/' + url
        this.$router.push(url)
      }
    },
    data() {
      return {
        link: {
          msg: '/app/msg',
          student: '/home/work/student/leave'
        },
        bar: {
          current: 'leave',
          labels: [
            'leave',
            'dorm',
            'zm',
            'yy'
          ],
          txts: [
            '请 / 销假',
            '外宿管理',
            '证明开具',
            '校医预约'
          ]
        },
        bar1: {
          current: 'dorm2',
          labels: [
            'dorm2',
            'attend',
            'leave1',
            'leave2',
            'dorm1',
            'dorm2',
            'dorm2'
          ],
          txts: [
            '我的班级',
            '日常点名',
            '请假管理',
            '请假管理（院）',
            '外宿管理',
            '外宿管理（院）',
            '证明审核'
          ]
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .work
    background #faf9f7
</style>
