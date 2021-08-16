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
// create shoe
const onCreateShoe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .createShoe(data)
    .then(api.readShoes)
    .then(ui.onReadShoesSuccess)
    .catch(ui.onReadShoesFailure)
    .then(ui.onCreateShoeSuccess)
    .catch(ui.onCreateShoeFailure)
}
// all shoes
const onReadShoes = function (event) {
  event.preventDefault()
  api.readShoes()
    .then(ui.onReadShoesSuccess)
    .catch(ui.onReadShoesFailure)
}

const onUpdateShoe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  const id = data.shoe.id
  api
    .updateShoe(id, data)
    .then(api.readShoes)
    .then(ui.onReadShoesSuccess)
    .catch(ui.onReadShoesFailure)
    .then(ui.onUpdateShoeSuccess)
    .catch(ui.onUpdateShoeFailure)
}
// delete shoe
// delete then update read shoes list
const onDeleteShoe = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .deleteShoe(data.shoe.id)
    .then(ui.onDeleteShoeSuccess)
    .then($('#shoe_list').empty())
    .catch(ui.onDeleteShoeFailure)
  api.readShoes()
    .then(ui.onDeleteShoeReadSuccess)
}
// shows form for button that is clicked on
const showForm = function (event) {
  const btnId = $(event.target).attr('id')
  if (btnId === 'create') {
    $('#create-shoe').show()
    $('#read-shoes').hide()
    $('#update-shoe').hide()
    $('#delete-shoe').hide()
  }
  if (btnId === 'read') {
    $('#read-shoes').show()
    $('#update-shoe').hide()
    $('#delete-shoe').hide()
    $('#create-shoe').hide()
  }
  if (btnId === 'update') {
    $('#update-shoe').show()
    $('#create-shoe').hide()
    $('#delete-shoe').hide()
    $('#read-shoes').hide()
  }
  if (btnId === 'delete') {
    $('#delete-shoe').show()
    $('#read-shoes').hide()
    $('#create-shoe').hide()
    $('#update-shoe').hide()
  }
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  onCreateShoe,
  onUpdateShoe,
  onDeleteShoe,
  onReadShoes,
  showForm

}
