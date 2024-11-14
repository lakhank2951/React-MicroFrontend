const { dependencies } = require('./package.json');

module.exports = {
    name: "Container",
    filename: "remoteEntry.js",
    remotes: {
        "CoursePage": "CoursePage@http://localhost:3002/remoteEntry.js",
        "ArticlePage": "ArticlePage@http://localhost:3001/remoteEntry.js"
    },
    exposes: {},
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            import: 'react',
            shareScope: 'default',
            requiredVersion: dependencies.react
        },
        "react-dom": {
            singleton: true,
            requiredVersion: dependencies['react-dom']
        }
    }
}