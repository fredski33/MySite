// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/dupouy/Documents/A_cab/MySite/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-jsx": () => import("/home/dupouy/Documents/A_cab/MySite/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/dupouy/Documents/A_cab/MySite/.cache/data.json")

