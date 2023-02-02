const User = require('../models/user.model');

// get user by id
exports.getUser = (req, res) => {
  //pour tester le token on utilise la route POST: api/v1/auth/login on recupere le token
  //puis on utilise /api/v1/user/637ce1f875438400b2bdfb0f headers
  console.log(req.userToken);

  User.findById(req.userToken.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
