const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\Abstract\\abstract\\src\\pages\\404.js"))),
  "component---src-pages-creative-2-index-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\Abstract\\abstract\\src\\pages\\creative-2\\index.js"))),
  "component---src-pages-creative-video-1-index-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\Abstract\\abstract\\src\\pages\\creative-video-1\\index.js"))),
  "component---src-pages-creative-video-2-index-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\Abstract\\abstract\\src\\pages\\creative-video-2\\index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\Abstract\\abstract\\src\\pages\\index.js"))),
  "component---src-pages-personal-index-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\Abstract\\abstract\\src\\pages\\personal\\index.js"))),
  "component---src-pages-personal-video-index-js": hot(preferDefault(require("C:\\Users\\duart\\Desktop\\Lucas\\Gatsby\\Abstract\\abstract\\src\\pages\\personal-video\\index.js")))
}

