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
                <input class="form-control" placeholder="请输入学号" v-model="uinfo.yb_studentid" disabled>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">教务处密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="请输入选课密码" v-model="password">
              </div>
            </div>
            <span class="users-list-date">需要帮助请联系校易班工作站</span>

          </div>
          <div class="box-footer col-sm-10">
            <button class="btn btn-info btn-block" @click="bindDean()" v-if="!bind">绑定</button>
            <button class="btn btn-danger btn-block" @click="showAlert()" v-else>解绑</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  import { bindDean } from 'api/dean'
  import { empty } from 'common/js/util'

  export default {
    data () {
      return {
        password: '',
        bind: 0
      }
    },
    mounted () {
      setTimeout(() => {
        this.getDean()
      }, 20)
    },
    computed: {
      ...mapGetters([
        'binddean',
        'uinfo'
      ])
    },
    methods: {
      ...mapMutations({
        setBinddean: 'SET_BINDDEAN'
      }),
      getDean () {
        this.bind = this.binddean
        if (this.bind) {
          this.password = 'abcdefghijklmnopqrstuvwxzy'
        }
      },
      bindDean () {
        if (empty(this.password)) {
          this.$createDialog(
            {
              type: 'alert',
              title: '密码为空'
            }
          ).show()
          return
        }
        bindDean(1, this.password).then((res) => {
          if (res.code === 0) {
            this.bind = 1
            this.setBinddean(this.bind)
            this.$router.go(-1)
          } else {
            this.password = ''
            this.setBinddean(this.bind)
            this.$createDialog(
              {
                type: 'alert',
                title: '密码错误'
              }
            ).show()
          }
        })
      },
      showAlert () {
        this.$createDialog(
          {
            type: 'confirm',
            title: '解绑提示',
            content: '是否解除教务处绑定？',
            icon: 'cubeic-alert',
            confirmBtn: {
              text: '立即解除',
              active: true,
              disabled: false,
              href: 'javascript:;'
            },
            cancelBtn: {
              text: '稍后再说',
              active: false,
              disabled: false,
              href: 'javascript:;'
            },
            onConfirm: () => {
              this.unbindDean()
            },
            onCancel: () => {
            }
          }
        ).show()
      },
      unbindDean () {
        bindDean(2, null).then((res) => {
          if (res.code === 0) {
            this.bind = 0
            this.password = ''
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
