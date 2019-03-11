
module.exports = {
  extends: [
    'react-app',
    'standard',
    'standard-react'
  ],
  plugins: [
    'flowtype',
    'import',
    'jsx-a11y',
    'node',
    'promise',
    'react',
    'react-hooks',
    'sort-imports-es6-autofix',
    'standard'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    camelcase: [2, {
      allow: [
        'UNSAFE_componentWillMount',
        'UNSAFE_componentWillReceiveProps',
        'UNSAFE_omponentWillUpdate'
      ]
    }],
    'consistent-return': [2],
    'comma-style': [2],
    'no-nested-ternary': [2],
    'no-var': [2],
    'object-curly-spacing': [2, 'always'],
    'quote-props': [2, 'as-needed'],
    'prefer-const': [2],
    'func-style': [2],
    'import/named': [2],
    'import/namespace': [2, { allowComputed: true }],
    'no-param-reassign': [2],
    'prefer-spread': [2],
    'sort-imports-es6-autofix/sort-imports-es6': [1, {
      memberSyntaxSortOrder: [
        'none',
        'single',
        'all',
        'multiple'
      ]
    }],
    'react/forbid-foreign-prop-types': [2],
    'react/jsx-closing-bracket-location': [1],
    'react/jsx-closing-tag-location': [1],
    'react/jsx-curly-brace-presence': [1, {
      props: 'never',
      children: 'never'
    }],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-handler-names': [1],
    'react/jsx-max-props-per-line': [1],
    'react/jsx-sort-props': [1],
    'react/no-did-update-set-state': [0],
    'react/sort-prop-types': [1],
    'react/jsx-wrap-multilines': [1, {
      arrow: 'ignore',
      assignment: 'ignore',
      condition: 'ignore',
      declaration: 'ignore',
      logical: 'ignore',
      prop: 'ignore',
      return: 'parens-new-line'
    }
    ],
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/sort-comp': [1]
    // Future
    // 'multiline-ternary': [2]
  },
  settings: {
    react: {
      version: '16.3'
    }
  }
}
