const routes = require('next-routes')

module.exports = routes()
    .add('index', '/')
    .add('archiveJp', '/jp')
    .add('postJp', '/jp/:id', 'post')
    .add('categoryJp', '/jp/category/:slug', 'category')
    .add('search', '/search?s=/:slug')
    .add('tag', '/tag/:slug', 'tag')
