<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
    },
    arrowBack: function () {},
    register: function () {},
    resetInput: function () {}
  }
}
</script>

<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div class="header">
        <q-btn flat round icon="arrow_back"/>
        <h1>Login</h1>
        <p>Aqui vamos colocar alguma coisa</p>
      </div>
      <div class="main">
        <q-input v-model="email" label="Email" type="email" class="email" />
        <q-input v-model="password" label="Senha" type="password" class="password"/>
        <q-btn rounded color="primary" label="Login" @click.stop.prevent="login"/>
        <q-btn outline color= "darkgrey" rounded label="Regitrar" @click.stop.prevent="register"/>
      </div>
      <div class="footer">
        <q-img src="https://www.designfreelogoonline.com/wp-content/uploads/2014/11/00183-Fruits-Vegetables-logo-design-free-logos-online-02.png"/>
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
  .container
    width 100vw
    height 100vh
    display flex
    flex-direction column
    justify-content space-between
    padding 50px
    padding-bottom 0
    padding-top 25px
    .header
      // width 100%
      padding 0
      display flex
      flex-direction column
      justify-content center
      margin-bottom 20px
      h1, p
       margin 0
       padding 0
      h1
        font-size 34px
        line-height 34px
        font-weight 600
        margin-bottom 10px
      p
        font-size 14px
        line-height 18px
    .main
      display flex
      flex-direction column
      justify-content center
      align-items center
      .email, .password
        margin-bottom 14px
        width 100%
      button
        width 80%
        box-shadow none
        margin-bottom 14px
</style>
