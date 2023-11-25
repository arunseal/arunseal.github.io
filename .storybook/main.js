module.exports = {
  stories: ['../**/*.story.mdx', '../**/*.story.@(js|jsx|ts|tsx)'],

  addons: [
    'storybook-dark-mode',
    {
      name: 'storybook-addon-turbo-build',
      options: { optimizationLevel: 2 },
    },
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
