<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  navigation: {
    type: Array,
    required: true,
  },
  homePage: {
    type: String,
    required: true,
  },
});

const navigation = reactive(props.navigation);
const isOpen = ref(false);
const selectedNav = ref();
const mobileSubNavisOpen = ref(false);
</script>
<template>
  <!-- mobile menu -->
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-40 lg:hidden" @close="isOpen = false">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <DialogPanel
            class="relative flex w-full max-w-sm flex-col overflow-y-auto bg-[#191919] pb-12 shadow-xl"
          >
            <div class="flex px-4 pb-2 pt-5">
              <button
                type="button"
                class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                @click="isOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div
              class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#191919] px-6"
            >
              <div class="flex h-20 shrink-0 items-center">
                <img
                  class="h-20 w-auto"
                  src="/img/galacticore-logo.png"
                  alt=""
                />
              </div>
              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" class="-mx-2 space-y-1">
                      <li v-for="navItem in navigation" :key="navItem.name">
                        <a
                          v-if="navItem.href"
                          @click="selectedNav = navItem.name"
                          :href="navItem.href"
                          :class="[
                            selectedNav === navItem.name
                              ? 'bg-[#222222]'
                              : 'hover:bg-[#222222]',
                            'block rounded-md py-4 pr-2 pl-6 text-base leading-6 font-semibold text-gray-200',
                          ]"
                          >{{ navItem.name }}</a
                        >
                        <div v-else>
                          <button
                            @click="mobileSubNavisOpen = !mobileSubNavisOpen"
                            :class="[
                              selectedNav === navItem.name
                                ? 'bg-[#222222]'
                                : 'hover:bg-[#222222]',
                              'flex justify-between items-center w-full text-left rounded-md p-4 pl-6 gap-x-3 text-base leading-6 font-semibold text-gray-200',
                            ]"
                          >
                            {{ navItem.name }}
                            <ChevronRightIcon
                              :class="[
                                mobileSubNavisOpen
                                  ? 'rotate-90 text-gray-500'
                                  : 'text-gray-400',
                                'h-5 w-5 shrink-0 mr-5 transition-all ease-in-out',
                              ]"
                              aria-hidden="true"
                            />
                          </button>
                          <ul
                            :class="
                              mobileSubNavisOpen
                                ? 'translate-x-0'
                                : 'translate-x-full'
                            "
                            class="mt-1 px-2 transform transition-all ease-in-out"
                          >
                            <li
                              v-for="subItem in navItem.subNavigation"
                              :key="subItem.name"
                            >
                              <a
                                :href="subItem.href"
                                class="block rounded-md py-4 pr-2 pl-9 text-base leading-6 text-gray-200 hover:bg-[#222222]"
                              >
                                {{ subItem.name }}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
  <!--  end mobile menu -->
  <!-- navigation -->
  <header
    class="relative z-20 transition-all ease-in-out duration-1000"
    v-bind="$attrs"
  >
    <nav aria-label="Top" class="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div>
        <div class="flex h-16 items-center">
          <button
            type="button"
            class="rounded-md p-2 text-gray-200 lg:hidden"
            @click="isOpen = true"
          >
            <span class="sr-only">isOpen menu</span>
            <ShapeShiftG />
          </button>
          <!-- Logo -->
          <div class="ml-auto flex lg:ml-0">
            <NuxtLink :href="homePage">
              <span class="sr-only">Galacticore NFT</span>
              <img class="h-20 w-auto" src="/img/galacticore-logo.png" alt="" />
            </NuxtLink>
          </div>
          <PopoverGroup
            v-if="navigation.length"
            class="hidden lg:ml-auto lg:block lg:self-stretch"
          >
            <div class="flex h-full space-x-8">
              <Popover
                v-for="navItem in navigation"
                :key="navItem.name"
                class="flex relative"
              >
                <div class="relative flex">
                  <NuxtLink
                    v-if="navItem.href"
                    :href="navItem.href"
                    @click="selectedNav = navItem.name"
                    class="group/navItem text-gray-300 overflow-hidden hover:text-gray-400 border-0 relative tracking-wider z-10 -mb-px flex justify-center items-center pt-px text-lg font-medium duration-200 ease-out"
                  >
                    {{ navItem.name }}
                    <span
                      :class="selectedNav === navItem.name ? 'w-full' : ''"
                      class="transition-all ease-in-out h-0.5 w-0 absolute left-0 bottom-0 bg-white group-hover/navItem:w-full"
                    ></span>
                  </NuxtLink>
                  <PopoverButton
                    v-else
                    :class="[
                      isOpen
                        ? 'border-gray-200 text-gray-200'
                        : 'border-transparent text-gray-300 hover:text-gray-400',
                      'group/navItem text-gray-300 overflow-hidden hover:text-gray-400 border-0 relative tracking-wider z-10 -mb-px flex justify-center items-center pt-px text-lg focus-visible:outline-0 font-medium duration-200 ease-out',
                    ]"
                  >
                    {{ navItem.name }}
                    <span
                      :class="selectedNav === navItem.name ? 'w-full' : ''"
                      class="transition-all ease-in-out h-0.5 w-0 absolute left-0 bottom-0 bg-white group-hover/navItem:w-full"
                    ></span>
                  </PopoverButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    class="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#181818] shadow-[0_35px_60px_-15px_rgba(255,255,255,0.1)] ring-1 ring-gray-900/5"
                  >
                    <div class="p-4">
                      <div
                        v-for="subItem in navItem.subNavigation"
                        :key="subItem.name"
                        class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#202020]"
                      >
                        <div
                          class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                        >
                          <component
                            :is="subItem.icon"
                            class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div class="flex-auto">
                          <a
                            :href="subItem.href"
                            class="block font-semibold text-base text-gray-200"
                          >
                            {{ subItem.name }}
                            <span class="absolute inset-0" />
                          </a>
                          <p class="mt-1 text-gray-400">
                            {{ subItem.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>
          </PopoverGroup>
        </div>
      </div>
    </nav>
  </header>
  <!--  end navigation -->
</template>
