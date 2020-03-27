const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: '## Using `create-docz-app`',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: '## Using `create-docz-app`',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/Omar/Documents/Docu-examples/my-docz-app',
          templates:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/node_modules/docz-core/dist/templates',
          docz: '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz',
          cache: '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz/.cache',
          app: '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz/app',
          appPackageJson:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/package.json',
          gatsbyConfig:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/gatsby-config.js',
          gatsbyBrowser:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/gatsby-browser.js',
          gatsbyNode:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/gatsby-node.js',
          gatsbySSR:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/gatsby-ssr.js',
          importsJs:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz/app/imports.js',
          rootJs:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz/app/root.jsx',
          indexJs:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz/app/index.jsx',
          indexHtml:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz/app/index.html',
          db:
            '/Users/Omar/Documents/Docu-examples/my-docz-app/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
