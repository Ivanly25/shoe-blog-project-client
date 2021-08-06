'use strict'

const store = require('./store.js')
const onSignUpSuccess = (response) => {
  $('#message').text('Thank you for signing up! Shoe Finder is glad to welcome you to the  sneaker community')
  console.log(response)
  $('#sign-up').trigger('reset')
  $('#sign-out').hide()
}
const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(`Thank you for signing in to Shoe Finder! ${response.user.email}`)
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}
const onSignInFailure = () => {
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = () => {
  $('#message').text('Thank you for signing out, see you soon!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}
const onSignOutFailure = () => {
  $('#message').text('Shoe Finder Sign out failure')
}
const onChangePasswordSuccess = () => {
  $('#change-password').trigger('reset')
  $('#message').text('You have now changed your password, please remember it!')
}
const onChangePasswordFailure = () => {
  $('#message').text('Password Change Failed')
}

const onCreateShoeSuccess = (res) => {
  $('#create-shoe').trigger('reset')
  $('#message').text('Create shoe was successful')
  store.shoe = res.shoe
  console.log(res)
}
const onCreateShoeFailure = () => {
  $('#message').text('Create shoe was not successful')
}

const onReadShoeSuccess = (res) => {
  $('#read-shoe').trigger('reset')
  $('#message').text('Read shoe was successful')
  store.shoe = res.shoe
}
const onReadShoeFailure = () => {
  $('#message').text('Read shoe was not successful')
}

const onUpdateShoeSuccess = (res) => {
  $('#messaging').text('Your shoe has been')
  $('#update-shoe').trigger('reset')
}

const onUpdateShoeFailure = () => {
  $('#message').text('Update shoe was not successful')
}

const onDeleteShoeSuccess = (res) => {
  $('#message').text('Your shoe has been deleted')
  $('#delete-shoe').trigger('reset')
}
const onDeleteShoeFailure = () => {
  $('#message').text('Delete shoe was not successful')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  // shoe module exports
  onCreateShoeSuccess,
  onCreateShoeFailure,
  onReadShoeSuccess,
  onReadShoeFailure,
  onUpdateShoeSuccess,
  onUpdateShoeFailure,
  onDeleteShoeSuccess,
  onDeleteShoeFailure
}
