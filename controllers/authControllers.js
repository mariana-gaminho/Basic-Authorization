const bcrypt = require('bcrypt')
const User = require('../models/user')

exports.getSignUp = (req, res) => {
  res.render('auth/signup')
}

// exports.postSignUp = (req, res) => {
//   const { username, password } = req.body

//   const salt = bcrypt.genSaltSync(10)
//   const hashPassword = bcrypt.hashSync(password, salt)
//   res.send({username, hashPassword})

//   // revisar si el usuario ya existe
//   User.find({ username })
//   // revisar si tenemos usuario y contraseña

//   // crear al usuario en la base de datos
// }

//------Lo mismo de arriba pero con Async y Await
exports.postSignUp = async (req, res) => {
  const { username, password } = req.body

  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt)

  // revisar si el usuario ya existe
  const users = await User.find({ username })

  if(users. length !== 0){
    return res.render('auth/signup', {
      errorMessage: 'User already exists'
    })
  }

  // revisar si tenemos usuario y contraseña
  if(username === '' || password === ''){
    return res.render('auth/signup', {
      errorMessage: 'Empty password'
    })
  }

  // crear al usuario en la base de datos
  await User.create({ username, password: hashPassword})

  res.redirect('/')
}