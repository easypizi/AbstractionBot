module.exports = {
  fileProvider: require('enb/techs/file-provider'),
  fileMerge: require('enb/techs/file-merge'),
  fileCopy: require('enb/techs/file-copy'),
  borschik: require('enb-borschik/techs/borschik'),
  postcss: require('enb-postcss/techs/enb-postcss'),
  postcssPlugins: [
    require('postcss-import')(),
    require('postcss-each'),
    require('postcss-for'),
    require('postcss-simple-vars')(),
    require('postcss-nested'),
    require('lost'),
    require('pobem'),
    require('postcss-inline-svg'),
    require('postcss-url')([ { url: 'rebase' } ]),
    require('postcss-cssnext')(),
    require('postcss-reporter')()
  ],
  browserJs: require('enb-js/techs/browser-js'),
  babel: require('enb-babelify/techs/babel-browser-js'),
  prependYm: require('enb-modules/techs/prepend-modules'),
  bemtreeI18N: require('enb-bemxjst-i18n/techs/bemtree-i18n'),
  bemhtml: require('enb-bemxjst/techs/bemhtml'),
  keysets: require('enb-bem-i18n/techs/keysets'),
  i18n: require('enb-bem-i18n/techs/i18n'),
  bem: require('enb-bem-techs')
}




