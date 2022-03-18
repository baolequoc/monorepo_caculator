/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import {
  getToken, removeToken, setToken, setAuth, removeAuth, getAuth,
} from '@/utils/localStorage';
import projectApi from '@/service/projectApi';

export const state = () => ({
  user: null,
});

export const actions = {
  restoreSession ({ commit }) {
    const user = getAuth();
    console.log('reset session');
    if (!user) { return; }
    commit('setUser', user);
  },
  async signIn ({ commit }, payload) {
    try {
      console.log('aaaaaaaaaa');
      const res = await projectApi.signin(payload);
      console.log(res);
      if (res.status === 200) {
        const user = res.data;
        setToken(user.accessToken);
        setAuth(user);
        console.log(`Đăng nhập với tên là ${user.username}`);
        commit('setUser', user);
      }
    } catch (err) {
      console.log(err);
    }
  },
  signOut () {
    removeAuth();
    removeToken();
    location.reload();
    // eslint-disable-next-line quotes
    console.log(`Đăng xuất`);
  },
  test () {
    console.log('test sussucess');
  },
};

export const getters = {
};

export const mutations = {
  setUser (state, user) {
    state.user = user;
  },
};
