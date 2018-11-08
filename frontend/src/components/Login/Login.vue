<template>
  <div>
    <nav>
      <div class="container">
        <a class="navbar-brand" href="#">
          <b></b>
        </a>
      </div>
      <span class=navbar-text>COLEGIO CIRCA SAN MARTIN DE PORRES</span>
    </nav>
    <br>
    <el-button type="primary" @click="IngresarSistema()">Ingresar</el-button>
  </div>
</template>

<script>
import Route from '@/router'
export default {
  name: 'Login',
  methods: {
    IngresarSistema() {
      // Route.push('padre')
    }
  }
}
</script>

<style>

</style>
