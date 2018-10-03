<template>
  <div class="dorm">
    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" style="border-left: 5px solid #E6A23C;padding-left: 12px">待审批申请</div>
      <div v-if="applyDorm.length>0">
        <el-row v-for="(item, index) in applyDorm" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="22">
            <div @click="showModel(item)">
              申请时间：{{item.time}}<br>
              <div class="dorm-type">
                外宿住址：{{item.landlord_address}}<br>
                房东电话：{{item.landlord_tel}}<br>
                房东电话：{{item.landlord_tel}}<br>
                是否退宿：{{item.move}}<br>
                当前进度：
                <a v-if="item.state===1">待辅导员审批</a>
                <a v-if="item.state===2">待学院审批</a>
                <a v-if="item.state===3">待学工部审批</a>
                <a v-if="item.state===4">待公寓中心审批</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div v-else class="empty-data">暂无数据</div>
    </el-card>
    <div class="p-1"></div>
    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" style="border-left: 5px solid #409EFF;padding-left: 12px">
        我的申请
      </div>
      <div v-if="myDorm.length > 0">
        <el-row v-for="(item, index) in myDorm" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="22">
            <div @click="showModel(item)">
              电子码：{{item.key}}<br>
              <div class="dorm-type">
                外宿住址：{{item.landlord_address}}<br>
                房东电话：{{item.landlord_tel}}<br>
                房东电话：{{item.landlord_tel}}<br>
                是否退宿：{{item.move}}<br>
                申请时间：{{item.time}}<br>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div v-else class="empty-data">暂无数据</div>
    </el-card>

    <el-dialog :fullscreen="true" :visible="dialogVisible" :show-close="false">
      <!--电子码-->
      <div v-if="detailDialog.state===(8||9)">
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">电子码</div>
        <div class="p-1"></div>
        <div style="font-size: 32px;text-align: center">{{detailDialog.key}}</div>
        <div class="p-2"></div>
      </div>

      <!--基本信息-->
      <div>
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">外宿信息</div>
        <div class="p-1"></div>
        <div style="line-height: 18px">
          姓名：{{detailDialog.student_name}}（{{detailDialog.student_key}}）<br>
          类型：<a v-if="detailDialog.student_type === 'B'">本科生</a><a v-else>研究生</a><br>
          性别：{{detailDialog.sex}}<br>
          身份证：{{detailDialog.idCard}}<br>
          年级：{{detailDialog.grade}}<br>
          专业：{{detailDialog.major}}<br>
          班级：{{detailDialog.class_name}}<br>
          是否退宿：{{detailDialog.move}}<br>
          主要理由：{{detailDialog.reason}}<br>
          本人电话：{{detailDialog.tel1}}<br>
          当前住址：{{detailDialog.address1}}<br>
          家长电话：{{detailDialog.tel1}}<br>
          家长住址：{{detailDialog.address1}}<br>
          外宿住址：{{detailDialog.landlord_address}}<br>
          房东姓名：{{detailDialog.landlord_name}}<br>
          房东电话：{{detailDialog.landlord_tel}}<br>
          联系人：{{detailDialog.tel2}}<br>
        </div>
        <div class="p-2"></div>
      </div>

      <!--证明图片-->
      <div v-if="imgArr.length > 0">
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">申请附件</div>
        <div class="p-1"></div>
        <div>
          <div v-for="(item, index) in imgArr" :key="index" style="padding: 5px;float: left">
            <img :src="item" class="img-box" @click="showImagePreview(item,imgArr)">
          </div>
        </div>
        <div class="p-2" style="clear: both"></div>
      </div>

      <!--待审批-->
      <div v-if="detailDialog.state===2">
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

      <!--审批信息-->
      <div v-if="detailDialog.approve!==null">
        <div style="border-left: 3px solid #409EFF;padding: 3px 8px">审批信息</div>
        <div class="p-1"></div>
        <el-steps align-center direction="vertical">
          <el-step v-for="(item, index) in detailDialog.approve" :key="index"
                   :status="(item.type==='同意')?'success':'error'">
            <span slot="title">{{item.level}}</span>
            <span slot="description">
              审批人：{{item.name}}<br>
              意见：{{item.reason}}<br>
              时间：{{item.time}}
            </span>
          </el-step>
          <el-step v-if="detailDialog.state!==(0||8||9)" status="wait">
            <span slot="title" style="font-size: 14px">待审核</span>
          </el-step>
        </el-steps>
        <div class="p-2"></div>
      </div>

      <!--底部-->
      <div slot="footer" class="dialog-footer">
        <div v-if="detailDialog.state===2">
          <el-button class="w-100" type="primary" @click="submitForm('ruleForm',detailDialog.key)">确 定</el-button>
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
          history: '/mobile/teacher/leave/history/class'
        },
        dialogVisible: false,
        detailDialog: {
          key: '',
          student_name: '',
          student_key: '',
          student_type: '',
          college_name: '',
          class_name: '',
          idCard: '',
          sex: '',
          major: '',
          grade: '',
          landlord_name: '',
          landlord_tel: '',
          landlord_address: '',
          tel1: '',
          tel2: '',
          time: '',
          address1: '',
          address2: '',
          move: '',
          reason: '',
          approve: '',
          files: []
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
        applyDorm: [],
        myDorm: [],
        imgArr: []
      }
    },

    mounted() {
      this.getData()
    },

    methods: {
      showModel(data) {
        this.imgArr = []
        this.detailDialog = data
        this.dialogVisible = true
        this.detailDialog.files.forEach((value) => {
          this.$http.get('dms/files', {method: 'img', data: value.uid}).then((res) => {
            // this.imgArr.push(resData(res))
          })
        })
        this.resetForm('ruleForm')
      },

      submitForm(formName, key) {
        this.ruleForm.key = key
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('dms/college', {
              method: 'approveDorm',
              data: this.ruleForm
            }).then((res) => {
              // const result = resData(res)
              const result = res
              if (result) {
                this.dialogVisible = false
                this.getData()
                this.$message.success(result)
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
          method: 'selDorm',
          data: {
            state: '2',
            platform: 'mobile'
          }
        }).then((res) => {
          // this.applyDorm = resData(res)
        })

        this.$http.get('dms/college', {
          method: 'selDorm',
          data: {
            state: '3,4,8',
            platform: 'mobile'
          }
        }).then((res) => {
          // this.myDorm = resData(res)
        })
      },

      showImagePreview(file, files) {
        // 设置z-index
        document.getElementsByClassName('v-modal')[0].style.zIndex = '98'
        document.getElementsByClassName('el-dialog__wrapper')[0].style.zIndex = '99'
        // 获取当前位置
        this.$createImagePreview({
          initialIndex: files.indexOf(file),
          imgs: files
        }).show()
      }
    }
  }
</script>

<style>
  .dorm .el-card__body {
    padding: 0;
  }

  .dorm-type {
    font-size: 12px;
    color: #878787;
    line-height: 18px;
    padding-top: 4px;
  }

  .dorm .el-dialog__body {
    padding: 20px;
  }

  .dorm .el-dialog__header {
    padding: 0;
  }

  .el-message-box {
    width: unset;
  }

  .v-modal {
    z-index: 2000;
  }

  .cube-image-preview {
    z-index: 2500;
  }
</style>
