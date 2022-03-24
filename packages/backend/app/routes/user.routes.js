import authJwt from '../middleware/authJwt';
import { caculateExpression } from '../controllers/data.controller';
import { getHistory, saveHistory } from '../controllers/user.controller';

export default function (app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.post('/user/history', [authJwt.decodeUserIdByToken], saveHistory);

  app.post('/caculate', caculateExpression);

  app.get('/user/history', [authJwt.decodeUserIdByToken], getHistory);
}
