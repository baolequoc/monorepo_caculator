import authJwt from '../middleware/authJwt';
import { saveData, exportData, getData } from '../controllers/data.controller';


export default function (app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.post('/api/savedata', [authJwt.decodeUserIdByToken], saveData);

  app.post('/api/getdata', exportData);

  app.get('/api/getdata', [authJwt.decodeUserIdByToken], getData);
}
