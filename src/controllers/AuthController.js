import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import secret from '../../config/authConfig';
import User from '../models/User';

const db = new User().getInstance()

export default (req, res) => {
    db.findOne({
      username: req.body.username,
    })
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!user) {
          return res.status(404).send({ message: 'User not found' });
        }
  
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: 'Wrong credentials',
          });
        }
  
        const token = jwt.sign({ id: user.id }, secret, {
          expiresIn: 86400 // 24 horas
        });
  
        res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
};