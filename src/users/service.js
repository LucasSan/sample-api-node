const fs = require('fs')

const UserService = {
  create,
  one
}

function create(payload) {
  console.log(
    '[sample-node-api] => [users/service.js] => [create] => Creating users.'
  )

  return new Promise((resolve, reject) => {
    try {
      const user = Object.assign({}, payload)

      fs.appendFile('db.json', JSON.stringify(user), function (err) {
        if (err) return console.log(err)
        return resolve()
      })
    } catch (err) {
      console.log(
        `[sample-node-api] => [users/service.js] => [create] => ${err.message}`
      )
      return reject(err)
    }
  })
}

function one(query) {
  console.log(
    '[sample-node-api] => [users/service.js] => [one] => Geting one billet by query.'
  )

  return new Promise((resolve, reject) => {
    try {
      const workedQuery = Object.assign({}, query)

      // Billet.findAll({
      //   where: {
      //     domain_account_id: workedQuery.code
      //   }
      // })
      //   .then(item => {
      //     return resolve(item)
      //   })
      //   .catch(err => {
      //     return reject(err)
      //   })
    } catch (err) {
      console.log(`[sample-node-api] => [users/service.js] => [one] => ${err}.`)
      return reject(err)
    }
  })
}

module.exports = function factory() {
  return UserService
}
