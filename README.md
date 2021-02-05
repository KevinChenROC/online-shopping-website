# Start the project in local environment

1. Run the server. See [server/README.md](https://github.com/KevinChenROC/amazon-clone/tree/main/server)

2. Run the admin. See [admin/README.md](https://github.com/KevinChenROC/amazon-clone/tree/main/admin)

3. Run the client. See [client/README.md](https://github.com/KevinChenROC/amazon-clone/tree/main/client)

# Introduction

## About

This is an personal project for learning full stack web development, with the amazon-like web design.

# Frameworks and libraries

## Browser side

1. Vue.js, a component-based reactive framework
2. Nuxt.js, a framework based on Vue.js for server side rendering, automatic routing, hot-re-
   loading.
3. Vuex, a library to manage the global state for vue components
4. Axios, a library to handle promised-baed HTTP requests and responses
5. @nuxtjs/auth, a nuxt module to simply jwt-token management in the browser

## Server side (node.js)

1. Express.js, to handle network requests with middleware architecture
2. Mongoose, an Object Data Modeling (ODM) library for managing MongoDB.
3. aws-sdk multer, and multerS3, to handle photo-uploading requests.
4. jsonwebtoken, to create and verify user json webtokens for authentication
5. bcrypt, to encrypt and decrypt user passwords
6. Algolia, to search products
   1. algoliasearch, a library to interface with Algolia search API
   2. mongoose-algolia, a library to sync MongoDB with Algolia Index
7. Stripe, to handle payment service
