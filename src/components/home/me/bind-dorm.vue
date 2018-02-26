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
              <button class="form-control" @click="selectCampus">{{bind.campus == '' ? '请选择校区' : bind.campus}}</button>
            </div>
            <div class="form-group col-sm-10">
              <label>选择宿舍</label>
              <button class="form-control" @click="selectRoom">{{bind.room == '' ? '请选择宿舍' : bind.room}}</button>
            </div>
          </div>
          <div class="box-footer col-sm-10">
            <button class="btn btn-info btn-block" @click="_bindDorm()" v-if="!bind.dorm">绑定</button>
            <button class="btn btn-danger btn-block" @click="showAlert()" v-else>解绑</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  import { bindDorm } from 'api/me'
  import { empty } from 'common/js/util'

  export default {
    data () {
      return {
        bind: {campus: '', room: '', dorm: 0}
      }
    },
    mounted () {
      setTimeout(() => {
        this.getDorm()
        this.campusData = [{text: '雁山校区', value: '雁山校区'}, {text: '育才校区', value: '育才校区'}, {text: '王城校区', value: '王城校区'}]
        this.campusIndex = [0]
        this.lData = [{text: '楼号', value: '楼号'}]
        this.cData = [{text: '层数', value: '层数'}]
        this.fData = [{text: '房间号', value: '房间号'}]
        for (let i = 1; i < 100; i++) {
          this.lData.push({text: i, value: i})
        }
        for (let i = 1; i < 7; i++) {
          this.cData.push({text: i, value: i})
        }
        for (let i = 1; i < 30; i++) {
          this.fData.push({text: i, value: i})
        }
        this.roomIndex = [1, 1, 1]
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
      getDorm () {
        this.bind = this.binddorm
      },
      selectCampus () {
        this.$createPicker({
          title: '选择您所在的校区',
          data: [this.campusData],
          selectedIndex: this.campusIndex,
          onSelect: (selectedVal, selectedIndex) => {
            this.bind.campus = selectedVal[0]
            this.campusIndex = selectedIndex
          },
          onCancel: () => {
          }
        }).show()
      },
      selectRoom () {
        this.$createPicker({
          title: '选择您所在的宿舍',
          data: [this.lData, this.cData, this.fData],
          selectedIndex: this.roomIndex,
          onSelect: (selectedVal, selectedIndex) => {
            for (let i = 0; i < 3; i++) {
              if (selectedIndex[i] === 0) {
                return
              }
            }
            this.bind.room = `${selectedVal[0]}-${selectedVal[1]}-${selectedVal[2]}`
            this.roomIndex = selectedIndex
          },
          onCancel: () => {
          }
        }).show()
      },
      _bindDorm () {
        if (this.bind.campus === '请选择校区' || empty(this.bind.campus) || empty(this.bind.room)) {
          this.$createDialog(
            {
              type: 'alert',
              title: '校区或宿舍号为空'
            }
          ).show()
          return
        }
        bindDorm(1, this.bind.campus, this.bind.room).then((res) => {
          if (res.code === 0) {
            this.bind.dorm = 1
            this.setBinddorm(this.bind)
            this.$router.go(-1)
          } else {
            alert('error')
          }
        })
      },
      showAlert () {
        this.$createDialog(
          {
            type: 'confirm',
            title: '解绑提示',
            content: '确认解除宿舍绑定吗？',
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
              this._unbindorm()
            },
            onCancel: () => {
            }
          }
        ).show()
      },
      _unbindorm () {
        bindDorm(2).then((res) => {
          if (res.code === 0) {
            this.bind.dorm = 0
            this.bind.campus = '请选择校区'
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
