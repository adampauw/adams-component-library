module.exports = {
  extends: ['@voiceflow/eslint-config', '@voiceflow/eslint-config/typescript', 'plugin:storybook/recommended'],
  overrides: [{
    files: ['*.story.*'],
    rules: {
      'import/no-extraneous-dependencies': 'off'
    }
  }]
};