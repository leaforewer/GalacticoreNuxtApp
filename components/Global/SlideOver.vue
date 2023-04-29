<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

defineProps({
  content: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
</script>
<template>
  <button
    @click="isOpen = true"
    class="text-gray-800 rounded-lg p-4 bg-gray-300 hover:bg-gray-400 transition-all ease-in-out w-full"
  >
    Select a {{ content }}
  </button>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" @close="isOpen = false">
      <div class="fixed inset-0" />
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-xl">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-gray-100 pb-6 shadow-xl"
                >
                  <div class="px-4 sm:px-6 py-8 bg-[#121212] rounded-b-lg">
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        class="text-xl font-semibold leading-6 text-gray-300"
                        >Select Your {{ content }}</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                          @click="isOpen = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-7 w-7" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <slot />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
