'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// const store = require('./store')
// const { data } = require('jquery')

const onSignUp = function (event) {
  event.preventDefault()
  // get info from event and form
  const form = event.target
  const data = getFormFields(form)
  // make an api call using AJAX
  // handle successful api call with .then
  // handle failed api call with .catch
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  // get info from event and form
  const form = event.target
  const data = getFormFields(form)
  // make an api call using AJAX
  // handle successful api call with .then
  // handle failed api call with .catch
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onSignOut = function (event) {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onCreateShoe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createShoe(data)
    .then(ui.onCreateShoeSuccess)
    .catch(ui.onCreateShoeFailure)
}
// all shoes
const onReadShoes = function (event) {
  event.preventDefault()
  api.readShoe.index()
    .then(ui.onReadShoesSuccess)
    .catch(ui.onReadShoesFailure)
}
const onReadShoe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.readShoe(data)
    .then(ui.onReadShoeSuccess)
    .catch(ui.onReadShoeFailure)
}
const onUpdateShoe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.shoe.id
  api.updateShoe(data, id)
    .then(ui.onUpdateShoeSuccess)
    .catch(ui.onUpdateShoeFailure)
}

const onDeleteShoe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteShoe(data.shoe.id)
    .then(ui.onDeleteShoeSuccess)
    .then(ui.onDeleteShoeFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  onCreateShoe,
  onReadShoe,
  onUpdateShoe,
  onDeleteShoe,
  onReadShoes

}
