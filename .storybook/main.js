module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  previewHead: (head) => `
    ${head}
    <style>
      html {
          font-size: 62.5% !important;
      }
    </style>
  `,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'))
    return config
  },
}
