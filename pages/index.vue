<script setup lang="ts">
import { ref } from "vue";

import {
  Bars3Icon,
  ChevronRightIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import Navigation from "~/components/Global/Navigation.vue";

useHead({
  bodyAttrs: {
    class: "font-sans antialiased relative",
  },
  htmlAttrs: {
    class: "h-full bg-[#121212] overflow-x-hidden scroll-smooth",
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

const callouts = [
  {
    name: "Documentation",
    description:
      "Ensure the authenticity, transparency, and security of your NFT with proper documentation on the blockchain ledger - trust that your unique digital asset is genuine and valuable, and easily trade it with confidence in the NFT ecosystem.",
    icon: DocumentTextIcon,
    href: "/docs",
  },
  {
    name: "Build a warrior",
    description:
      "Experience the thrill of unleashing your imagination and becoming an active participant in the dynamic world of blockchain technology and digital art with Cosmic Warrior NFTs – create your own unique and captivating digital asset today!",
    icon: PuzzlePieceIcon,
    href: "/build-a-warrior",
  },
];

const faqs = reactive([
  {
    id: 1,
    question: "What is Galacticore NFT?",
    answer:
      "Galacticore NFT is a digital art project that will be available on Shardeum blockchain in Q2 of 2023. The project consists of unique digital assets, or NFTs, that represent ownership of a piece of digital content related to space and science fiction.",
  },
  {
    id: 2,
    question: "What is Shardeum blockchain?",
    answer:
      "Shardeum blockchain is a new blockchain technology that is being developed specifically for NFT projects like Galacticore. It is designed to be fast, secure, and scalable, and will support a wide range of NFT use cases.",
  },
  {
    id: 3,
    question: "How can I buy Galacticore NFTs?",
    answer:
      "To buy Galacticore NFTs, you will need to have a Shardeum wallet set up with Shardeum coins (SDM). Once you have a wallet set up, you can browse the Galacticore marketplace or visit the project's website to purchase an NFT.",
  },
  {
    id: 4,
    question: "What kind of NFTs can I expect to see in Galacticore?",
    answer:
      "Galacticore will feature a variety of unique digital assets, including artwork, music, and videos, that are related to space and science fiction. Each NFT will be unique and will have its own value based on its rarity and popularity.",
  },
  {
    id: 5,
    question: "Can I sell my Galacticore NFTs?",
    answer:
      "Yes, you can sell your Galacticore NFTs on the Shardeum marketplace or through the project's website. The value of your NFT will depend on a variety of factors, including the rarity of your NFT, the popularity of the project, and the current market conditions.",
  },
]);

const team = [
  {
    name: "Leaforewer",
    role: "Co-Founder / CEO",
    imageUrl: "/img/ceo2.png",
    bg_image:
      "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
  },
  {
    name: "Ferrosia",
    role: "Co-Founder / CEO",
    imageUrl: "/img/ceo1.png",
    bg_image:
      "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
  },
  {
    name: "Flyingcat",
    role: "Artist / Designer",
    imageUrl: "/img/artist.png",
    bg_image:
      "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
  },
  {
    name: "Dhexphod",
    role: "Market Analyst",
    imageUrl: "img/analyst.png",
    bg_image:
      "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
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
<style>
.screen {
  width: 350px;
  display: flex;
  border: 2px solid #9fe870;
  aspect-ratio: 10 / 14;
  border-radius: 1rem;
  background-color: #2f5c11;
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.screen:after,
.screen:before {
  content: "";
  height: 5px;
  position: absolute;
  z-index: 4;
  left: 50%;
  translate: -50% 0%;
  background-color: white;
}

.screen:before {
  width: 15%;
  top: 0rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.screen:after {
  width: 25%;
  bottom: 0rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

@keyframes pan-overlay {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 0% -100%;
  }
}

.screen-overlay {
  background: linear-gradient(
    rgb(33 150 243 / 0.15),
    rgb(33 150 243 / 0.15) 3px,
    transparent 3px,
    transparent 9px
  );
  background-size: 100% 9px;
  height: 100%;
  width: 100%;
  animation: pan-overlay 22s infinite linear;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
}

@keyframes pan-image {
  0% {
    background-position: 36% 42%;
    background-size: 200%;
  }

  20% {
    background-position: 30% 35%;
    background-size: 200%;
  }

  20.0001% {
    /* -- View 2 -- */
    background-position: 60% 85%;
    background-size: 500%;
  }

  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }

  40.0001% {
    /* -- View 3 -- */
    background-position: 80% 42%;
    background-size: 300%;
  }

  60% {
    background-position: 84% 33%;
    background-size: 300%;
  }

  60.0001% {
    /* -- View 4 -- */
    background-position: 0% 0%;
    background-size: 300%;
  }

  80% {
    background-position: 15% 4%;
    background-size: 300%;
  }

  80.0001% {
    /* -- View 5 -- */
    background-position: 80% 10%;
    background-size: 300%;
  }

  100% {
    background-position: 72% 14%;
    background-size: 300%;
  }
}

.screen > .screen-image {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  background-size: 300%;
  background-position: 0% 0%;
  filter: sepia(100%) hue-rotate(120deg);
  opacity: 0.75;
  animation: pan-image 15s linear infinite;
}
</style>
<template>
  <NuxtLayout>
    <template #navigation>
      <Navigation :navigation="navigation" />
    </template>
    <template #content>
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
          <GlobalShapeShiftG class="mx-auto" />
          <div class="text-center mt-4">
            <GlobalAnimatedText
              class="text-white text-3xl tracking-widest font-bold font-[Sen_,sans-serif]"
              text="WELCOME TO GALACTICORE"
            />
            <h1
              class="text-4xl font-bold font-[Sen_,sans-serif] sm:!leading-normal tracking-normal text-gray-200 sm:text-6xl"
            >
              Explore The Cosmos
            </h1>
            <div class="hidden sm:mb-2 sm:flex sm:justify-center">
              <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 hover:ring-gray-900/20"
              >
                Announcing our next steps here.
                <a href="#" class="font-semibold text-[#9fe870]"
                  ><span class="absolute inset-0" aria-hidden="true" />read more
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
            <p class="mt-6 text-lg leading-8 text-gray-400">
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
                <p
                  class="mt-6 text-xl leading-8 text-gray-200 font-[Sen_,sans-serif]"
                >
                  Welcome to Galacticore, an upcoming mining-based #PlayAndEarn
                  game that is set to take the blockchain gaming world by storm!
                  Galacticore is a unique project that combines the exciting
                  world of NFTs with an immersive and engaging gaming
                  experience.
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
              <div
                class="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg"
              >
                <p>
                  Galacticore NFTs are the first step in our journey towards
                  creating a thriving gaming community. We believe that by
                  rewarding our community with NFTs, we can create a sense of
                  excitement and anticipation around the launch of our game.
                </p>
                <p class="mt-8">
                  Our NFTs are not just digital collectibles, they are also
                  usable assets that can be used in our future games. We have
                  designed these NFTs to be perfect in every way, from their
                  stunning visuals to their ability to be used as avatars for
                  our buyers. Our NFT series is the perfect way for us to build
                  our community before the game's launch. We want to give our
                  community a chance to experience the excitement of the game
                  before it is even released. We believe that by doing so, we
                  can create a strong and loyal community that will be with us
                  for years to come.
                </p>
                <h2
                  class="mt-16 text-2xl font-bold tracking-tight text-gray-300"
                >
                  Wen mint 🤔
                </h2>
                <p class="mt-6">
                  Galacticore is set to be released in Q1 2023 on the Shardeum
                  Blockchain, and we cannot wait for our community to experience
                  the game that we have worked so hard on. We are confident that
                  Galacticore will be a game-changer in the blockchain gaming
                  world, and we look forward to sharing it with our community.
                  Join us on our journey towards creating a vibrant and exciting
                  gaming community. Get your hands on one of our Galacticore
                  NFTs today, and be a part of something truly special!
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
      <div class="py-24 sm:py-32 relative">
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
              digital collectible, we're here to make a lasting impression in
              the blockchain world!
            </p>
          </div>
          <ul
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 lg:pb-20"
          >
            <li v-for="person in team" :key="person.name">
              <div class="screen">
                <div
                  class="screen-image"
                  :style="{ backgroundImage: `url(${person.bg_image})` }"
                ></div>
                <div class="screen-overlay"></div>
                <div
                  class="screen-content relative z-[2] flex flex-col flex-1 justify-end items-center p-5"
                >
                  <img
                    class="h-56 w-56 rounded-full opacity-80"
                    :src="person.imageUrl"
                    alt=""
                  />
                  <div class="text-center mt-12">
                    <h3
                      class="text-xl tracking-widest font-semibold leading-7 tracking-relaxed text-white"
                    >
                      {{ person.name }}
                    </h3>
                    <p class="text-sm italic font-bold leading-6 text-white">
                      {{ person.role }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="absolute -bottom-2 left-0 w-full -z-0 overflow-hidden leading-0 rotate-180"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="fill-gray-100"
            ></path>
          </svg>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="mx-auto max-w-2xl py-16 sm:py-24 lg:pb-56 lg:pt-0 lg:max-w-none lg:py-32"
          >
            <h2 class="text-2xl font-bold tracking-wide text-gray-900">
              Check Out These Too!
            </h2>
            <div
              class="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="callout in callouts"
                :key="callout.name"
                class="group relative col-span-2"
              >
                <div
                  class="relative h-32 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75 sm:h-32"
                >
                  <component
                    :is="callout.icon"
                    class="h-32 w-full p-16 bg-gray-200 object-cover object-center"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a :href="callout.href">
                    <span class="absolute inset-0" />
                    {{ callout.name }}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  {{ callout.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-24 sm:py-32 relative">
        <div class="mx-auto grid max-w-5xl px-6 lg:px-8">
          <h2 class="text-3xl text-gray-300 mx-auto mb-16">
            Frequently Asked Questions [FAQ]
          </h2>
          <GlobalFaq :items="faqs" />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
