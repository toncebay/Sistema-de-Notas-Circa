<template>
  <div v-on:keyup.enter="submitForm('ruleform')">
    <nav>
      <h1>Ingresando a una nuevo Estudiante</h1>
    </nav>
    <el-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
      <h1></h1>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" class="formularioEstilo">
      <el-card :body-style="{ padding: '20px' }">
        <el-form ref="ruleform" :model="ruleform" status-icon label-width="100px" label-position="left" method="post" class="demo-ruleForm">
          <el-row>
            <el-col :span="1">
              <h1></h1>
            </el-col>
            <el-col :span="22">
              <el-form-item label="Dni:" prop="dni">
                <el-input v-model="ruleform.dni"></el-input>
              </el-form-item>
              <el-form-item label="Nombre:" prop="nombre">
                <el-input v-model="ruleform.nombre"></el-input>
              </el-form-item>
              <el-form-item label="Apellido:" prop="apellido">
                <el-input v-model="ruleform.apellido"></el-input>
              </el-form-item>
              <el-form-item label="Edad:" prop="edad">
                <el-input v-model="ruleform.edad"></el-input>
              </el-form-item>
              <el-form-item label="Genero:" prop="genero">
                <el-radio v-model="ruleform.radio" label="1">Masculino</el-radio>
                <el-radio v-model="ruleform.radio" label="2">Femenino</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <h1></h1>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-button type="primary" @click="submitForm('ruleform')">Registrar</el-button>
          <el-button  @click="resetForm('ruleform')">Cancelar</el-button>
        </el-row>
      </el-card>
      <el-row style="height:100px;">
      </el-row>
    </el-col>
    </div>
</template>
<script>
export default {
  name: 'Director',
  data () {
    return {
      msg: 'Welcome to Your Angular.js App',
      radio: '1',
      ruleform: {
        dni: '',
        nombre: '',
        apellido: '',
        edad: '',
        genero: ''
      }
    }
  },
  methods: {
    submitForm(formName){
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
