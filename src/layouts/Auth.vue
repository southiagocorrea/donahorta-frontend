<script>
export default {
  name: 'AuthLayout',
  data () {
    return {
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
