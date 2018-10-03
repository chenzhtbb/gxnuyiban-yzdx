<template>
  <div class="attend">
    <div class="p-2">
      <cube-slide :auto-play="false" ref="slide" :data="tasks" style="overflow: hidden">
        <cube-slide-item v-for="(item, index) in tasks" :key="index">
          <el-card shadow="never" style="padding: 20px 0">
            <el-progress type="circle" :percentage="item.classTask.length/classes.length*100"></el-progress>
            <div style="padding-top: 10px">
              <div>{{item.begin}} 至 {{item.end}}</div>
              <div style="padding-top: 5px">
                <el-button-group>
                  <el-button size="medium" round>
                    <router-link :to="link.choose+item.key">选择考勤</router-link>
                  </el-button>
                  <el-button size="medium" round>
                    <router-link :to="link.detail+item.key">查看详情</router-link>
                  </el-button>
                </el-button-group>
              </div>
            </div>
          </el-card>
        </cube-slide-item>
      </cube-slide>
    </div>
    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" style="border-left: 5px solid #67C23A;padding-left: 12px">考勤班级</div>
      <div v-if="1>0">
        <el-row v-for="(item, index) in classes" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="22">
            <div @click="showActive(item.class_uid)">
              {{item.class_name}}<br>
              <div class="card-type">
                {{item.college_name}}<br>
                类型： {{item.class_type}}<br>
                人数：{{item.class_num}}人<br>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div v-else class="empty-data">暂无数据</div>
    </el-card>
  </div>
</template>

<script>
  // import {resData} from '~/pages/service/tool'

  export default {
    data() {
      return {
        tasks: [],
        classes: [],
        link: {
          choose: '/app/teacher/attend/choose/',
          detail: '/app/teacher/attend/detail/'
        }
      }
    },
    mounted() {
      this.$http.get('dms/teacher', {
        method: 'selAttendTask',
        data: {}
      }).then((res) => {
        // this.tasks = resData(res)
      })
      this.$http.get('dms/teacher', {
        method: 'selClass',
        data: {}
      }).then((res) => {
        // this.classes = resData(res)
        console.log(this.classes)
      })
    },

    methods: {
      showActive(data) {
        this.$createActionSheet({
          active: 0,
          data: [
            {
              content: '开始考勤'
            },
            {
              content: '历史记录'
            }
          ],
          onSelect: (item, index) => {
            const url = (index === 0) ? 'form/' + data : 'history/' + data
            this.$router.push('/app/teacher/attend/' + url)
          }
        }).show()
      }
    }
  }
</script>

<style>
  .attend .el-card__body {
    padding: 0;
  }

  .attend .cube-slide-dots {
    bottom: 10px;
  }

  .attend .cube-slide-dots > span {
    width: 12px;
    height: 2px;
  }

  .attend .cube-slide-dots > span.active {
    background-color: #409EFF;
  }

  .card-type {
    font-size: 12px;
    color: #878787;
    line-height: 18px;
    padding-top: 4px;
  }
</style>
