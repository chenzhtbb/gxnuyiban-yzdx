<template>
  <div class="sycx">
    <p class="box-info">名字不分先后，顺序不涉及床位</p>
    <p class="box-info">宿舍：{{sy[0].lou}}{{sy[0].room}}</p>
    <p class="box-info">点击QQ或微信号即可复制</p>
    <template v-for="item in sy">
      <div class="box-info">
        <div class="box-note">舍友：</div>
        <div class="box-note">{{item.name}}({{item.stu}})</div>
      </div>
      <div class="box-info">
        <div class="box-note">QQ或微信号：</div>
        <a class="box-note" style="color: #0099FF;" @click="copy(item.qq)">{{item.qq ? item.qq : '未填写'}}</a>
      </div>
    </template>
    <cube-button primary style="flex: 1;text-align: center;" @click="wqq">录入QQ或微信</cube-button>
    <input ref="contents" v-model="copytxt" style="position: absolute;top: -100%;left: -100%;"/>
  </div>
</template>

<script>
  export default {
    methods: {
      wqq() {
        this.$createDialog({
          type: 'confirm',
          confirmBtn: {
            text: '提交',
            active: true,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            console.log(this.$refs.qq)
          }
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title': true
              },
              slot: 'title'
            }, [
              createElement('div', {
                'class': {
                  'my-title-img': true
                }
              }),
              createElement('p', '填写QQ或微信')
            ]),
            createElement('cube-input', {
              slot: 'content',
              $ref: 'qq'
            })
          ]
        }).show()
      },
      copy(val) {
        if (val) {
          this.copytxt = val
        } else {
          this.copytxt = '未填写'
        }
        this.$refs.contents.select()
        setTimeout(() => {
          this.$refs.contents.select()
          if (document.execCommand('Copy')) {
            alert('复制成功')
          } else {
            alert('复制失败')
          }
        }, 20)
      }
    },
    data() {
      return {
        qq: '',
        copytxt: '',
        sy: [
          {name: '廖怡晖', qq: '693304134', stu: '123', lou: '雁山14栋', room: '408'},
          {name: '范维聪', qq: '1', stu: '123'},
          {name: '陈颖奇', qq: '1', stu: '123'},
          {name: '邱志良', qq: '1', stu: '123'},
          {name: '宁绍山', qq: '1', stu: '123'},
          {name: '卢敏', qq: '', stu: '123'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .sycx
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    padding 15px
    background #faf9f7

  .box-info
    display flex
    margin 10px
    font-size 14px
    height 16px
    align-items center
    justify-content space-between
    .box-note
      color #606266
</style>
