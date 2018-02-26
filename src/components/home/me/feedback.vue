<template>
  <div class="feedback">
    <scroll style="height: 100%;" :data="[]">
      <div>
        <div class="box box-success">
          <div class="box-header with-border">
            <h3 class="box-title">意见反馈</h3>
          </div>
          <div class="box-body">
            <div class="form-group has-success">
              <div class="form-group">
                <label>反馈类别</label>
                <button class="form-control" @click="selectType">{{type == '' ? '请选择反馈类别' : type}}</button>
                <span class="help-block">各位小伙伴一定要描述清楚问题哦，方便我们解决问题！</span>
              </div>
            </div>
            <div class="form-group has-success">
              <label class="control-label">反馈标题</label>
              <input class="form-control" placeholder="反馈标题 ..." v-model="title">
            </div>
            <div class="form-group has-success">
              <label class="control-label">反馈内容</label>
              <textarea rows="11" class="form-control" placeholder="反馈内容 ..." v-model="content"></textarea>
            </div>
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button class="btn btn-success btn-block" @click="onFeedback">提交</button>
            <br>
            <button class="btn btn-warning btn-block" @click="gotoPop">返回</button>
          </div>
          <!-- /.box-footer -->
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import { putFeedback } from 'api/me'

  export default {
    components: {
      Scroll
    },
    data () {
      return {
        type: '',
        title: '',
        content: ''
      }
    },
    mounted () {
      setTimeout(() => {
        this.colData = [{text: '反馈BUG', value: '反馈BUG'}, {text: '提供意见', value: '提供意见'}, {text: '界面改进', value: '界面改进'}]
        this.typeIndex = [0]
      }, 20)
    },
    methods: {
      selectType () {
        this.$createPicker({
          title: '请选择反馈类别',
          data: [this.colData],
          selectedIndex: this.typeIndex,
          onSelect: (selectedVal, selectedIndex) => {
            this.type = selectedVal[0]
            this.typeIndex = selectedIndex
          },
          onCancel: () => {
          }
        }, true).show()
      },
      onFeedback () {
        if (!this.type) {
          this.$createDialog(
            {
              type: 'alert',
              title: '请选择反馈的类别'
            }
          ).show()
          return
        }
        if (!this.title) {
          this.$createDialog(
            {
              type: 'alert',
              title: '您还未填写反馈标题'
            }
          ).show()
          return
        }
        if (!this.content) {
          this.$createDialog(
            {
              type: 'alert',
              title: '您还未填写反馈内容'
            }
          ).show()
          return
        }
        putFeedback(this.type, this.title, this.content).then(res => {
          this.$iosAlert('提交反馈意见成功').then(() => {
            this.type = this.title = this.content = ''
            this.$router.go(-1)
          })
        }).catch(() => {
          this.$createDialog(
            {
              type: 'alert',
              title: '提交反馈意见失败，请重新提交'
            }
          ).show()
        })
      },
      gotoPop () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .feedback
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
</style>
