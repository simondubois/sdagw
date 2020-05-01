module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    indent: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': 'off',
    'vue/html-indent': ['error', 4],
    'vue/multiline-html-element-content-newline': ['error', { allowEmptyLines: true }],
    'vue/script-indent': ['error', 4, { baseIndent: 1 }],
  },
}
