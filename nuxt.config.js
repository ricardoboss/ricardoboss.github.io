import path from 'path';
import fs from 'fs';
import Mode from 'frontmatter-markdown-loader/mode'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: `Ricardo Boss' Homepage`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hi! My name is Ricardo Boss and I am a software developer from germany.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  css: [
    '@/assets/style/app.scss',
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#33aa66' },

  router: {
    linkExactActiveClass: 'active shadow'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: "frontmatter-markdown-loader",
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      });
    }
  },

  module: {
    rules: [
      {
        test: /\.(sa|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /(node_modules)/
      }
    ],
  },

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-78343102-8',
      cookie_expires: 0,
      anonymize_ip: true,
      allow_ad_personalization_signals: false
    }],
    ['@nuxtjs/moment', {}]
  ],

  modules: ['@nuxtjs/sitemap'],

  sitemap: {
    hostname: 'https://ricardoboss.de',
    gzip: true,
    routes: function() {
      let postsPath = path.resolve(__dirname, "content");
      let files = fs.readdirSync(postsPath);

      let latestDate = new Date(0);
      let posts = files
        .filter(path => /\d{4}-\d{2}-\d{2}-.+\.md$/i.test(path))
        .map(path => {
          let uri = path.split('.').shift(); // remove extension
          let date = new Date(path.split('-').splice(0, 3).join('-')); // get date

          if (date > latestDate)
            latestDate = date;

          return {
            url: `/blog/${uri}`,
            changefreq: 'yearly',
            priority: 0.4,
            lastmod: date
          };
        });

      return posts.concat([
        {
          url: '/blog',
          changefreq: 'weekly',
          priority: 0.6,
          lastmod: latestDate
        },
        {
          url: '/about',
          changefreq: 'yearly',
        },
        {
          url: '/projects',
          changefreq: 'weekly',
          priority: 0.3
        }
      ]);
    }
  }
}
