/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import { mapActions } from 'vuex';
import Caculator from '@/components/caculator.vue';

export default {
  name: 'caculator',
  components: {
    Caculator,
  },
  methods: {
    ...mapActions({
      test: 'test', // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
  created () {
    // console.log(this.$store.state.user);
  },
};
