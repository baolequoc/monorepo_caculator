import { secret } from '../config/auth.config';

const jwt = require('jsonwebtoken');


function verify (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

function getSignedToken (data) {
  return new Promise((resolve, reject) => {
    jwt.sign(data, secret, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

module.exports = {
  verify,
  getSignedToken,
};
