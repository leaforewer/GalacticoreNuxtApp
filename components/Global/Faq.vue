<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const selectedId = ref(0);
const isOpened = ref(false);

function openItem(id: number) {
  if (selectedId.value !== id && isOpened) {
    isOpened.value = true;
    selectedId.value = id;
    return;
  }
  isOpened.value = !isOpened.value;
  selectedId.value = id;
}
</script>
<template>
  <ul class="flex flex-col justify-center items-center w-full">
    <li
      v-for="(item, index) in items"
      @click="openItem(item.id)"
      :class="[
        index === 0 ? 'rounded-t-md' : '',
        index > items.length - 2 ? 'rounded-b-md' : '',
        isOpened && item.id === selectedId
          ? 'bg-sky-400 hover:text-white hover:font-normal'
          : 'bg-[#121212]',
      ]"
      class="py-5 px-3 w-full border border-gray-500 cursor-pointer text-white hover:text-gray-400 hover:font-bold transition-all ease-in-out"
    >
      <div class="flex justify-between items-center">
        <span>{{ item.question }}</span>
        <div>
          <ChevronDownIcon
            class="h-6 w-6 transition-all"
            :class="isOpened && item.id === selectedId ? 'rotate-180' : ''"
          />
        </div>
      </div>
      <div
        :class="
          isOpened && item.id === selectedId
            ? 'max-h-[500px] p-5'
            : 'max-h-0 p-0'
        "
        class="overflow-hidden font-semibold transition-all duration-500 ease-in-out text-white"
      >
        {{ item.answer }}
      </div>
    </li>
  </ul>
</template>
