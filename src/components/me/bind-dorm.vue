<template>
  <transition name="slide">
    <div class="bind-dorm">
      <div class="box box-info">
        <div class="box-header with-border">
          <h3 class="box-title">绑定宿舍号</h3>
        </div>
        <form class="form-horizontal">
          <div class="box-body">
            <div class="form-group col-sm-10">
              <label>选择校区</label>
              <select class="form-control" v-model="bind.campus">
                <option>雁山校区</option>
                <option>育才校区</option>
                <option>王城校区</option>
              </select>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">宿舍号</label>

              <div class="col-sm-10">
                <input class="form-control" placeholder="请输入宿舍号" v-model="bind.room">
              </div>
            </div>

          </div>
          <div class="box-footer col-sm-10">
            <button class="btn btn-info btn-block" @click="_bindDorm()" v-if="!bind.dorm">绑定</button>
            <button class="btn btn-danger btn-block" @click="_unbindConfirm()" v-else>解绑</button>
          </div>
        </form>
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

  export default {
    components: {
      InputBox,
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
            this.bind.campus = ''
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

  .bind-dorm
    position fixed
    top 0
    left 50%
    bottom 0
    width 100%
    z-index 100
    transform translate(-50%, 0%)


  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

</style>
