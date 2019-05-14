// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')
const { db } = require('gridsome-source-firestore')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
	      path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Gridsome & Firebase',
  plugins: [{
    use: 'gridsome-source-firestore',
    debug: true, // Default false
    options: {
      collections: [
        {
          ref: db.collection('topics'),
          slug: (doc, asSlug) => {
            return `/topics/${asSlug(doc.data.title)}`
          },
          children: [
            {
              ref: (parentDoc) => {
                return parentDoc.ref.collection('posts')
              },
              slug: (doc, asSlug) => {
                return `/${asSlug(doc.data.title)}`
              },
            }
          ]
        }
      ]
    }
  }],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
