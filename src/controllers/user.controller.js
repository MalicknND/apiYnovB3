const User = require('../models/user.model');

// get user by id
exports.getUser = async (req, res, next) => {
  //pour tester le token on utilise la route POST: api/v1/auth/login on recupere le token
  //puis on utilise /api/v1/user/637ce1f875438400b2bdfb0f headers
  console.log(req.userToken);
  try {
    const user = await User.findById(req.userToken.id);
    if (!user) {
      return res.status(400).json({ success: false });
    }
    res.status(200).send({ success: true, user: user });
  } catch (err) {
    res.status(400).send({ success: false });
  }
};

//update user by id
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });

  User.findById(req.params.id)
    .then((userupdated) => {
      res.send(userupdated);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

//deleteUser by id
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
//get all users
exports.getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
