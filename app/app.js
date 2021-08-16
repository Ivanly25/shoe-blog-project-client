'use strict'
const userEvents = require('./user/events.js')
// const shoeEvents = require('./shoe/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // before sign up/ as soon as page loads
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-shoe').hide()
  $('#read-shoes').hide()
  $('#update-shoe').hide()
  $('#delete-shoe').hide()
  $('.btn').hide()
  $('#find').hide()
  // once start signing up
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('.btn').on('click', userEvents.showForm)
  // crud for shoes
  $('#create-shoe').on('submit', userEvents.onCreateShoe)
  $('#read-shoes').on('click', userEvents.onReadShoes)
  $('#update-shoe').on('submit', userEvents.onUpdateShoe)
  $('#delete-shoe').on('submit', userEvents.onDeleteShoe)
  // shoe events
  // $('#create-shoe').on('click', shoeEvents.onCreateShoe)
})
