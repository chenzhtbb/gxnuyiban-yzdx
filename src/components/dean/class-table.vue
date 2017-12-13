<template>
  <transition name="slide">
    <div class="class-table">
      <!--<table class="table table-head">-->
      <!---->
      <!--</table>-->
      <scroll style="height: 100%; width: 100%;" :data="items">
        <div>
          <table class="table table-class" frame="void" rules="none">
            <thead>
            <tr>
              <th>节次</th>
              <th>周一</th>
              <th>周二</th>
              <th>周三</th>
              <th>周四</th>
              <th>周五</th>
              <th>周六</th>
              <th>周日</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in items">
              <th>{{item.num}}</th>
              <td v-for="class_ in item.class"
                  :rowspan="class_.num"
                  :class="class_.length > 1? 'danger'
                  :class_.color">
                <div v-if="class_.isclass!='0'">
                  <div v-if="!class_.length">
                    <p>{{class_.name}}</p>
                    <p>{{class_.room}}</p>
                    <p>第{{class_.start}}~{{class_.end}}节</p>
                    <p>{{class_.teacher}}</p>
                  </div>
                  <div v-else>
                    <div v-for="cl in class_[0]">
                      <p>{{cl.name}}</p>
                      <p>{{cl.room}}</p>
                      <p>第{{cl.start}}~{{cl.end}}节</p>
                      <p>{{cl.teacher}}</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { getTimetable } from 'api/dean'
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    activated () {
      this._getTimetable()
    },
    data () {
      return {
        items: []
      }
    },
    methods: {
      _getTimetable () {
        getTimetable().then((res) => {
          this.items = res
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .table-class
    width 100%

  .class-table
    position fixed
    width 100%
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background-color #EEEEEE
    background-image url('~common/image/1c264fdfff5081e1f279a3fb643b00f3.png')
    background-repeat repeat-y
    background-size 100%

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

  th
    text-align center
    vertical-align middle
    font-size 12px

  td
    text-align center
    vertical-align middle
    padding 0
    font-size 12px

  tr
    border 0
</style>
