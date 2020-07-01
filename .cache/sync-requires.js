const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/harryray/Desktop/Sites/_/harryray/v2/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/harryray/Desktop/Sites/_/harryray/v2/portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/harryray/Desktop/Sites/_/harryray/v2/portfolio/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/harryray/Desktop/Sites/_/harryray/v2/portfolio/src/pages/using-typescript.tsx"))),
  "component---src-templates-blog-single-template-js": hot(preferDefault(require("/Users/harryray/Desktop/Sites/_/harryray/v2/portfolio/src/templates/blog-single-template.js"))),
  "component---src-templates-portfolio-single-template-js": hot(preferDefault(require("/Users/harryray/Desktop/Sites/_/harryray/v2/portfolio/src/templates/portfolio-single-template.js")))
}

