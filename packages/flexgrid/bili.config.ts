import { Config } from 'bili'

const config: Config = {
  input: './src/main.ts',

  output: {
    dir: './dist',
    fileName: 'flexgrid.[format][min].js',
    format: ['umd-min', 'esm'],
    moduleName: 'FlexGrid'
  },

  env: {
    NODE_ENV: 'production'
  },

  plugins: {
    babel: {
      configFile: false
    },
    vue: {
      css: {
        extract: false,
        requireModuleExtension: false,
        loaderOptions: {
          css: {
            modules: {
              localIdentName: 'FlexGrid--[local]'
            }
          }
        }
      }
    }
  }

}

export default config
