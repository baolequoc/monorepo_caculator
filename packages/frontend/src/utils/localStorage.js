/* eslint-disable no-undef */
const itemName = 'accessToken';
const itemUser = 'user';
const itemHistory = 'history';
// eslint-disable-next-line import/prefer-default-export
export const getTokenLocal = () => localStorage.getItem(itemName);

export const setTokenLocal = (token) => localStorage.setItem(itemName, token);

export const removeTokenLocal = () => localStorage.removeItem(itemName);

export const setAuth = (authData) => localStorage.setItem(itemUser, JSON.stringify(authData));

export const removeAuth = () => localStorage.removeItem(itemUser);

export const getAuth = () => JSON.parse(localStorage.getItem(itemUser));

export const setHistory = (value) => localStorage.setItem(itemHistory, value);

export const getHistory = () => localStorage.getItem(itemHistory);
