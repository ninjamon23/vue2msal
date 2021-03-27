<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="user">
        <div>Welcome {{user.user.name}}</div>
        <div><button @click="$msal.signOut()">logout</button></div>
    </div>
    <div v-else>
        Please sign-in
        <button @click="$msal.signIn()"></button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      let user = null
      if (this.$msal.isAuthenticated) { // Note that the dollar sign ($) is missing from this.msal
        user = {
          user: this.$msal.data.user,
          profile: {}
        }
        if (this.$msal.graph && this.$msal.graph.profile) {
          user.profile = this.$msal.graph.profile
        }
        // user = this.$msal.data
      }
      console.log('user', user)
      return user
    }
  },
  async mounted () {
    // console.log('this.$msal', this.$msal)
    console.log('this.$msal.isAuthenticated', await this.$msal.isAuthenticated())
    const token = await this.$msal.acquireToken({ scopes: ['ea0f35d4-1b9d-407e-a67a-66b326af105b'] }) // NOTE: For spa use the client id instead!
    console.log('this.$msal.acquireToken', token)
  }
}
</script>
