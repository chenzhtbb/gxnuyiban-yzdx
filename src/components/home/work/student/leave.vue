<template>
  <div class="leave">
    <div class="p-3">
      <el-card class="box-card border-0" style="background-color: #107cd6;text-align: center;color: #fcfcfc">
        <el-row>
          <el-col :span="12" style="border-right: 1px solid #eee;">
            <router-link :to="link.form">
              <div class="m-auto p-3">
                <i class="iconfont icon-xiugai" style="font-size: 36px"></i><br>
                <span style="font-size: 14px">请假申请</span>
              </div>
            </router-link>
          </el-col>
          <el-col :span="12">
            <router-link :to="link.history">
              <div class="m-auto p-3">
                <i class="iconfont icon-calendar" style="font-size: 36px"></i><br>
                <span style="font-size: 14px">请假记录</span>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" class="clearfix" style="border-left: 5px solid #409EFF;padding-left: 12px">
        我的假条
      </div>
      <div v-if="waitBack.length > 0">
        <el-row v-for="(item, index) in waitBack" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="22">
            <div @click="showModel(item)">
              姓名：{{item.student_name}}（{{item.student_key}}）&nbsp;
              <div class="leave-type">
                类型：{{item.type}}<br>
                班级：{{item.class_name}}<br>
                时间：{{item.begin}} 至 {{item.end}}（共{{item.days}}天）<br>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div v-else class="empty-data">暂无数据</div>
    </el-card>

    <div class="p-1"></div>

    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" class="clearfix" style="border-left: 5px solid #E6A23C;padding-left: 12px">待审核假条</div>
      <div v-if="waitLeave.length>0">
        <el-row v-for="(item, index) in waitLeave" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="21">
            <div @click="showModel(item)">
              姓名：陈震海（201512300018）&nbsp;
              <div class="leave-type">
                类型：{{item.type}}<br>
                班级：计算机科学与技术1班<br>
                时间：{{item.begin|dat}} 至 {{item.end|dat}}<br>
                进度：<a>待辅导员审批</a>
                <a v-if="item.state===2">待学院审批</a>
                <a v-if="item.state===3">待主管部门审批</a>
                <a v-if="item.state===4">待学工部审批</a>
              </div>
            </div>
          </el-col>
          <el-col :span="1">
            <el-dropdown size="mini" trigger="click">
              <i class="el-icon-arrow-down el-icon--right"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><span @click="delLeave(index)">撤销申请</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
      <div v-else class="empty-data">暂无数据</div>
    </el-card>

    <el-dialog :fullscreen="true" :visible="dialogVisible" :show-close="false">
      <!--电子码-->
      <div v-if="leaveApprove.state===(8||9)">
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">电子码</div>
        <div class="p-1"></div>
        <div style="font-size: 32px;text-align: center">{{leaveApprove.key}}</div>
        <div class="p-2"></div>
      </div>
      <!--基本信息-->
      <div>
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">请假信息</div>
        <div class="p-1"></div>
        姓名：{{leaveApprove.student_name}}（{{leaveApprove.student_key}}）<br>
        类型：{{leaveApprove.type}}<br>
        班级：{{leaveApprove.class_name}}<br>
        时间：{{leaveApprove.begin}} 至 {{leaveApprove.end}}（共{{leaveApprove.days}}天）<br>
        事由：{{leaveApprove.reason}}<br>
        去向：{{leaveApprove.address}}<br>
        本人电话：{{leaveApprove.tel1}}<br>
        联系人：{{leaveApprove.tel2}}<br>
        <div class="p-2"></div>
      </div>
      <!--审批信息-->
      <div v-if="leaveApprove.approve!==null">
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">审批信息</div>
        <div class="p-1"></div>
        <el-steps align-center direction="vertical">
          <el-step v-for="(item, index) in leaveApprove.approve" :key="index"
                   :status="(item.type==='同意')?'success':'error'">
            <span slot="title">{{item.level}}</span>
            <span slot="description">
              审批人：{{item.name}}<br>
              意见：{{item.reason}}<br>
              时间：{{item.time}}
            </span>
          </el-step>
          <el-step v-if="leaveApprove.state!==(0||8||9)" status="wait">
            <span slot="title" style="font-size: 14px">待审核</span>
          </el-step>
        </el-steps>
        <div class="p-2"></div>
      </div>

      <!--底部-->
      <div slot="footer" class="dialog-footer">
        <div>
          <el-button class="w-100" type="primary" @click="dialogVisible = false">确 定</el-button>
          <br>
        </div>
        <div v-if="leaveApprove.state===8">
          <div class="p-1"></div>
          <el-button class="w-100" type="warning" @click="dialogVisible = false">销 假</el-button>
          <br>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getCache, setCache} from 'src/pulgin/cache.js'

  export default {
    data() {
      return {
        link: {
          form: '/app/student/leave/form',
          history: '/app/student/leave/history'
        },
        dialogVisible: false,
        leaveApprove: {
          key: '',
          student_name: '',
          student_key: '',
          college: '',
          class_name: '',
          begin: '',
          end: '',
          days: '',
          reason: '',
          address: '',
          tel1: '',
          tel2: '',
          time: ''
        },
        waitLeave: [],
        waitBack: []
      }
    },
    activated() {
      this.waitLeave = getCache('waitLeave')
      this.waitBack = getCache('waitBack')
    },
    methods: {
      showModel(data) {
      },
      hei() {
        let h = document.documentElement.scrollHeight || document.body.scrollHeight
        return `height: ${h - 204}px;`
      },
      delLeave(index) {
        this.waitLeave.splice(index, 1)
        setCache('waitLeave', this.waitLeave)
      }
    }
  }
</script>

<style>
  .leave .el-card__body {
    padding: 0;
  }

  .leave-type {
    font-size: 12px;
    color: #878787;
    line-height: 18px;
    padding-top: 4px;
  }

  .leave .el-dialog__body {
    padding: 20px;
  }

  .leave .el-dialog__header {
    padding: 0;
  }
</style>
