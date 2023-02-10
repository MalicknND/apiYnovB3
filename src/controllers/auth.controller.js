const User = require('../models/user.model');
const nodemailer = require('nodemailer');
//importation de jwt pour le token
const jwt = require('jsonwebtoken');
//cryptage de mot de passe
const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 10);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hashedPassword,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    zipCode: req.body.zipCode,
    phone: req.body.phone,
    typeOfUser: req.body.typeOfUser,
  });

  try {
    const newUserToSave = await newUser.save();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'apiprojet83@gmail.com',
        pass: 'ixxrqayxbfzvdzsb',
      },
      tls: {
        rejeectUnauthorized: false,
      },
    });
    const mailOpitons = {
      from: 'apiprojet83@gmail.com',
      to: newUser.email,
      cc: 'ndiayemalick062@gmail.com',
      subject: "Confirmation de l'inscription",
      text: `Bonjour ${newUser.firstName}, votre inscription est confirmée.`,
    };
    transporter.sendMail(mailOpitons, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });

    return res.send({ message: 'Your account is successfully created' });
  } catch (err) {
    //res.status(400).send(error);
    next(err);
  }
};

//connexion
exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'user not found',
        });
      }

      //voir si le mot passe crypté correspond a celui qui est en base de données
      let passwordValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordValid) {
        return res.status(401).send({
          message: 'password not valid',
          auth: false,
        });
      }
      //génération du token
      let userToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET
      );
      res.send({
        message: 'User logged',
        auth: true,
        //on rend le userToken
        token: userToken,
      });
    })
    .catch((err) => res.status(400).send(err));
};
