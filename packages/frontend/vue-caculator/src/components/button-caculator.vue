<template>
    <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button  @click="$emit('onClick', character)" class="rounded-full h-20 w-20 flex items-center 
      bg-purple-800 justify-center shadow-lg border-2 border-purple-700 
      hover:border-2 hover:border-gray-500 focus:outline-none">{{character}}</button>
    </div>
</template>
<script>
export default {
    name: 'buttonCaculator',
    props: ['character',]
}
</script>
