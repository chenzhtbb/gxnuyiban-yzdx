<template>
  <div class="class-table">
    <cube-scroll :data="items">
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
            <td v-for="class_ in item.class "
                :rowspan="class_.end - class_.start + 1"
                :class="class_.length > 1? 'danger':class_.color"
                class="background"
            >
              <template v-if="class_.isclass!='0'">
                <template v-if="!class_.length">
                  <p>{{class_.name}}</p>
                  <p>{{class_.room}}</p>
                  <p>第{{class_.start}}~{{class_.end}}节</p>
                  <p>{{class_.teacher}}</p>
                </template>
                <template v-else>
                  <template v-for="cl in class_[0]">
                    <p>{{cl.name}}</p>
                    <p>{{cl.room}}</p>
                    <p>第{{cl.start}}~{{cl.end}}节</p>
                    <p>{{cl.teacher}}</p>
                  </template>
                </template>
              </template>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
        this.$http.get('/getTimetable').then((res) => {
          this.items = res
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .background
    border 1px solid #FFF
    p
      margin 1px

  .table-class
    width 100%
    background-color #EEEEEE

  .cube-scroll-wrapper
    background-color #EEEEEE

  .class-table
    position fixed
    width 100%
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    /*background-image url('~common/image/1c264fdfff5081e1f279a3fb643b00f3.png')*/
    background-repeat repeat-y
    background-size 100%

  th
    text-align center
    vertical-align middle !important
    font-size 12px
    border 1px solid #FFF
    height 100%

  td
    text-align center
    vertical-align middle !important
    padding 0
    font-size 12px

  tr
    border 0
</style>
