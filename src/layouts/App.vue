<script>
export default {
  name: 'AppLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="page">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus" scoped>
  .page
    background-color pink
</style>
