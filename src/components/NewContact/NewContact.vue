<template>
  <el-row>
    姓名：{{info.name}}
    <el-input v-model="info.name" placeholder="请输入姓名"></el-input>
    年龄：{{info.age}}
    <el-input v-model="info.age" placeholder="请输入年龄"></el-input>
    性别：{{info.sex}}
    <el-select v-model="info.sex" placeholder="请选择">
      <el-option v-for="item in options" :key="item" :value="item"></el-option>
	  <!-- 这里的key官方推荐在v-for时使用，不然会警告，但不影响使用 -->
    </el-select>
  </el-row>
</template>
<script>
export default {
  name: "NewContact",
  data(){
    return {
      info: {
        name: '',
        age: null,
        sex: ''
      },
      options: [
        '女','男','保密'
      ]
    }
  }
}
</script>
</script>
<style>
</style>