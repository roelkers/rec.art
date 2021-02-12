const Mode = require('frontmatter-markdown-loader/mode')
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages(
        {
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
)