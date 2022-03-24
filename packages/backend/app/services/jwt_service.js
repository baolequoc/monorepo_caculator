import { secret } from '../config/auth.config';

const jwt = require('jsonwebtoken');


export const verify = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

export const getSignedToken = (data) => new Promise((resolve, reject) => {
  jwt.sign(data, secret, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});
