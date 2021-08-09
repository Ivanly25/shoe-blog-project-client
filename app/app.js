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
  $('#read-shoe').hide()
  $('#update-shoe').hide()
  $('#delete-shoe').hide()
  // once start signing up
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').show()
  $('#change-password').show()
  $('#create-shoe').show()
  $('#read-shoe').show()
  $('#update-shoe').show()
  $('#delete-shoe').show()
  // crud for shoes
  $('#create-shoe').on('submit', userEvents.onCreateShoe)
  $('#read-shoe').on('submit', userEvents.onReadShoe)
  $('#update-shoe').on('submit', userEvents.onUpdateShoe)
  $('#delete-shoe').on('submit', userEvents.onDeleteShoe)
  // shoe events
  // $('#create-shoe').on('click', shoeEvents.onCreateShoe)
})
