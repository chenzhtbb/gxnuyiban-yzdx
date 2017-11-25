<template>
  <transition name="slide">
    <div class="bind-dean">
      <div class="box box-info">
        <div class="box-header with-border">
          <h3>绑定教务处</h3>
        </div>
        <div class="form-horizontal">
          <div class="box-body">
            <div class="form-group">
              <label class="col-sm-2 control-label">教务处账号</label>
              <div class="col-sm-10">
                <input class="form-control" placeholder="请输入教务处账号(学号)" v-model="bind.username">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">教务处密码</label>

              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="请输入选课密码，默认身份证后6位" v-model="bind.password">
              </div>
            </div>
            <span class="users-list-date">选课密码忘记了可以找辅导员帮忙重置哦~</span>
            <span class="users-list-date">注：修改教务处密码后需要重新绑定哦~</span>
          </div>
          <div class="box-footer col-sm-10">
            <button class="btn btn-info btn-block" @click="_bindDean()" v-if="!bind.dean">绑定</button>
            <button class="btn btn-danger btn-block" @click="_unbindConfirm()" v-else>解绑</button>
          </div>
        </div>
      </div>
      <confirm-box ref="confirm" :text="text"></confirm-box>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  import InputBox from 'base/input-box/input-box'
  import ConfirmBox from 'base/confirm-box/confirm-box'
  import { bindUser } from 'api/dean'
  import { empty } from 'common/js/util'

  export default {
    components: {
      InputBox,
      ConfirmBox
    },
    data () {
      return {
        text: '确认解除教务处绑定吗？',
        bind: {username: '', password: '', dean: 0}
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
        if (empty(this.bind.username) || empty(this.bind.password)) {
          this.$iosAlert('教务处账号或密码为空')
          return
        }
        bindUser(1, this.bind.username, this.bind.password).then((res) => {
          if (res.code === 1) {
            this.bind.dean = 1
            this.setBinddean(this.bind)
            this.$router.go(-1)
          } else {
            this.bind.username = this.bind.password = ''
            this.$iosAlert('教务处账号或密码错误')
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

  .bind-dean
    position fixed
    top 0
    left 50%
    bottom 0
    width 100%
    z-index 100
    background #eeeeee
    transform translate(-50%, 0%)

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

</style>
