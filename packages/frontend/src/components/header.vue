<template>
<div class="header-2">
  <nav class="bg-white py-2 md:py-4">
    <div class="container px-4 mx-auto md:flex md:items-center">
      <div class="flex justify-between items-center">
        <a href="#" class="font-bold text-xl text-indigo-600"><router-link to="/">Home </router-link></a>
        <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
          <i class="fas fa-bars"></i>
        </button> |
        <span class="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
          {{username}}
        </span>
      </div>
      <div class="absolute top-10 right-0">
        <a v-show="!authenticated" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"><router-link to="/login">Login</router-link></a>
        <a v-show="!authenticated" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"><router-link to="/register">Signup</router-link></a>
        <a v-show="authenticated" @click="logout" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Logout</a>
        </div>
      </div>
  </nav>
</div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      authenticated: false,
      username: '',
    }
  },
  async created () {
    await this.$store.dispatch('restoreSession');
    if (this.$store.state.user) {
      this.authenticated = true;
      this.username = this.$store.state.user.username;
    } else {
      this.authenticated = false;
      this.username = 'Anonymous';
    }
  },
  methods: {
      async logout() {
        this.authenticated = false;
        await this.$store.dispatch('signOut');
    }
  }
};
</script>
