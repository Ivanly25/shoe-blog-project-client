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
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/change-password',
    headers: { Authorization: `Bearer ${store.user.token}` }
  })
}
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
  deleteShoe
}
