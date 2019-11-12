<template>
  <cup-app>
    <v-app-bar color="primary" fixed app>
      <v-toolbar-title>
        <span>This should be "RED", </span>
        <span>is the default primary color</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </cup-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
