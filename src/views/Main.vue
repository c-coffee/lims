/**
* Created by vol on 2017/7/18.
*/
<template>
    <div class="main">
        <!--左右分栏设置-->
        <div class="left-column">
            <vSideBar class="el-sidebar" ></vSideBar>
        </div>
        <div class="right-column">
            <router-view class="mainboard"></router-view>
        </div>

    </div>
</template>
<script>

import vSideBar from './SideBar.vue'
export default{
    components:{
        vSideBar
    }
}
</script>
<style>
    html{
        height:100%;
    }
    body{
        height:100%;
        width:100%;
        background-color:#2396EB
    }
    .left-column{
        width:260px;
        float:left;
        margin-right:-265px;
    }
    .right-column{
        float:left;
        width:99%;
        margin:0 10px;
    }
    .el-sidebar{
        background:#324157;
        position:fixed;
        top:0;
        bottom:0;
        overflow-x: hidden;
    }
    .mainboard{
        margin:10px;
        margin-left:268px;
    }
</style>