<template>
  <section class="container">
    <div>
      <div>
        <router-link to="/" class="curly_bracket">{{ $t('curly_bracket') }}</router-link>
      </div>
      <div>
        <router-link to="/" class="directive" v-t="'directive'" />
      </div>

      <hr>

      <p>
        Above are two <code>&lt;router-link&gt;</code> tags, with texts rendered by
      </p>
      <div class="large">
        <code v-pre>
          &lt;router-link class=&quot;curly_bracket&quot;&gt;{{ $t('curly_bracket') }}&lt;/router-link&gt;
        </code>
      </div>
      <p>
        and
      </p>
      <div class="large">
        <code v-pre>
          &lt;router-link class=&quot;directive&quot; v-t=&quot;'directive'&quot; /&gt;
        </code>
      </div>

      <hr>

      <p>
        View page source and you can see that only the first one is shown, the second one using directive is now shown...
      </p>
      <p>
        Refesh this page and you can see that the second line shows a little bit later, too.
      </p>
    </div>
  </section>
</template>

<script>

export default {
}
</script>

<style>
hr {
  margin: 20px;
}
code {
  background: #aaa;
  border-radius: 5px;
  padding: 3px;
  display: inline-block;
  font-family: monospace;
}
.large {
  margin: 10px;
}
.large code {
  padding: 5px 10px;
}
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
