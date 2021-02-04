module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [2, { props: false }],
    'import/extensions': 0,
    'linebreak-style': 0,
    'no-lonely-if': 0,
    'no-restricted-syntax': 0,
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
