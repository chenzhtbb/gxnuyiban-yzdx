<template>
  <div class="bind-dorm">
    <div class="">
      <div class="form-horizontal center">
        <div class="box-body">
          <div class="form-group">
            <label class="col-xs-12 control-label">选择校区</label>
            <div class="col-xs-12">
              <cube-select
                :options="['雁山校区','育才校区','王城校区']"
                v-model="bind.campus" title="选择校区"
                placeholder="请选择校区"
                :disabled="bind.dorm === 1? true: false">
              </cube-select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-xs-12 control-label">选择宿舍</label>
            <div class="col-xs-12">
              <button
                class="form-control "
                @click="selectRoom">{{bind.room == '' ? '请选择宿舍' : bind.room}}
              </button>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <button class="btn btn-info btn-block" @click="_bindDorm()" v-if="!bind.dorm">绑定</button>
          <button class="btn btn-danger btn-block" @click="showAlert()" v-else>解绑</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        bind: {campus: '', room: '', dorm: 0}
      }
    },
    mounted () {
      setTimeout(() => {
        this.getDorm()
        this.lData = [{text: '楼号', value: '楼号'}]
        this.cData = [{text: '层数', value: '层数'}]
        this.fData = [{text: '房间号', value: '房间号'}]
        for (let i = 1; i < 100; i++) {
          this.lData.push({text: i, value: i})
        }
        for (let i = 1; i < 20; i++) {
          this.cData.push({text: i, value: i})
        }
        for (let i = 1; i < 100; i++) {
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
        if (this.bind.campus === '') {
          this.$createDialog(
            {
              type: 'alert',
              title: '校区或宿舍号为空'
            }
          ).show()
          return
        }
        this.$http.get('/bindDorm', {
          type: 1,
          campus: this.bind.campus,
          room: this.bind.room
        }).then((res) => {
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
        this.$http.get('/bindDorm', {
          type: 2,
          campus: '',
          room: ''
        }).then((res) => {
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
    bottom 0
    left 0
    right 0
    background #eeeeee

  .center
    position absolute
    top 50%
    left 0
    right 0
    transform translate(0, -50%)

</style>
