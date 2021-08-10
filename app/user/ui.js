'use strict'

const store = require('./store.js')
const onSignUpSuccess = (response) => {
  $('#message').text('Thank you for signing up! Shoe Finder is glad to welcome you to the  sneaker community')
  console.log(response)
  $('#sign-up').trigger('reset')
  $('#sign-out').hide()
  $('#change-password').hide()
}
const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text('Thank you for signing in to Shoe Finder!')
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.btn').show()
  $('#find').show()
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
  $('#change-password').hide()
  $('#create-shoe').hide()
  $('#read-shoes').hide()
  $('#update-shoe').hide()
  $('#delete-shoe').hide()
  $('.btn').hide()
  $('#find').hide()
  $('.ul').hide()
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
// shoe section of ui`s
const onCreateShoeSuccess = (res) => {
  $('#message').text('Create shoe was successful')
  $('#create-shoe').trigger('reset')
}
const onCreateShoeFailure = () => {
  $('#message').text('Create shoe was not successful')
}

const onReadShoesSuccess = (response) => {
  const shoes = response.shoes
  $('#message').text('Show shoes Success')
  // look through shoes to look at each index
  const shoesHtml = shoes.map((shoe) => {
    // create html to display each individual shoe
    const htmlString = `
      <li>
      id: ${shoe._id}
      brand: ${shoe.brand}
      model: ${shoe.model}
      price: ${shoe.price}
      </li>
    `
    return htmlString
  })
  // put html in dom tree
  $('#shoe_list').html(shoesHtml)
  $('#delete-shoe').show()
  $('#update-shoe').show()
}

const onReadShoesFailure = () => {
  $('#message').text('Read shoe was not successful')
}

const onUpdateShoeSuccess = (res) => {
  $('#messaging').text('Your shoe has been updated')
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
  onReadShoesSuccess,
  onReadShoesFailure,
  onUpdateShoeSuccess,
  onUpdateShoeFailure,
  onDeleteShoeSuccess,
  onDeleteShoeFailure
}
