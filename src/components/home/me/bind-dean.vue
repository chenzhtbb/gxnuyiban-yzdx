<template>
  <div class="bind-dean">
    <div class="form-horizontal center">
      <div class="box-body">
        <div class="form-group">
          <label class="col-xs-12 control-label">教务处账号</label>
          <div class="col-xs-12">
            <cube-input
              v-model="uinfo.yb_studentid"
              :disabled="true"
              placeholder="学号"></cube-input>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-12 control-label">教务处密码</label>
          <div class="col-xs-12">
            <cube-input
              v-model="password"
              :disabled="bind.dean === 1? true: false"
              placeholder="选课密码"
              type="password"
              :clearable="true"></cube-input>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <button class="btn btn-bind btn-block" @click="bindDean()" v-if="!bind">绑定</button>
        <button class="btn btn-danger btn-block" @click="showAlert()" v-else>解绑</button>
      </div>
      <button class="btn btn-link" @click="tip">绑定遇到问题？</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
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
      tip () {
        this.$createActionSheet({
          data: [
            {
              content: '重置密码(Alpha)'
            },
            {
              content: '点击绑定无反应'
            },
            {
              content: '联系我们'
            }
          ],
          onSelect: (item, index) => {
            if (index === 0) {
              this.$createDialog({
                type: 'confirm',
                icon: 'cubeic-danger',
                title: '重置密码',
                content: '本功能正在测试中，用户无法使用',
                // content: `您即将重置 ${this.uinfo.yb_studentid} 的教务处密码，重置后密码为身份证后6位（字母小写）`,
                confirmBtn: {
                  text: '重置',
                  active: true,
                  disabled: false,
                  href: 'javascript:;'
                },
                cancelBtn: {
                  text: '取消',
                  active: false,
                  disabled: false,
                  href: 'javascript:;'
                },
                onConfirm: () => {
                  this.$createToast({
                    type: 'warn',
                    time: 1000,
                    txt: '点击确认按钮'
                  }).show()
                }
              }).show()
            } else if (index === 1) {
              window.location.href = 'tencent://message/?uin=693304134&Site=lalala&Menu=yes'
            } else if (index === 2) {
              window.location.href = 'tencent://message/?uin=693304134&Site=lalala&Menu=yes'
            }
          }
        }).show()
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
        this.$http.get('/bindDean', {
          type: 1,
          password: this.password
        }).then((res) => {
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
        this.$http.get('/bindDean', {
          type: 2,
          password: ''
        }).then((res) => {
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

  .btn-link
    position relative
    top 12px

  .bind-dean
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background #EEEEEE

  .center
    position absolute
    top 50%
    left 0
    right 0
    transform translate(0, -50%)

  .btn-bind
    background-color: #FF9900
    border-color: #FF9900
    color: #FFFFFF


</style>
