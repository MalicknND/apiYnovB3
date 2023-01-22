const User = require('../models/user.model');

exports.register = async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
    zipCode: req.body.zipCode,
    phone: req.body.phone,
    typeOfUser: req.body.typeOfUser,
  });

  try {
    const newUserToSave = await newUser.save();
    return res.send(newUserToSave);
  } catch (error) {
    res.status(400).send(error);
  }
};

//connexion
exports.login = (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password }).then(
    (user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.send(user);
    }
  );
};
