<template>
  <div class="afl">
    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" class="clearfix" style="border-left: 5px solid #409EFF;padding-left: 12px">
        待审批请假
        <router-link :to="link.history">
          <span style="float: right;margin-top: -4px"><i class="iconfont icon-calendar"
                                                         style="font-size: 22px"></i></span>
        </router-link>
      </div>
      <div v-if="waitLeave.length > 0">
        <el-row v-for="(item, index) in waitLeave" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="22">
            <div @click="showModel(item)">
              姓名：{{item.student_name}}（{{item.student_key}}）&nbsp;
              <div class="afl-type">
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
      <div slot="header" class="clearfix" style="border-left: 5px solid #67C23A;padding-left: 12px">当前假条</div>
      <div v-if="waitBack.length>0">
        <el-row v-for="(item, index) in waitBack" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="22">
            <div @click="showModel(item)">
              <div>
                姓名：{{item.student_name}}（{{item.student_key}}）
                <el-tag type="warning" size="mini" v-if="item.back!==null">待销假</el-tag>&nbsp;
              </div>
              <div class="afl-type">
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
      <!--待审批-->
      <div v-if="leaveApprove.state===2">
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">假条审批</div>
        <div class="p-1"></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="审批意见" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择审批意见">
              <el-option label="同意" value="同意"></el-option>
              <el-option label="不同意" value="不同意"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审批说明" prop="reason">
            <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" v-model="ruleForm.reason"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!--底部-->
      <div slot="footer" class="dialog-footer">
        <div v-if="leaveApprove.state===2">
          <el-button class="w-100" type="primary" @click="submitForm('ruleForm',leaveApprove.key)">确 定</el-button>
          <br>
          <div class="p-1"></div>
          <el-button class="w-100" @click="dialogVisible = false">取 消</el-button>
        </div>
        <div v-else>
          <el-button class="w-100" type="primary" @click="dialogVisible = false">确 定</el-button>
          <br>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // import {resData} from '~/pages/service/tool'

  export default {
    data() {
      return {
        link: {
          history: '/app/teacher/leave/history/college'
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
        ruleForm: {
          key: '',
          type: '',
          reason: ''
        },
        rules: {
          type: [
            {required: true, message: '请选择审批意见', trigger: 'blur'}
          ],
          reason: [
            {required: true, message: '请填写审批说明', trigger: 'blur'}
          ]
        },
        waitLeave: [],
        waitBack: []
      }
    },
    mounted() {
      this.$http.get('dms/college', {
        method: 'selLeave',
        data: {
          state: '8',
          platform: 'mobile'
        }
      }).then((res) => {
        // this.waitBack = resData(res)
      })

      this.$http.get('dms/college', {
        method: 'selLeave',
        data: {
          state: '2',
          platform: 'mobile'
        }
      }).then((res) => {
        // this.waitLeave = resData(res)
      })
    },

    methods: {
      showModel(data) {
        this.leaveApprove = data
        this.dialogVisible = true
        this.resetForm('ruleForm')
      },
      submitForm(formName, key) {
        this.ruleForm.key = key
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('dms/college', {
              method: 'approveLeave',
              data: this.ruleForm
            }).then((res) => {
              // const result = resData(res)
              const result = res
              if (result) {
                this.dialogVisible = false
                this.getData()
                this.$message.success(result)
              } else {
                this.$message.warning(result)
              }
            }).catch((err) => {
              console.log(err)
            })
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      getData() {
        this.$http.get('dms/college', {
          method: 'selLeave',
          data: {
            state: '8',
            platform: 'mobile'
          }
        }).then((res) => {
          // this.waitBack = resData(res)
        })
        this.$http.get('dms/college', {
          method: 'selLeave',
          data: {
            state: '2',
            platform: 'mobile'
          }
        }).then((res) => {
          // this.waitLeave = resData(res)
        })
      }
    }
  }
</script>

<style>
  .afl .el-card__body {
    padding: 0;
  }

  .afl-type {
    font-size: 12px;
    color: #878787;
    line-height: 18px;
    padding-top: 4px;
  }

  .afl .el-dialog__header {
    padding: 0;
  }

  .afl .el-dialog__body {
    padding: 20px;
  }
</style>
