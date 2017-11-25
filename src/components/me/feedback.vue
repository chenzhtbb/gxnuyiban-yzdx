<template>
  <toggle>
    <div class="feedback">
      <scroll style="height: 100%;">
        <div>
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">意见反馈</h3>
            </div>
            <div class="box-body">
              <div class="form-group has-success">
                <div class="form-group">
                  <label>反馈类别</label>
                  <select class="form-control" v-model="type">
                    <option>反馈BUG</option>
                    <option>提供意见</option>
                    <option>界面改进</option>
                  </select>
                  <span class="help-block">各位小伙伴一定要描述清楚问题哦，我们好马上解决！</span>
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
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Toggle from 'base/toggle/toggle'
  import { putFeedback } from 'api/user'

  export default {
    components: {
      Toggle,
      Scroll
    },
    methods: {
      onFeedback () {
        if (!this.type) {
          this.$iosAlert('请选择反馈的类别')
          return
        }
        if (!this.title) {
          this.$iosAlert('您还未填写反馈标题')
          return
        }
        if (!this.content) {
          this.$iosAlert('您还未填写反馈内容')
          return
        }
        putFeedback(this.type, this.title, this.content).then(res => {
          this.$iosAlert('提交反馈意见成功').then(() => {
            this.type = this.title = this.content = ''
            this.$router.go(-1)
          })
        }).catch(() => {
          this.$iosAlert('提交反馈意见失败，请重新提交')
        })
      },
      gotoPop () {
        this.$router.go(-1)
      }
    },
    data () {
      return {
        type: '',
        title: '',
        content: ''
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
