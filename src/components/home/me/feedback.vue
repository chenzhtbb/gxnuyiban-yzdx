<template>
  <div class="feedback">
    <scroll style="height: 100%;" :data="[]">
      <div>
        <div class="form-group">
          <label class="title">问题类型</label>
          <cube-select
            :options="['反馈BUG','提供意见','界面改进']"
            v-model="type"
            title="问题类型"
            placeholder="请选择">
          </cube-select>
        </div>
        <div class="form-group">
          <label class="title">问题和意见</label>
          <cube-textarea
            placeholder="献上您宝贵的意见，一同见证更好的易知独秀"
            v-model="content"
            maxlength="512"></cube-textarea>
        </div>
        <button class="btn btn-link">各位同学有任何诉求都可以加群：496962393 反馈哦~</button>
        <div class="col-xs-12">
          <button class="btn btn-success btn-block" @click="onFeedback">提交</button>
          <br>
          <button class="btn btn-danger btn-block" @click="gotoPop">返回</button>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    data () {
      return {
        type: '',
        content: ''
      }
    },
    methods: {
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
        if (!this.content) {
          this.$createDialog(
            {
              type: 'alert',
              title: '您还未填写反馈内容'
            }
          ).show()
          return
        }
        this.$http.post('/putFeedback', {
          type: this.type,
          content: this.content
        }).then((res) => {
          this.$createDialog(
            {
              type: 'alert',
              title: '提交反馈意见成功'
            }
          ).show()
          this.$router.go(-1)
        }).catch(() => {
          this.$createDialog(
            {
              type: 'alert',
              title: '提交反馈意见成功'
            }
          ).show()
          this.$router.go(-1)
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

  .title
    padding 5px
</style>
