const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://jordanemichon.fr',
  pagesDirectory: __dirname + '/src/pages',
  targetDirectory: 'public/',
  ignoredExtensions: ['js', 'map'],
  ignoredPaths: ['[fallback]'],
});
