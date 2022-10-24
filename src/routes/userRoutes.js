import UserController from '../controllers/UserController';
import verifyToken from '../middlewares/authJwt';

export default (app) => {
  // USER ROUTES
  //app.get(`/api`,)
  app.get(`/api/user/all`, UserController.getAll);
  app.get(`/api/user/:params`, UserController.get);
  app.post(`/api/user/create`, [verifyToken], UserController.insert)
  app.put(`/api/user/:id`, [verifyToken], UserController.update);
  app.delete(`/api/user/:id`, [verifyToken], UserController.delete);
}