import verifySignUp from '../middleware/verifySignUp';
import { signup, signin } from '../controllers/auth.controller';

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.post(
    '/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    signup,
  );

  app.post('/auth/signin', signin);
};
