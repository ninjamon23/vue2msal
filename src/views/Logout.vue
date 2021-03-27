<template>
  <div>
      <div v-if="$msal.isAuthenticated"><button @click="$msal.signOut()">logout</button></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
