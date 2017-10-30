<template>
  <transition name="slide">
    <div class="bind-dorm">
      <div class="input-box-wrapper">
        <div style="position: relative; height:180px;"></div>
        <div class="confirm-box">
          <i class="iconfont icon-renyuan" style="font-size: 24px;"></i>
          <input type="button" class="box" @click="showConfirm" v-model="bind.campus">
        </div>
        <div style="position: relative; height:10px;"></div>
        <div class="input-box">
          <i class="iconfont icon-renyuan icon-input"></i>
          <input class="box" placeholder="请输入宿舍号" v-model="bind.room">
          <i class="icon-dismiss"></i>
        </div>
        <div style="position: relative; height:30px;"></div>
        <div class="bind" v-if="!bind.dorm" @click="_bindDorm()">绑定</div>
        <div class="bind" style="background: #FF6666;" v-else @click="_unbindConfirm()">解绑</div>
        <select-box ref="select"></select-box>
        <confirm-box ref="confirm" :text="text"></confirm-box>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  import InputBox from 'base/input-box/input-box'
  import SelectBox from 'base/select-box/select-box'
  import ConfirmBox from 'base/confirm-box/confirm-box'
  import { bindDorm } from 'api/dorm'

  export default {
    components: {
      InputBox,
      SelectBox,
      ConfirmBox
    },
    data () {
      return {
        text: '确认解除宿舍绑定吗？',
        bind: {campus: '', room: '', dorm: 0}
      }
    },
    mounted () {
      setTimeout(() => {
        this._GetDorm()
        this.$refs.select.$on('select', (campus) => {
          this.bind.campus = campus
        })
        this.$refs.confirm.$on('confirm', () => {
          this._unbindorm()
        })
      }, 20)
    },
    computed: {
      ...mapGetters([
        'binddorm'
      ])
    },
    methods: {
      ...mapMutations({
        setBinddorm: 'SET_BINDDORM'
      }),
      _GetDorm () {
        this.bind = this.binddorm
        if (!this.bind.dorm) {
          this.bind.campus = '请选择校区'
        }
      },
      _bindDorm () {
        console.log(this.bind)
        bindDorm(1, this.bind.campus, this.bind.room).then((res) => {
          if (res.code === 1) {
            this.bind.dorm = 1
            this.setBinddorm(this.bind)
            this.$router.replace('/me')
          } else {
            alert('error')
          }
        })
      },
      _unbindConfirm () {
        this.$refs.confirm.show()
      },
      _unbindorm () {
        bindDorm(2).then((res) => {
          if (res.code === 1) {
            this.bind.dorm = 0
            this.bind.campus = '请选择校区'
            this.bind.room = ''
            this.setBinddorm(this.bind)
          } else {
            alert('error')
          }
        })
      },
      showConfirm () {
        if (this.dorm === 1) {
          return
        }
        this.$refs.select.show()
      }
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  input[type="button"]
    background-color #FFFFFF
    padding 0

  .bind-dorm
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    .input-box-wrapper
      position absolute
      right 20px
      left 20px
      .confirm-box
        display flex
        align-items center
        box-sizing border-box
        width 100%
        padding 6px 6px
        height 40px
        border-radius 6px
        background #FFFFFF
        .box
          text-align left
          width 100%
          margin 0 5px
          line-height 18px
          border 0
          outline none
          color #AAAAAA
          font 16px Arial
      .bind
        height 40px
        line-height 40px
        border-radius 6px
        margin auto auto
        border none
        color white
        text-align center
        text-decoration none
        font-size 20px
        overflow hidden
        background #00CCFF
        width 100%
        cursor pointer
        display: inline-block
        align-items center

  .input-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    padding 6px 6px
    height 40px
    border-radius 6px
    background #FFFFFF
    .icon-input
      font-size 24px
    .box
      flex 1
      margin 0 5px
      line-height 18px
      border 0
      outline none
      font-size 16px
      &::placeholder
        color #AAAAAA
    .icon-dismiss
      font-size 16px

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

</style>
