<template>
  <div class="login-container">
    <!-- 水母动画 -->
    <jellyfish />
    <!-- 登录框 -->
    <el-form :model="loginForm"
             status-icon
             :rules="rules"
             ref="loginForm"
             label-width="80px"
             class="login-box">
      <el-form-item label="用户名"
                    prop="username">
        <el-input v-model="loginForm.username"
                  prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="password">
        <el-input type="password"
                  v-model="loginForm.password"
                  show-password
                  prefix-icon="el-icon-lock"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"
                    prop="checkPass">
        <el-input type="password"
                  v-model="loginForm.checkPass"
                  prefix-icon="el-icon-lock"
                  autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="sub"
                   type="primary"
                   @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import jellyfish from './jellyfish'
export default {
  components: {
    jellyfish
  },
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.loginForm.checkPass !== '') {
          this.$refs.loginForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        checkPass: '123456'
      },

      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { data: res } = await this.$http.post('login', this.loginForm)
          const { msg, status } = res.meta
          if (status !== 200) {
            this.$message({
              message: '登录失败，请输入正确的名用户和密码！',
              duration: 1000,
              center: true,
              type: 'error'
            })
          } else {
            this.$message({
              message: msg,
              duration: 1000,
              center: true,
              type: 'success'
            })
            window.sessionStorage.setItem('token', res.data.token)
            this.$router.push('/home')
          }
        } else {
          this.$message({
            message: '登录失败，请输入正确的名用户和密码！',
            duration: 1000,
            center: true,
            type: 'error'
          })
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(rgb(0, 234, 255), #023caf, #130029);
  .login-box {
    position: relative;
    width: 450px;
    margin-right: 150px;
    height: 300px;
    padding: 30px 30px 30px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 1px 3px 10px 2px rgba(36, 35, 35, 0.3),
      1px 3px 10px 2px rgba(66, 65, 65, 0.3);
    background-color: rgba(195, 211, 250, 0.25);

    .sub {
      margin: 0 158px 0 10px;
    }
  }
}
</style>
