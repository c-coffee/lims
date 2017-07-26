/**
* Created by vol on 2017/7/23.
*/
<template>
    <div class="User">
        <el-dialog title="添加用户"  :visible.sync="dlg_isShowAddUserDlg" size="small" :close-on-click-modal="dlg_modelCloseOption">
            <el-form :model="addUserForm" :label-position="dlg_labelPosition" :rules="addUser_rules" ref="addUserForm" label-width="80px">
                <el-form-item label="用户姓名" prop="name" class="is-required">
                    <el-input  auto-complete="off" v-model="addUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="登录帐号" prop="loginName" class="is-required">
                    <el-input  auto-complete="off" v-model="addUserForm.loginName"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="pwd" class="is-required">
                    <el-input  auto-complete="off" value="123" v-model="addUserForm.pwd"></el-input>
                </el-form-item>
                <el-form-item label="联系手机" >
                    <el-input  auto-complete="off" v-model="addUserForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="dept"  class="is-required">
                    <el-select v-model="addUserForm.dept" placeholder="请选择部门...">
                        <el-option label="业务室" value="4"></el-option>
                        <el-option label="财务室" value="5"></el-option>
                        <el-option label="综合科" value="6"></el-option>
                        <el-option label="检验一室" value="1"></el-option>
                        <el-option label="检验二室" value="2"></el-option>
                        <el-option label="检验三室" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dlg_isShowAddUserDlg=false;">取 消</el-button>
                    <el-button type="primary" @click="addUser()">确 定</el-button>
            </span>
        </el-dialog>
        <div class="userNav">
            <el-menu  class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1" @click="dlg_isShowAddUserDlg=true;"><i class="el-icon-plus"></i>添加用户</el-menu-item>
                <el-menu-item style="float:right" index="5"><el-input placeholder="请输入查询内容" icon="search">
                </el-input></el-menu-item>
            </el-menu>
        </div>
        <div class="userTable">
            <div class="pageNum">
                <el-pagination
                        :page-sizes="[10, 30, 100]"
                        :page-size="10"
                        layout="total, sizes, prev,  pager, next"
                        :total="1000">
                </el-pagination>
            </div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column width="70" prop="id" label="序号"></el-table-column>
                <el-table-column
                        width="150"
                        prop="name"
                        label="姓名"
                        >
                </el-table-column>
                <el-table-column
                        width="150"
                        prop="userId"
                        label="用户名"
                        >
                </el-table-column>
                <el-table-column
                        width="150"
                        prop="email"
                        label="手机"
                       >
                </el-table-column>
                <el-table-column
                        width="180"
                        prop="dept"
                        label="所属部门"
                        >
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        >
                    <template scope="scope">
                        <el-button type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">修改</el-button>
                        <el-button type="text" size="small">上传签名</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return {
            dlg_isShowAddUserDlg:false,
            dlg_modelCloseOption:false,
            dlg_labelPosition:'right',
            addUserForm:{
                name:'',
                loginName:'',
                pwd:'',
                tel:'',
                dept:''
            },
            addUser_rules:{
                name:[
                    {required:true,message:'请输入用户姓名',trigger:'blur'}
                ],
                loginName:[
                    {required:true,message:'请输入登录用户名',trigger:'blur'}
                ],
                pwd:[
                    {required:true,message:'请输入初始密码',trigger:'blur'}
                ],
                dept:[
                    {required:true,message:'请选择所属部门',trigger:'change'}
                ]
            },
            tableData:[
                {
                    id:1,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:2,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:3,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:4,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:5,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:6,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:7,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:8,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:9,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:10,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:11,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:12,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                }
            ]
        }
    },
    methods:{
        addUser(){
            this.$refs['addUserForm'].validate(function(valid){
                if(valid){
                    this.dlg_isShowAddUserDlg = false;
                }else{
                    console.log('error submit!');
                    return false;
                }
            }.bind(this));
        }
    }
}
</script>
<style>
.userNav{
    position:fixed;
    top:10px;
    left:277px;
    right:24px;
    z-index:1000;
}
.userTable{
    margin-top:85px;
}
.pageNum{
    float:right;
    margin-bottom:5px;
}
</style>