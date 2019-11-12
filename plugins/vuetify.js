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
