# cambridge-theme-test
Test of theme as used by Cambridge University Press for the development of a single nuxt server to deliver [Cambridge Open Engage](https://www.cambridge.org/engage) and [APSA Preprints](https://preprints.apsanet.org/engage/apsa/public-dashboard)


## The Issue

We use vuetify in nuxt.config.js with our override of v-app 

We load vuetify in a plugin not in build modules 

```['@/plugins/vuetify']```

This is because we load different theme files on each render based on business logic, that set the colors of the light theme

This app was written with vuetify 1 and them manually upgraded to vuetify 2

## To Test
START with package.json USING "vuetify": "2.1.5" 

```npm install```

```npm run dev```

THEN bar is red

CHANGE package.json TO USE "vuetify": "2.1.6" 

```rm -r node_modules```

```rm -r .nuxt```

```rm package-lock.json```

```npm install```

```npm run dev```

THEN bar is blue it should be red

## Code we use in @/plugins/vuetify

```javascript
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const cupApp = Vue.component('VApp').extend({
  name: 'CupApp',
  created() {
    this.$vuetify.theme.themes.light.primary = '#FF0000'
  }
})

Vue.component('CupApp', cupApp)

export default (context, inject) => {
  const vuetify = new Vuetify({
    theme: {
      dark: false
    }
  })

  context.app.vuetify = vuetify
  context.$vuetify = vuetify.framework
}
```

## Code used in @/layouts/default.vue

```javascript
<template>
  <cup-app>
    <v-app-bar color="primary" fixed app>
      <v-toolbar-title>
        <span>This should be "RED",</span>
        <span>it is the default primary color</span>
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
```
