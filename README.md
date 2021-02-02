# Start the project in local environment

1. Run the server. See [server/README.md](https://github.com/KevinChenROC/amazon-clone/tree/main/server)

2. Run the admin. See [admin/README.md](https://github.com/KevinChenROC/amazon-clone/tree/main/admin)

3. Run the client. See [client/README.md](https://github.com/KevinChenROC/amazon-clone/tree/main/client)

# Frameworks and libraries

## Browser side

1. Vue.js, a component-based framework
2. Vuex, a library to manaage the global state for vue components
3. Nuxt.js, a framework based on Vue.js for server side rendering, automatic routing, hot-re-
   loading.
4. Axios, a library to handle promised-baed HTTP requests and responses
5. @nuxtjs/auth, a nuxt module to simply jwt-token management in the browser

## Server side

1. Express.js, a framework to handle network requests with middleware architecture
2. Mongoose, an Object Data Modeling (ODM) library for managing MongoDB.
3. aws-sdk multer, and multerS3, to handle photo-uploading requests.
4. jsonwebtoken, to create and verify user json webtokens for authentication
5. bcrypt, to encrypt and decrypt user passwords
