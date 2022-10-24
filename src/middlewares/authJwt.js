import jwt from "jsonwebtoken";
import secret from "../../config/authConfig";

// Insira aqui o método `verifyToken` responsável por verificar se o token é válido
// e existe na requisição realizada pelo usuário
const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Não autorizado.' });
    }
    req.userId = decoded.id;
    next();
  });
};


export default verifyToken;
