'use strict'

const store = require('./store')
const config = require('../config')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
// sign in
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
// sign out
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// change password
// PATCH
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/change-password',
    headers: { Authorization: `Bearer ${store.user.token}` }
  })
}
// create shoe
const createShoe = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/shoes',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
// read shoes
// get all shoes
const readShoes = function () {
  return $.ajax({
    url: config.apiUrl + '/shoes',
    method: 'GET'
  })
}
// read shoe
// get one shoe
const readShoe = function (data) {
  return $.ajax({
    method: 'GET',
    data,
    url: config.apiUrl + '/shoes',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }

  })
}
// update shoe
// PATCH
const updateShoe = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + 'shoes/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
// delete shoe
// DELETE
const deleteShoe = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'shoes/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createShoe,
  readShoe,
  updateShoe,
  deleteShoe,
  readShoes
}
