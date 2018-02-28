<template>
  <transition name="slide">
    <div class="publish">
      <scroll style="height: 100%;" :data="items" ref="scroll">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">信息发布</h3>
          </div>
          <!-- /.box-header -->
          <!-- div start -->
          <div class="form-horizontal">
            <div class="box-body">
              <div class="form-group">
                <label class="col-sm-2">发布类型</label>
                <div class="col-sm-10">
                  <select class="form-control">
                    <option>失物招领（找失主）</option>
                    <option>寻物启事（丢东西）</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">物品说明</label>
                <div class="col-sm-10">
                  <cube-input class="form-control" placeholder="物品说明"></cube-input>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">捡到地点</label>
                <div class="col-sm-10">
                  <cube-input class="form-control" placeholder="捡到地点"></cube-input>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">捡到时间</label>
                <div class="col-sm-10">
                  <cube-input class="form-control" placeholder="捡到时间"></cube-input>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">联系电话</label>
                <div class="col-sm-10">
                  <cube-input class="form-control" placeholder="联系电话"></cube-input>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">上传图片</label>
                <div class="col-sm-10">
                  <div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">补充说明</label>
                <div class="col-sm-10">
                  <cube-textarea class="form-control" rows="3" placeholder="补充说明 ..."></cube-textarea>
                </div>
              </div>
              <div class="box-footer">
                <button class="btn btn-default">取消</button>
                <button class="btn btn-info pull-right" @click="upload">发布</button>
              </div>
              <!-- /.box-footer -->
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import { Input } from 'cube-ui'

  export default {
    components: {
      Scroll,
      Input
    },
    methods: {
      filesAdded (files) {
        const maxSize = 1 * 1024 * 1024 // 1M
        for (let k in files) {
          const file = files[k]
          if (file.size > maxSize) {
            file.ignore = true
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(0, 100%, 0)

  .publish
    background #FFFFFF
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 50

  .box
    border-top 0
</style>
