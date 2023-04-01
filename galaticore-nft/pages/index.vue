<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import {ref} from 'vue';
import {
  Dialog,
  DialogPanel, Disclosure, DisclosureButton, DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {Bars3Icon, ChevronRightIcon, DocumentTextIcon, PuzzlePieceIcon, XMarkIcon} from '@heroicons/vue/24/outline';


useHead({
  bodyAttrs: {
    class: "font-sans antialiased",
  },
  htmlAttrs: {
    class: "h-full bg-[#121212] overflow-hidden",
  },
});

const navigation = reactive([
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Roadmap",
        href: "#roadmap",
      },
      {
        name: "Team",
        href: "#team",
      },
      {
        name: "F.a.q",
        href: "#faq",
      },
      {
        name: "Utility",
        subNavigation: [
          {
            name: "Build a Warrior",
            description: "Create a unique digital collectible using the space-themed and futuristic design elements characteristic of the Galacticore series",
            href: "/build-a-warrior",
            icon: PuzzlePieceIcon,
          },
          {
            name: "White Paper",
            description: "Learn about the technical details, use cases, and potential benefits of a specific NFT project or platform.",
            href: "/docs",
            icon: DocumentTextIcon,
          }
        ]
      }
    ]
);
const selectedNav = ref();
const mobileSubNavOpen = ref(false);
const open = ref(false)
</script>
<template>
  <div class="bg-transparent">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                         enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                         leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25"/>
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                           enter-from="-translate-x-full" enter-to="translate-x-0"
                           leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                           leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-sm flex-col overflow-y-auto bg-[#191919] pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                        @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
                </button>
              </div>

              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#191919] px-6">
                <div class="flex h-20 shrink-0 items-center">
                  <img class="h-20 w-auto" src="/img/galacticore-logo.png" alt=""/>

                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="navItem in navigation" :key="navItem.name">
                          <a v-if="navItem.href" @click="selectedNav = navItem.name" :href="navItem.href"
                             :class="[selectedNav === navItem.name ? 'bg-[#222222]' : 'hover:bg-[#222222]', 'block rounded-md py-4 pr-2 pl-6 text-base leading-6 font-semibold text-gray-200']">{{
                              navItem.name
                            }}</a>
                          <div v-else>
                            <button
                                @click="mobileSubNavOpen = !mobileSubNavOpen"
                                :class="[selectedNav === navItem.name ? 'bg-[#222222]' : 'hover:bg-[#222222]', 'flex justify-between items-center w-full text-left rounded-md p-4 pl-6 gap-x-3 text-base leading-6 font-semibold text-gray-200']">
                              {{ navItem.name }}
                              <ChevronRightIcon
                                  :class="[mobileSubNavOpen ? 'rotate-90 text-gray-500' : 'text-gray-400', 'h-5 w-5 shrink-0 mr-5 transition-all ease-in-out']"
                                  aria-hidden="true"/>
                            </button>
                            <ul :class="mobileSubNavOpen ?  'translate-x-0' : 'translate-x-full'" class="mt-1 px-2 transform transition-all ease-in-out">
                              <li v-for="subItem in navItem.subNavigation" :key="subItem.name">
                                <a :href="subItem.href"
                                   class="block rounded-md py-4 pr-2 pl-9 text-base leading-6 text-gray-200 hover:bg-[#222222]">
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

    <header class="relative z-20">
      <nav aria-label="Top" class="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div>
          <div class="flex h-16 items-center">
            <button type="button" class="rounded-md p-2 text-gray-200 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-8 w-8" aria-hidden="true"/>
            </button>

            <!-- Logo -->
            <div class="ml-auto flex lg:ml-0">
              <a href="#">
                <span class="sr-only">Galacticore NFT</span>
                <img class="h-20 w-auto" src="/img/galacticore-logo.png" alt=""/>
              </a>
            </div>
            <PopoverGroup class="hidden lg:ml-auto lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <Popover v-for="navItem in navigation" :key="navItem.name" class="flex relative" v-slot="{ open }">
                  <div class="relative flex">
                    <NuxtLink
                        v-if="navItem.href"
                        :href="navItem.href"
                        @click="selectedNav = navItem.name"
                        class="group/navItem text-gray-300 overflow-hidden hover:text-gray-400 border-0 relative tracking-wider z-10 -mb-px flex justify-center items-center pt-px text-lg font-medium duration-200 ease-out">
                      {{ navItem.name }}
                      <span :class="selectedNav === navItem.name ? 'w-full': ''"
                            class="transition-all ease-in-out h-0.5 w-0 absolute left-0 bottom-0 bg-white group-hover/navItem:w-full"></span>
                    </NuxtLink>
                    <PopoverButton
                        v-else
                        :class="[open ? 'border-gray-200 text-gray-200' : 'border-transparent text-gray-300 hover:text-gray-400', 'group/navItem text-gray-300 overflow-hidden hover:text-gray-400 border-0 relative tracking-wider z-10 -mb-px flex justify-center items-center pt-px text-lg font-medium duration-200 ease-out']">
                      {{ navItem.name }}
                      <span :class="selectedNav === navItem.name ? 'w-full': ''"
                            class="transition-all ease-in-out h-0.5 w-0 absolute left-0 bottom-0 bg-white group-hover/navItem:w-full"></span>
                    </PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200"
                              enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                              leave-active-class="transition ease-in duration-150"
                              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                    <PopoverPanel
                        class="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#181818] shadow-[0_35px_60px_-15px_rgba(255,255,255,0.1)] ring-1 ring-gray-900/5">
                      <div class="p-4">
                        <div v-for="subItem in navItem.subNavigation" :key="subItem.name"
                             class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#202020]">
                          <div
                              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <component :is="subItem.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                       aria-hidden="true"/>
                          </div>
                          <div class="flex-auto">
                            <a :href="subItem.href" class="block font-semibold text-base text-gray-200">
                              {{ subItem.name }}
                              <span class="absolute inset-0"/>
                            </a>
                            <p class="mt-1 text-gray-400">{{ subItem.description }}</p>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a v-for="page in navigation.pages" :key="page.name" :href="page.href"
                   class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
              </div>
            </PopoverGroup>
          </div>
        </div>
      </nav>
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
           aria-hidden="true">
        <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
              class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
              class="absolute inset-0" aria-hidden="true"/>Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">Data to enrich your online
            business</h1>
          <p class="mt-6 text-lg leading-8 text-gray-500">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
            qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
               class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-200">Learn more <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
        <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
      </div>
    </div>
  </div>
</template>
