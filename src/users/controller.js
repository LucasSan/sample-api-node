const USER = require('./service')
const userService = USER()

const UserController = {
  create,
  getByCode
}

const create = (req, res) => {
  const { body } = Object.assign({}, req)

  userService
    .create(body)
    .then(result =>
        res.status(200).send({ service: 'user', msg: result })
    )
    .catch(err => {
      res
        .status(400)
        .send({ service: 'user', msg: err.message })
    })
}

const getByCode = (req, res) => {
  const { code } = Object.assign({}, req.params)

  userService
    .one({ code })
    .then(result => {
      if (!result.length) {
        return res
          .status(404)
          .send({ service: 'user', msg: 'user not found' })
      }
      return res
        .status(200)
        .send(result)
    })
    .catch(err => {
      res
        .status(500)
        .send({ service: 'user', msg: `Server error. ${err.message}` })
    })
}

module.exports = () => UserController
