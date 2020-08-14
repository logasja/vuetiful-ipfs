<template>
  <div class="hello">
    <div class="hero is-primary">
      <h1 class="title">{{ msg }}</h1>
      <p class="subtitle">
        For a guide and recipes on how to configure / customize this project,<br />
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
          >vue-cli documentation</a
        >.
      </p>
    </div>
    <section class="section">
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
            target="_blank"
            rel="noopener"
            >babel</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
            target="_blank"
            rel="noopener"
            >router</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
            target="_blank"
            rel="noopener"
            >vuex</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener"
            >eslint</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
            target="_blank"
            rel="noopener"
            >unit-mocha</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch"
            target="_blank"
            rel="noopener"
            >e2e-nightwatch</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
            target="_blank"
            rel="noopener"
            >typescript</a
          >
        </li>
      </ul>
    </section>
    <section class="section">
      <h3>Essential Links</h3>
      <ul>
        <li>
          <a class="box" href="https://vuejs.org" target="_blank" rel="noopener"
            >Core Docs</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://forum.vuejs.org"
            target="_blank"
            rel="noopener"
            >Forum</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://chat.vuejs.org"
            target="_blank"
            rel="noopener"
            >Community Chat</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://twitter.com/vuejs"
            target="_blank"
            rel="noopener"
            >Twitter</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://news.vuejs.org"
            target="_blank"
            rel="noopener"
            >News</a
          >
        </li>
      </ul>
    </section>
    <section class="section">
      <h3>Ecosystem</h3>
      <ul>
        <li>
          <a
            class="box"
            href="https://router.vuejs.org"
            target="_blank"
            rel="noopener"
            >vue-router</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://vuex.vuejs.org"
            target="_blank"
            rel="noopener"
            >vuex</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/vue-devtools#vue-devtools"
            target="_blank"
            rel="noopener"
            >vue-devtools</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://vue-loader.vuejs.org"
            target="_blank"
            rel="noopener"
            >vue-loader</a
          >
        </li>
        <li>
          <a
            class="box"
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
            rel="noopener"
            >awesome-vue</a
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
