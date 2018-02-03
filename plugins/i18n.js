import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  // Also, access this is Vuex Store as `this.app.i18n`
  app.i18n = new VueI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
      'zh-TW': {
        curly_bracket: '使用 {{ }}，會出現在 SSR 中！',
        directive: '使用 v-t="" Directive，沒有被 SSR...'
      },
      'en-US': {
        curly_bracket: 'Using {{ }}, shows in SSR!',
        directive: 'Using v-t="" directive, does not show in SSR...'
      }
    }
  })
}
