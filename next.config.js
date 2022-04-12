module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'abcd'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : process.env.API_URL // production api
    },
  
}
