<template>
  <transition name="slide">
    <div class="class-table">
      <scroll style="height: 100%; width: 100%;" :data="items" :freeScroll="isfreeScroll">
        <div>
          <table class="table">
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
            <tbody ref="tbody">
            <tr v-for="item in items">
              <th>{{item.num}}</th>
              <td v-for="class_ in item.class" :rowspan="class_.num" :class="class_.color">
                <div v-if="class_.isclass!='0'">
                  <p>{{class_.name}}</p>
                  <p>{{class_.room}}</p>
                  <p>第{{class_.start}}~{{class_.end}}节</p>
                  <p>{{class_.teacher}}</p>
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
    mounted () {
      this._getTimetable()
    },
    data () {
      return {
        items: [],
        isfreeScroll: true
      }
    },
    methods: {
      _getTimetable () {
        getTimetable().then((res) => {
          this.items = res
        })
        setTimeout(() => {
          this.children = this.$refs.tbody.children
          console.log(this.children.length)
          for (let i = 0; i < this.items.length; i++) {
            console.log(this.children[i].length)
          }
        }, 200)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .class-table
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

  th
    text-align center
    vertical-align middle

  td
    text-align center
    vertical-align middle
    padding 0
</style>
