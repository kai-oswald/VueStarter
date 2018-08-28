const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  plugins: [
    'vue'
  ],
  env: {
    amd: true,
    node: true
  },
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': isDev ? 0 : 2,
    'no-console': isDev ? 0 : 2,
    'semi': 0,
    'no-extra-semi': 0,
    'vue/max-attributes-per-line': 0
  }
}