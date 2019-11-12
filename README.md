# cambridge-theme-test
Test of Theme as used by Cambridge university Press


## The Issue

We use vuetify in nuxt.config.js with our override of v-app 

We load vuetify in a plugin not in build modules 

```['@/plugins/vuetify']```

This is because we load different theme files on each render based on business logic, that set the colors of the light theme

This app was written with vuetify 1 and them manually upgraded to vuetify 2

The problem starts between 2.1.8 (OK) and 2.1.9 (FAIL)


## To Test
START with package.json USING "vuetify": "2.1.5" 

```npm install```

```npm run dev```

THEN bar is red

CHANGE package.json TO USE "vuetify": "2.1.9" 

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
