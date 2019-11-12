<template>
  <div>
    <div>
      see how we use vuetify in nuxt.config.js with our override of v-app : we
      load different theme files on each render based on business logic
    </div>
    <div>['@/plugins/vuetify'],</div>
    <hr />
    <div>npm install</div>
    <div>npm run dev</div>
    <div>package.json IS USING "vuetify": "2.1.5" THEN bar is red</div>
    <hr />
    <div>CHANGE package.json TO USE "vuetify": "2.1.6"</div>
    <div>rm -r node_modules</div>
    <div>npm install</div>
    <div>npm run dev</div>
    <div>THEN bar is blue it should be red</div>
    <hr />
    <h3>$vuetify.theme.themes</h3>
    <pre>{{ $vuetify.theme.themes }}</pre>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
