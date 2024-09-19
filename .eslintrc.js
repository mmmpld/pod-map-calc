module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true
  },
  extends: [
    'tseslint.configs.recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vuetify/base'
  ],
  parserOptions: {
    'ecmaVersion': 2022
  }
}
