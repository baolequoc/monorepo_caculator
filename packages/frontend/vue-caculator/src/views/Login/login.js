/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import InputForm from '@/components/input-form.vue';
import store from '@/store/index';
// eslint-disable-next-line import/order
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved

export default {
  name: 'login',
  components: {
    InputForm,
  },
  created () {
  },
  data () {
    return {
      message: '',
      inputs: [
        {
          name: 'email',
          label: 'Email address',
          value: '',
          type: 'email',
        },
        {
          name: 'password',
          label: 'Password',
          value: '',
          type: 'password',
        },
      ],
    };
  },
  methods: {
    async handleSubmit () {
      // get value input
      const email = this.inputs[0].value;
      const password = this.inputs[1].value;
      // send value
      try {
        const response = await axios.post('http://localhost:3000/api/auth/signin', {
          email,
          password,
        });
        // save token in localStorage
        if (response.data.accessToken) {
          // eslint-disable-next-line no-undef
          localStorage.setItem('accessToken', response.data.accessToken);
          this.$router.push('home');
        }
      } catch (err) {
        this.message = err.response.data.message;
      }
    },
  },
};
