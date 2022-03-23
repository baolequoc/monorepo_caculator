<template>
<!-- Main modal -->
<div id="defaultModal"
  class="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal md:h-full md:inset-0">
  <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
          Error
        </h3>
      </div>
      <!-- Modal body -->
      <div class="p-6 space-y-6">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {{title}}
        </p>
      </div>
      <!-- Modal footer -->
      <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <button data-modal-toggle="defaultModal" type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="$emit('onClose')">OK</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 export default {
  name: 'ModalNotification',
  props: ['title',],
}
</script>

