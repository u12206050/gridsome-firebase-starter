// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

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
  siteName: 'Gridsome+Firestore Starter',
  plugins: [
    {
      use: 'gridsome-source-firestore',
      options: {
        credentials: require('./firebase-adminsdk-credentials.json'),
        debug: true,
        collections: [
          {
            ref: (db) => {
              return db.collection('posts').where('status', '==', '1')
            },
            slug: 'title',
            children: [{
              ref: (db, postDoc) => {
                return postDoc.ref.collection('comments').limit(10)
              }
            }]
          },
          {
            ref: (db) => {
              return db.collection('topics')
            },
            slug: (doc, slugify) => {
              return `/topics/${slugify(doc.data.name)}`
            }
          },
          {
            ref: (db) => {
              return db.collection('tags')
            },
            slug: (doc, slugify) => {
              return `/tags/${slugify(doc.data.name)}`
            }
          },
          {
            ref: (db) => {
              return db.collection('authors')
            },
            slug: (doc, slugify) => {
              return `/authors/${slugify(doc.data.name)}`
            }
          },
        ]
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
      tailwindConfig: './tailwind.config.js',
      purgeConfig: {},
      presetEnvConfig: {},
      shouldPurge: true,
      shouldImport: true,
      shouldTimeTravel: true,
  }
}
  ],
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
