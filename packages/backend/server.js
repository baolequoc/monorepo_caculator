import 'dotenv/config';
import app from './app';
// eslint-disable-next-line camelcase
import auth_routes from './app/routes/auth.routes';
// eslint-disable-next-line camelcase
// eslint-disable-next-line import/extensions
// eslint-disable-next-line camelcase
import user_routes from './app/routes/user.routes';

import db from './app/models/index';
// database

// db.sequelize.sync();
// force: true will drop the table if it already exists
// eslint-disable-next-line no-unused-expressions
db.sequelize;

auth_routes(app);
user_routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}.`);
});
