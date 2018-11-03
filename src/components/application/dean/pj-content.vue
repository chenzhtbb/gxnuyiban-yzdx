<template>
  <div class="pj">
    <scroll :data="items" style="height: 100%">
      <div class="box box-widget widget-user">
        <div v-for="item in items">
          <div class="box-header">{{item.title}}</div>
          <div class="box-body">
            <ul class="nav nav-stacked">
              <li v-for="group in item.group">
                <p>{{group.t}}</p>
                <div class="form-group">
                  <select class="form-control" v-model="group.s">
                    <option value="1">优秀</option>
                    <option value="2">良好</option>
                    <option value="3">中等</option>
                    <option value="4">及格</option>
                    <option value="5">不及格</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-body">
          <div class="form-group">
            <label class="control-label">优点</label>
            <textarea rows="3" class="form-control" placeholder="字符限制在50个以内" v-model="yd"></textarea>
          </div>
          <div class="form-group">
            <label class="control-label">不足</label>
            <textarea rows="3" class="form-control" placeholder="字符限制在50个以内" v-model="qd"></textarea>
          </div>
          <div class="form-group">
            <label class="control-label">在教学方面，你最想对该门任课教师说的一句话是</label>
            <textarea rows="2" class="form-control" placeholder="字符限制在50个以内" v-model="yi"></textarea>
          </div>
          <button class="btn btn-success btn-block" @click="putJXPG()">提交</button>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  //  import { putJxpgInfo } from 'api/dean'

  export default {
    components: {
      Scroll
    },
    data () {
      return {
        kch: '',
        items: [
          {
            title: '教学态度',
            group: [
              {t: '教学认真负责，关心学生思想和学业的提高', s: 1},
              {t: '认真辅导和批改作业，重视教学反馈，注意总结改进教学工作', s: 1}
            ]
          },
          {
            title: '教学内容',
            group: [
              {t: '基本概念、理论、原理讲解清楚', s: 1},
              {t: '理论联系实际，注意同生产、社会、中学等实际结合', s: 1},
              {t: '不断充实更新教学内容', s: 1}
            ]
          },
          {
            title: '教学方法',
            group: [
              {t: '讲授重点突出，难点讲清，条理清楚（实验课：实验技能熟练，方法得当）', s: 1},
              {t: '教学方式多样，并重视实践性教学环节的教学', s: 1},
              {t: '板书设计好，语言清晰（体育、美术：示范、动作技术要领正确）', s: 1}
            ]
          },
          {
            title: '教学效果',
            group: [
              {t: '认真学习后对本课的要求基本掌握，并能理解和解决一些实际问题', s: 1},
              {t: '从教学过程中同学的学习积极性、兴趣、热情和纪律来评价效果', s: 1}
            ]
          }

        ],
        yd: '',
        qd: '',
        yi: ''
      }
    },
    create () {
    },
    methods: {
      showAlert (text) {
        this.$createDialog({
          type: 'alert',
          content: text,
          icon: 'cubeic-alert'
        }).show()
      },
      putJXPG () {
        if (this.yd.length < 5) {
          this.showAlert('优点不能少于5个字！')
          return
        } else if (this.qd.length < 5) {
          this.showAlert('缺点不能少于5个字！')
          return
        } else if (this.yi.length < 5) {
          this.showAlert('最想说的一句话不能少于5个字！')
          return
        }
        if (this.yd.length > 50) {
          this.showAlert('优点字符已超过50，请重新输入！')
          return
        } else if (this.qd.length > 50) {
          this.showAlert('缺点字符已超过50，请重新输入！')
          return
        } else if (this.yi.length > 50) {
          this.showAlert('最想说的一句话字符已超过50，请重新输入！')
          return
        }
        let cj = []
        for (let i in this.items) {
          for (let j in this.items[i].group) {
            cj.push(this.items[i].group[j].s)
          }
        }
        this.kch = this.$route.query.kch
        this.$http.post('/putJxpgInfo', {
          'kch': this.kch,
          'cj1': cj[0],
          'cj2': cj[1],
          'cj3': cj[2],
          'cj4': cj[3],
          'cj5': cj[4],
          'cj6': cj[5],
          'cj7': cj[6],
          'cj8': cj[7],
          'cj9': cj[8],
          'cj10': cj[9],
          'yd': this.yd,
          'qd': this.qd,
          'yi': this.yi
        }).then((res) => {
//          console.log(res)
          this.showAlert('评教成功！')
          this.$router.go(-1)
        })
//        putJxpgInfo(this.kch, cj[0], cj[1], cj[2], cj[3], cj[4], cj[5], cj[6], cj[7], cj[8], cj[9], this.yd, this.qd, this.yi)
//
//        console.log(cj, this.yd, this.qd, this.yi)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .pj
    position fixed
    height 100%
</style>
