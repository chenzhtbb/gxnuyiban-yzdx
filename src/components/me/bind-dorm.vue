<template>
  <transition name="slide">
    <div class="bind-dorm">
      <div class="box box-info">
        <div class="box-header with-border">
          <h3 class="box-title">绑定宿舍号</h3>
        </div>
        <div class="form-horizontal">
          <div class="box-body">
            <div class="form-group col-sm-10">
              <label>选择校区</label>
              <button class="form-control" @click="selectCampus" >{{bind.campus}}</button>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">宿舍号</label>

              <div class="col-sm-10">
                <input class="form-control" placeholder="请输入宿舍号" v-model="bind.room">
              </div>
            </div>
            <span class="users-list-date">注：楼栋-楼层-房间号，例：46-7-722</span>
          </div>
          <div class="box-footer col-sm-10">
            <button class="btn btn-info btn-block" @click="_bindDorm()" v-if="!bind.dorm">绑定</button>
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
  import { bindDorm } from 'api/dorm'
  import { empty } from 'common/js/util'

  export default {
    components: {
      InputBox,
      ConfirmBox
    },
    data () {
      return {
        text: '确认解除宿舍绑定吗？',
        bind: {campus: '请选择校区', room: '', dorm: 0}
      }
    },
    mounted () {
      setTimeout(() => {
        this._GetDorm()
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
      selectCampus () {
        this.$iosAlertView({
          title: '选择您所在的校区',
          buttons: [
            {
              text: '雁山校区',
              onClick: () => {
                this.bind.campus = '雁山校区'
              }
            },
            {
              text: '育才校区',
              onClick: () => {
                this.bind.campus = '育才校区'
              }
            },
            {
              text: '王城校区',
              onClick: () => {
                this.bind.campus = '王城校区'
              }
            }
          ]

        })
      },
      _GetDorm () {
//        this.bind = this.binddorm
      },
      _bindDorm () {
        if (this.bind.campus === '请选择校区' || empty(this.bind.campus) || empty(this.bind.room)) {
          this.$iosAlert('校区或宿舍号为空')
          return
        }
        bindDorm(1, this.bind.campus, this.bind.room).then((res) => {
          if (res.code === 1) {
            this.bind.dorm = 1
            this.setBinddorm(this.bind)
            this.$router.go(-1)
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
            this.bind.campus = ''
            this.bind.room = ''
            this.setBinddorm(this.bind)
          } else {
            alert('error')
          }
        })
      }
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .bind-dorm
    position fixed
    top 0
    left 50%
    bottom 0
    width 100%
    z-index 100
    transform translate(-50%, 0%)
    background #eeeeee

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

</style>
