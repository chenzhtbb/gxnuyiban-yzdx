<template>
  <transition name="slide">
    <div class="bind-dean">
      <div class="input-box-wrapper">
        <div style="position: relative; height:180px;"></div>
        <div class="input-box">
          <i class="iconfont icon-renyuan icon-input"></i>
          <input class="box" placeholder="请输入教务处账号" v-model="bind.username">
          <i class="icon-dismiss"></i>
        </div>
        <div style="position: relative; height:10px;"></div>
        <div class="input-box">
          <i class="iconfont icon-renyuan icon-input"></i>
          <input class="box" placeholder="请输入教务处密码" type="password" v-model="bind.password">
          <i class="icon-dismiss"></i>
        </div>
        <div style="position: relative; height:30px;"></div>
        <div class="bind" @click="_bindDean()" v-if="!bind.dean">绑定</div>
        <div class="bind" style="background: #FF6666;" @click="_unbindConfirm()" v-else>解绑</div>
        <confirm-box ref="confirm" :text="text"></confirm-box>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  import InputBox from 'base/input-box/input-box'
  import ConfirmBox from 'base/confirm-box/confirm-box'
  import { bindUser } from 'api/dean'

  export default {
    components: {
      InputBox,
      ConfirmBox
    },
    data () {
      return {
        text: '确认解除教务处绑定吗？',
        bind: {username: '123', password: '', dean: 0}
      }
    },
    mounted () {
      setTimeout(() => {
        this._GetDean()
        this.$refs.confirm.$on('confirm', () => {
          this._unbindDean()
        })
      }, 20)
    },
    computed: {
      ...mapGetters([
        'binddean'
      ])
    },
    methods: {
      ...mapMutations({
        setBinddean: 'SET_BINDDEAN'
      }),
      _GetDean () {
        this.bind = this.binddean
        if (this.bind.dean === 1) {
          this.bind.password = 'abcdefghijklmnopqrstuvwxzy'
        }
      },
      _bindDean () {
        bindUser(1, this.bind.username, this.bind.password).then((res) => {
          if (res.code === 1) {
            this.bind.dean = 1
            this.setBinddean(this.bind)
            this.$router.replace('/me')
          } else {
            alert('error')
          }
        })
      },
      _unbindConfirm () {
        this.$refs.confirm.show()
      },
      _unbindDean () {
        bindUser(2).then((res) => {
          if (res.code === 1) {
            this.bind.dean = 0
            this.bind.username = this.bind.password = ''
            this.setBinddean(this.bind)
          } else {
            alert('error')
          }
        })
      }
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  input[disabled]
    background #FFFFFF
    opacity 1

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
      outline none
      -webkit-appearance none
      border-radius 0
      flex 1
      margin 0 5px
      line-height 18px
      border 0
      font-size 16px
      &::placeholder
        color #AAAAAA
    .icon-dismiss
      font-size 16px

  .bind-dean
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

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

</style>
