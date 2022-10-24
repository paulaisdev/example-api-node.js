import controller from '../controllers/AuthController';

export default (app) => {
    app.post('/api/auth/signin', controller);
};