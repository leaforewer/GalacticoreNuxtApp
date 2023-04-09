<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
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
import {
  Bars3Icon,
  ChevronRightIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

useHead({
  bodyAttrs: {
    class: "font-sans antialiased",
  },
  htmlAttrs: {
    class: "h-full bg-[#060714] overflow-x-hidden scroll-smooth",
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
        description:
          "Create a unique digital collectible using the space-themed and futuristic design elements characteristic of the Galacticore series",
        href: "/build-a-warrior",
        icon: PuzzlePieceIcon,
      },
      {
        name: "White Paper",
        description:
          "Learn about the technical details, use cases, and potential benefits of a specific NFT project or platform.",
        href: "/docs",
        icon: DocumentTextIcon,
      },
    ],
  },
]);

const team = [
  {
    name: "Leaforewer",
    role: "Co-Founder / CEO",
    imageUrl: "/img/ceo2.png",
  },
  {
    name: "Ferrosia",
    role: "Co-Founder / CEO",
    imageUrl: "/img/ceo1.png",
  },
  {
    name: "Flyingcat",
    role: "Artist / Designer",
    imageUrl: "/img/artist.png",
  },
  {
    name: "Dhexphod",
    role: "Market Analyst",
    imageUrl: "img/analyst.png",
  },
];

const cards = reactive([
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
]);
const cardContainer = ref(null);
let currentPosition = 0;
const slideRight = () => {
  currentPosition += 1;
  if (currentPosition >= cards.length - 1) {
    const addedCards = [...cards];
    cards.push(...addedCards);
  }
  cardContainer.value.style.transform = `translateX(${
    -currentPosition * 220
  }px)`;
};

const addedCards = [...cards];
cards.push(...addedCards);

const selectedNav = ref();
const mobileSubNavOpen = ref(false);
const open = ref(false);
</script>
<template>
  <div class="bg-transparent">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
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
                  @click="open = false"
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
                              @click="mobileSubNavOpen = !mobileSubNavOpen"
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
                                  mobileSubNavOpen
                                    ? 'rotate-90 text-gray-500'
                                    : 'text-gray-400',
                                  'h-5 w-5 shrink-0 mr-5 transition-all ease-in-out',
                                ]"
                                aria-hidden="true"
                              />
                            </button>
                            <ul
                              :class="
                                mobileSubNavOpen
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

    <header class="relative z-20">
      <nav aria-label="Top" class="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div>
          <div class="flex h-16 items-center">
            <button
              type="button"
              class="rounded-md p-2 text-gray-200 lg:hidden"
              @click="open = true"
            >
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-8 w-8" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-auto flex lg:ml-0">
              <a href="#">
                <span class="sr-only">Galacticore NFT</span>
                <img
                  class="h-20 w-auto"
                  src="/img/galacticore-logo.png"
                  alt=""
                />
              </a>
            </div>
            <PopoverGroup class="hidden lg:ml-auto lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <Popover
                  v-for="navItem in navigation"
                  :key="navItem.name"
                  class="flex relative"
                  v-slot="{ open }"
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
                        open
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
    <!--    Hero Section -->
    <div class="relative isolate px-6 py-20 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-500 to-sky-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Announcing our next steps here.
            <a href="#" class="font-semibold text-indigo-600"
              ><span class="absolute inset-0" aria-hidden="true" />Read more
              <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-4xl font-bold sm:!leading-normal tracking-tight text-gray-200 sm:text-6xl"
          >
            Explore the Cosmos with Galacticore<span
              class="mt-2 block text-base text-gray-400 italic tracking-widest"
              >Own Your Piece of the Universe!</span
            >
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-500">
            Galacticore NFT is a collection of unique, hand-crafted digital
            assets inspired by the vast expanse of the universe. Each NFT is a
            one-of-a-kind collectible that offers a glimpse into the mysteries
            of the cosmos.
          </p>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-400 to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
    <!--  Content  -->
    <div
      class="relative isolate overflow-hidden px-6 py-24 sm:py-64 lg:overflow-visible lg:px-0"
    >
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-[#323232] [mask-image:radial-gradient(64rem_64rem_at_top,transparent,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-transparent">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div
        id="about"
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
      >
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <h1
                class="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl"
              >
                About us
              </h1>
              <p class="mt-6 text-xl leading-8 text-gray-200">
                Welcome to Galacticore, an upcoming mining-based #PlayAndEarn
                game that is set to take the blockchain gaming world by storm!
                Galacticore is a unique project that combines the exciting world
                of NFTs with an immersive and engaging gaming experience.
              </p>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
              <p>
                Galacticore NFTs are the first step in our journey towards
                creating a thriving gaming community. We believe that by
                rewarding our community with NFTs, we can create a sense of
                excitement and anticipation around the launch of our game.
              </p>
              <p class="mt-8">
                Our NFTs are not just digital collectibles, they are also usable
                assets that can be used in our future games. We have designed
                these NFTs to be perfect in every way, from their stunning
                visuals to their ability to be used as avatars for our buyers.
                Our NFT series is the perfect way for us to build our community
                before the game's launch. We want to give our community a chance
                to experience the excitement of the game before it is even
                released. We believe that by doing so, we can create a strong
                and loyal community that will be with us for years to come.
              </p>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-300">
                Wen mint 🤔
              </h2>
              <p class="mt-6">
                Galacticore is set to be released in Q1 2023 on the Shardeum
                Blockchain, and we cannot wait for our community to experience
                the game that we have worked so hard on. We are confident that
                Galacticore will be a game-changer in the blockchain gaming
                world, and we look forward to sharing it with our community.
                Join us on our journey towards creating a vibrant and exciting
                gaming community. Get your hands on one of our Galacticore NFTs
                today, and be a part of something truly special!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-24 sm:py-32 relative">
      <div class="mx-auto grid max-w-7xl overflow-hidden">
        <div class="flex flex-col items-center">
          <div
            ref="cardContainer"
            class="relative flex w-full overflow-hidden transition-all ease-out snap-x"
          >
            <div
              v-for="card in cards"
              :key="card.id"
              class="w-[350px] h-[500px] mr-10 bg-red-600 transition-all ease-in-out snap-center"
            >
              <div class="flex flex-col items-center justify-center h-full">
                <h2 class="text-lg text-white">{{ card.title }}</h2>
                <p class="text-sm text-white">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center items-center absolute top-0 right-0 h-full w-1/3"
      >
        <button
          class="text-white rounded-full p-7 bg-[#26284079] backdrop-blur-sm hover:bg-[#535783a1] hover:scale-110 transition-all ease-in-out duration-500"
          @click="slideRight"
        >
          <ChevronRightIcon
            class="h-10 w-10 text-gray-300 group-hover:text-indigo-600"
          />
        </button>
      </div>
    </div>
    <div class="py-24 sm:py-32">
      <div id="roadmap" class="mx-auto grid max-w-7xl">
        <h1 class="sm:text-4xl text-3xl text-gray-300 my-6">Roadmap</h1>
        <div class="grid grid-cols-12 grid-rows-12 gap-4 mt-10">
          <div class="col-span-3 row-span-2 bg-blue-500 h-full"></div>
          <div class="col-span-4 row-span-5 bg-green-500 h-full"></div>
          <div class="col-span-5 row-span-5 bg-yellow-500 h-full"></div>
          <div class="col-span-3 row-span-6 bg-pink-500 h-full"></div>
          <div class="col-span-5 row-span-3 bg-red-500 h-full"></div>
          <div class="col-span-4 row-span-3 bg-purple-500 h-full"></div>
        </div>
      </div>
    </div>
    <div class="py-24 sm:py-32">
      <div
        id="team"
        class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
      >
        <div class="max-w-2xl">
          <h2 class="text-3xl tracking-tight text-gray-300 sm:text-4xl">
            Meet our Team
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-400">
            Our team is as unique and valuable as an NFT, and just like a rare
            digital collectible, we're here to make a lasting impression in the
            blockchain world!
          </p>
        </div>
        <ul
          role="list"
          class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li v-for="person in team" :key="person.name">
            <div class="flex items-center gap-x-6">
              <img
                class="h-48 w-48 rounded-full"
                :src="person.imageUrl"
                alt=""
              />
              <div>
                <h3
                  class="text-lg font-semibold leading-7 tracking-relaxed text-gray-300"
                >
                  {{ person.name }}
                </h3>
                <p class="text-sm italic font-bold leading-6 text-sky-600">
                  {{ person.role }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
