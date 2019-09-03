const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

// const resourcesLoader = {
//   loader: "sass-resources-loader",
//   options: {
//     resources: [
//       "./styles/foundation/_base.scss",
//       "./styles/foundation/_init.scss",
//       "./styles/foundation/_setting.scss",
//       "./styles/foundation/_show-setting.scss"
//     ]
//   }
// };

const resourcesLoader = [
  "./styles/global.scss"
  // "./styles/foundation/_base.scss",
  // "./styles/foundation/_init.scss",
  // "./styles/foundation/_setting.scss",
  // "./styles/foundation/_show-setting.scss"
];

module.exports = withCSS(withSass({

  webpack (config, options) {
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   loader: 'sass-resources-loader',
    //   options: {
    //     resources: resourcesLoader
    //   }
    // })
    //
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    return config;
  }
}));
