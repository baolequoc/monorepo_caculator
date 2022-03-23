/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import InputForm from '@/components/input-form.vue';
// eslint-disable-next-line import/order

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
        await this.$store.dispatch('signIn', { email, password });
        this.$router.push('home');
      } catch (err) {
        this.message = err.response.data.message;
      }
    },
  },
};
