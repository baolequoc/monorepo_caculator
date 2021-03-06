/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import InputForm from '@/components/input-form.vue';
import projectApi from '@/service/projectApi';
import modalNotification from '@/components/modalNotification.vue';
import Header from '@/components/header.vue';

export default {
  name: 'register',
  components: {
    InputForm, modalNotification, Header,
  },
  data() {
    return {
      message: '',
      inputs: [
        {
          name: 'username',
          label: 'Username',
          value: '',
          type: 'text',
        },
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
        {
          name: 'repassword',
          label: 'Cornfirm password',
          value: '',
          type: 'password',
        },
      ],
      showModal: false,
      title: '',
    };
  },
  methods: {
    async handleSubmit() {
      // get value input
      const username = this.inputs[0].value;
      const email = this.inputs[1].value;
      const password = this.inputs[2].value;
      const confirmPassword = this.inputs[3].value;
      // check math password
      if (confirmPassword !== password) {
        this.message = 'Password and confirm password not math!';
      } else {
        // send value signup
        try {
          const reponse = await projectApi.signup({
            username,
            email,
            password,
          });
          this.title = reponse.data.message;
          this.showModal = true;
          // sigin
          await this.$store.dispatch('signIn', {
            email,
            password,
          });
          this.$router.push('home');
        } catch (err) {
          this.message = err.response.data.message;
        }
      }
    },
  },
};
