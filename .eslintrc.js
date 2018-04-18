module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard'],
  // required to lint *.vue files
  plugins: ['html', 'import'],
  globals: {
    cordova: true,
    DEV: true,
    PROD: true,
    __THEME: true
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'ignore'
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    semi: ['error', 'always'],
    quotes: ['error', 'double']
  }
}
