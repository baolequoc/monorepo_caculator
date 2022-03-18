<template>
         <div>
          <label for="label" class="sr-only">{{label}}</label>
          <input :id="name" :name="name" :type="type" v-model="inputValue" 
            autocomplete="current-password" required 
            class="appearance-none rounded-none relative block w-full px-3 py-2 border 
            border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none
             focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" :placeholder="label"
             >
        </div>
</template> 

<script>
export default{
    name: 'InputForm',
    props: ['name','label','type','modelValue'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>
