<template>
  <div class="dorm">
    <div class="p-3">
      <el-card class="box-card border-0" style="background-color: #107cd6;text-align: center;color: #fcfcfc">
        <el-row>
          <el-col :span="24" style="border-right: 1px solid #eee;">
            <router-link :to="link.form">
              <div class="m-auto p-3">
                <i class="iconfont icon-xiugai" style="font-size: 36px"></i><br>
                <span style="font-size: 14px">无犯罪证明</span>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" style="border-left: 5px solid #E6A23C;padding-left: 12px">待开具证明</div>
      <div v-if="applyDorm.length>0">
        <el-row v-for="(item, index) in applyDorm" :key="index" class="p-3 border-b">
          <el-col :span="2" style="padding-left: 4px">{{index+1}}</el-col>
          <el-col :span="21">
            <div @click="showModel(item)">
              姓名：陈震海（201512300018）&nbsp;
              <div class="dorm-type">
                本人电话：{{item.tel1}}<br>
                导员电话：{{item.tel2}}<br>
                当前宿舍：{{item.address}}<br>
                当前进度：
                <a>待辅导员审批</a>
                <a v-if="item.state===2">待学院审批</a>
                <a v-if="item.state===3">待学工部审批</a>
                <a v-if="item.state===4">待公寓中心审批</a>
              </div>
            </div>
          </el-col>
          <el-col :span="1">
            <el-dropdown size="mini" trigger="click">
              <i class="el-icon-arrow-down el-icon--right"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><span @click="del(index)">撤销申请</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
      <div v-else class="empty-data">暂无数据</div>
    </el-card>
    <div class="p-1"></div>
    <el-card class="box-card rounded-0" shadow="never">
      <div slot="header" style="border-left: 5px solid #409EFF;padding-left: 12px">我的申请</div>
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
        <el-button class="w-100" type="primary" @click="dialogVisible = false">确 定</el-button>
        <br>
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
          form: '/app/student/zm/form'
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
        applyDorm: [],
        myDorm: [],
        imgArr: []
      }
    },
    activated() {
      this.applyDorm = getCache('applyDorm2')
      this.myDorm = getCache('myDorm2')
    },
    methods: {
      del(index) {
        this.applyDorm.splice(index, 1)
        setCache('applyDorm2', this.applyDorm)
        console.log(this.applyDorm)
      },
      hei() {
        let h = document.documentElement.scrollHeight || document.body.scrollHeight
        return `height: ${h - 204}px;`
      },
      showModel(data) {
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
