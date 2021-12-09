import path from 'path';
import fs from 'fs';

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
    linkExactActiveClass: 'active shadow',
    middleware: [
      'redirects'
    ],
    extendRoutes(routes, resolve) {
      if (process.env.NODE_ENV === 'development') {
        routes.push({
          path: '/drafts/:slug',
          component: resolve(__dirname, 'pages/blog/_slug.vue')
        });
      }
    }
  },

  target: 'static',

  /*
  ** Build configuration
  */
  build: {
    parallel: true,
    cache: true,
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
    ['@nuxtjs/moment', {}]
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://ricardoboss.de',
    gzip: true,
    routes: function() {
      let postsPath = path.resolve(__dirname, "content");
      let files = fs.readdirSync(postsPath);

      let latestDate = new Date(0);
      let entries = files
        .filter(path => /\d{4}-\d{2}-\d{2}-.+\.md$/i.test(path))
        .map(path => {
          let uri = path.split('.').shift(); // remove extension
          let date = new Date(path.split('-').splice(0, 3).join('-')); // get date

          if (date > latestDate)
            latestDate = date;

          return {
            url: `/blog/${uri}`,
            changefreq: 'monthly',
            priority: 0.4,
            lastmod: date
          };
        });

      return entries.concat([
        {
          url: '/blog',
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: latestDate
        },
        {
          url: '/about',
          changefreq: 'yearly'
        },
        {
          url: '/projects',
          changefreq: 'monthly',
          priority: 0.6
        },
        {
          url: '/portfolio',
          changefreq: 'monthly',
          priority: 0.5
        },
        {
          url: '/resume',
          changefreq: 'yearly',
          priority: 0.4
        }
      ]);
    }
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-darcula.css'
      }
    }
  }
}
