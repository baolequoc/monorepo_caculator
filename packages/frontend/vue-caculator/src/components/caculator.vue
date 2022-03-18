<template>
  <button type="button" v-if="login" class="btn btn-primary" @click="logout">Logout</button>
  <div class="home">
    <div class="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-800 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <modalNotification :title="title" v-show="showModal" @onClose="this.showModal =false"/>
      <div class="">
        <div class="p-5 text-white text-center text-3xl bg-purple-900"><span class="text-orange-500">Calcu</span>lator</div>
        <div class="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">
          <div class="md:container md:mx-auto">
            <p v-for="val in history" :key="val">{{val}}</p>
              <p>{{value}}</p> 
          </div>
          </div>
        <div class="p-5 text-white text-right text-3xl bg-purple-800"><span class="text-orange-500">{{result}}</span></div>
        <div v-for="(buttons,i) in rows" :key="i"  class="flex items-stretch bg-purple-900 h-24">
            <buttonCaculator v-for="button in buttons" 
            :key="button"
            @on-click="handleEvent"
            :character="button"
            />
        </div>
    </div>
  </div>
 </div>
</template>
<script>


  /* eslint-disable import/no-unresolved */
// @ is an alias to /src
import modalNotification from "./modalNotification.vue"
import buttonCaculator from './button-caculator.vue';
import projectApi from '@/service/projectApi';
import axios from 'axios';
import {
  getHistory, setHistory,
} from '@/utils/localStorage';

export default {
  name: 'Caculator',
  components: {
    buttonCaculator,modalNotification,
  },
  async created () {
    if (localStorage.getItem('accessToken')) {
      try {
        const response = await projectApi.getHistory();
        this.value = response.data.history + '';
        this.login = true;

      } catch (error) {
        console.log(error);
        this.title = 'Something went wrong, please login again!';
        this.showModal =true;
      }
      // get history from localStorage
    } else {
      if (localStorage.getItem('history')) {
        this.value = localStorage.getItem('history');
      }
    }
  },
  data () {
    return {
      valueHistory: '0',
      value: '0',
      result: '0',
      login: false,
      history: [],
      rows: [
        ['AC', 'C', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['^', '0', '.', '='],
      ],
      showModal: false,
      title: '',
    };
  },
  methods: {
    handleEvent (character) {
      if (character === 'AC') {
        this.clearAll();
      } else if (character === 'C') {
        this.clear();
      } else if (character === '=') {
        this.submmitData();
      } else {
        this.append(character);
      }
    },
    append (val) {
      if (this.value.charAt(0) === '0') {
        this.value = `${val}`;
      } else {
        this.value = `${this.value}${val}`;
      }
    },
    clear () {
      if (this.value.length === 1) {
        this.value = '0';
      } else {
        this.value = this.value.slice(0, -1);
      }
    },
    clearAll () {
      this.value = '0';
    },
    async submmitData () {
      // calculate expression
      try {
        const valueSend = { "value": this.value };
        const response = await projectApi.getValue(valueSend);
        this.result = '=' + response.data.value;
        this.history.push(this.value);
        if (this.login) {
          // save history to database
          if (localStorage.getItem('accessToken')) {

            const sendHistory = { "history": this.value };
            projectApi.saveData(valueSend);
          }
        }
        else {
          // save to localStorage
          localStorage.setItem('history', this.value);
        }
        this.value = response.data.value + '';
      } catch (e) {
        console.log(e);
        this.title = 'Something went wrong, please login again!';
        this.showModal = true;
      }
  },
  logout() {
      // remove token in localStorage
      this.login = false;
      localStorage.removeItem('accessToken');
  },
  },
};
</script>
