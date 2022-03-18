module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'space-before-function-paren': ["error", "always"],
    'vue/no-multiple-template-root': "off"
  },
};