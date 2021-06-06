const {User} = require('../../models');
const {verify} = require('../../utils/bcrypt');
const {sign} = require('../../utils/jwt');

module.exports = {
  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        where: {email},
        attributes: ['id', 'name', 'email', 'password'],
      });
      if (!user) {
        return res
          .status(400)
          .send({success: false, message: 'Account not found'});
      }
      const result = await verify(password, user.password);
      if (!result) {
        return res
          .status(400)
          .send({success: false, message: 'password not match'});
      }

      const token = sign({
        id: user.id,
        name: user.name,
        email: user.email,
      });
      return res.status(200).send({
        success: true,
        token,
        user: {id: user.id, name: user.name, email: user.email},
      });
    } catch (error) {
      return res.send({success: false, message: 'Serve Error!', error});
    }
  },
};
