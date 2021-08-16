// user require with a reference to bundle the file and use it in this file
// const userEvents = require('./user')

// import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.scss')
