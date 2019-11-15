<template>
  <q-page class="container">
    <div class="content">
      <div class="header">
        <h1>Bem-vindo</h1>
        <p>Aqui vamos colocar alguma coisa que eu nao sei</p>
      </div>
      <div class="main">
        <img src="https://www.designfreelogoonline.com/wp-content/uploads/2014/11/00183-Fruits-Vegetables-logo-design-free-logos-online-02.png"/>
      </div>
      <div class="footer">
        <q-btn class="primary">Login</q-btn>
        <q-btn class="secondary">Registrar</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AuthIndex'
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    justify-content center
    padding 50px
    .content
      display flex
      flex-direction column
      .header
        width 100%
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
        padding 80px 0 80px 0
        width 100%
        display flex
        flex-direction row
        justify-content center
        img
          width 80%
      .footer
        width 100%
        display flex
        flex-direction column
        align-items center
        button
          width 80%
          box-shadow none
          border-radius 100px
        .primary
          background-color $primary
          color white
          margin-bottom 14px
        .secondary
          border solid 1px #AAAAAA
          color #AAAAAA
</style>
