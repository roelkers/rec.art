const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              loader: 'frontmatter-markdown-loader',
              options: { mode: [Mode.REACT] }
          }
      )
      return cfg;
  }
}