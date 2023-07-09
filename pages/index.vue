<script setup lang="ts">
import { ref } from "vue";
import {
  ChevronRightIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
} from "@heroicons/vue/24/outline";
import Navigation from "~/components/global/Navigation.vue";
import TeamCard from "~/components/global/TeamCard.vue";

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
  {
    id: 1,
    title: "Satan",
    rarity: "Legendary",
    img: "img/nft-cards/1.png",
    shadow: "red",
  },
  {
    id: 2,
    title: "Imposter",
    rarity: "Epic",
    img: "img/nft-cards/2.png",
    shadow: "light-blue",
  },
  {
    id: 3,
    title: "Space fan",
    rarity: "Rare",
    img: "img/nft-cards/3.png",
    shadow: "violet",
  },
  {
    id: 4,
    title: "Racer",
    rarity: "Rare",
    img: "img/nft-cards/4.png",
    shadow: "red",
  },
  {
    id: 5,
    title: "Cosmos Wanderer",
    rarity: "Legendary",
    img: "img/nft-cards/5.png",
    shadow: "green",
  },
  {
    id: 6,
    title: "Unknown",
    rarity: "Common",
    img: "img/nft-cards/6.png",
    shadow: "green",
  },
  {
    id: 7,
    title: "Unknown",
    rarity: "Uncommon",
    img: "img/nft-cards/7.png",
    shadow: "purple",
  },
  {
    id: 8,
    title: "High Tech Samurai",
    rarity: "Epic",
    img: "img/nft-cards/8.png",
    shadow: "light-blue",
  },
  {
    id: 9,
    title: "Unknown",
    rarity: "Common",
    img: "img/nft-cards/9.png",
    shadow: "gray",
  },
]);

const raritySettings = {
  Legendary: "text-yellow-400",
  Epic: "text-indigo-500",
  Rare: "text-sky-500",
  Common: "text-gray-300",
  Uncommon: "text-green-500",
};

const cardShadows = {
  red: "shadow-red-500",
  gray: "shadow-zinc-500",
  "light-blue": "shadow-sky-300",
  violet: "shadow-indigo-500",
  green: "shadow-green-500",
  purple: "shadow-purple-500",
  blue: "shadow-blue-500",
};

const swiperOptions = {
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};
const isLargeScreen = ref(false);
const isWelcomeOpen = ref(false);
const open = ref(false);

const characters = ["S", "M", "O", "L"];

const rotation = () => {
  const degrees = 180;
  const chars = characters.filter((c) => c !== " ");
  return degrees / (chars.length - 1);
};

const initiateEasterEgg = () => {
  console.log("easter egg 1");
};

onMounted(() => {
  isLargeScreen.value = window.innerWidth >= 768;
  if (!isLargeScreen.value) isWelcomeOpen.value = true;
});

const openWelcomeSection = () => {
  isWelcomeOpen.value = true;
};
</script>
<style>
.text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: rotate(-40deg);
}

.letter {
  font-size: 150px;
  text-transform: uppercase;
  letter-spacing: 200px;
  position: absolute;
  transform-origin: bottom;
  bottom: 50%;
  left: 50%;
}
</style>
<template>
  <NuxtLayout>
    <template #navigation>
      <Navigation
        :class="isWelcomeOpen ? 'translate-y-0' : '-translate-y-full'"
        home-page="#start"
        :navigation="navigation"
      />
    </template>
    <template #content>
      <!--    Hero Section -->
      <div
        id="start"
        class="relative isolate px-6 py-20 lg:px-8 h-[calc(100vh-16rem)] 2xl:h-[calc(100vh-5rem)]"
      >
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
        <div
          :class="isWelcomeOpen ? 'brightness-75' : ''"
          class="absolute inset-x-0 -z-10 duration-1000"
        >
          <img
            class="w-full h-full object-contain animate-float 2xl:object-cover"
            src="/img/home-portal-bg.png"
            alt="portal-background"
          />
        </div>
        <div
          :class="isWelcomeOpen ? 'brightness-75' : ''"
          class="absolute inset-x-0 top-0 flex justify-center mr-4 md:mr-10 duration-1000 transition-all ease-in-out"
        >
          <img
            @click="openWelcomeSection"
            style="filter: drop-shadow(0px 0px 76px rgb(178, 235, 235, 0.5))"
            class="h-full object-contain w-[200px] md:w-[550px] 2xl:w-[650px] animate-[spin_7s_linear_infinite] cursor-pointer"
            src="/img/portal.png"
            alt="portal"
          />
        </div>
        <div
          :class="
            isWelcomeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          "
          class="mx-auto mt-auto duration-1000 h-full flex items-center relative z-20 max-w-4xl py-6 sm:py-48 lg:py-0 transition-all ease-in-out"
        >
          <div class="w-full text-center mt-4">
            <ShapeShiftG class="mx-auto" />
            <AnimatedText
              class="text-white text-4xl md:text-5xl tracking-widest font-bold font-[hammersmith_one_,sans-serif] mb-6"
              text="WELCOME TO GALACTICORE"
            />
            <h1
              class="text-2xl md:text-4xl font-bold font-[Sen_,sans-serif] sm:!leading-normal tracking-normal text-gray-200 lg:text-6xl"
            >
              - Explore The Cosmos -
            </h1>
            <div class="hidden sm:mb-2 sm:flex sm:justify-center">
              <div
                class="relative rounded-full px-3 py-1 text-base leading-6 text-gray-200 hover:ring-gray-900/20"
              >
                Announcing our next steps here.
                <a href="#" class="font-semibold text-[#9fe870]"
                  ><span class="absolute inset-0" aria-hidden="true" />read more
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
            <p class="mt-6 text-sm md:text-xl leading-8 text-gray-400">
              Explore the captivating universe of Galacticore, an enigmatic NFT
              project on Shardeum. Dive into a thrilling gaming cosmos where you
              can journey through cosmic depths, unlock mysteries, and unleash
              your potential with blockchain.
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
                  Galacticore is set to be released in Q2 2023 on the Shardeum
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
        <div class="mx-auto container relative px-4 lg:max-w-7xl lg:px-8">
          <div
            class="text-gray-300 absolute -top-10 right-0 font-bold flex gap-4"
          >
            Swipe 'em!<ChevronRightIcon class="h-5 animate-ping duration-500" />
          </div>
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :breakpoints="swiperOptions.breakpoints"
            space-between="20"
            class="h-[500px]"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
          >
            <SwiperSlide v-for="card in cards" :key="card.id">
              <div
                class="p-4 h-full bg-[#212121] rounded-lg text-black border cursor-pointer border-teal-700 hover:p-0 transition-all ease-in-out duration-500"
              >
                <div
                  class="w-full h-full relative border-2 border-teal-300 rounded flex flex-col"
                >
                  <div
                    class="h-3/4 w-full relative shadow-2xl"
                    :class="cardShadows[card.shadow]"
                  >
                    <img
                      class="absolute left-0 top-0 w-full h-full object-cover"
                      :src="card.img"
                      alt="nft"
                    />
                  </div>
                  <div class="h-1/4 flex flex-col justify-between p-4">
                    <span
                      class="text-white text-2xl tracking-widest uppercase"
                      >{{ card.title }}</span
                    >
                    <span class="text-white text-lg"
                      >Rarity:
                      <span :class="raritySettings[card.rarity]">
                        {{ card.rarity }}</span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="py-24 sm:py-32">
        <div id="roadmap" class="mx-auto container px-4">
          <h1 class="sm:text-6xl text-center text-4xl text-gray-100 lg:my-6">
            Roadmap
          </h1>
          <div
            class="flex flex-col [&>div]:h-[200px] [&>div]:lg:h-auto lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-4 mt-10"
          >
            <div
              class="bg-sky-500 h-full rounded-lg relative overflow-hidden lg:col-span-2 shadow-lg"
              style="
                box-shadow: inset 0 0 20px rgba(96, 165, 250, 0.5),
                  0 0 10px rgba(96, 165, 250, 0.5);
              "
            >
              <span
                class="absolute top-8 left-0 text-5xl lg:top-12 lg:left-8 uppercase lg:text-6xl rotate-[340deg] font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Found It!</span
              >
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q2 2022</span
              >
              <img
                src="/img/roadmap/idea.png"
                alt="doodle coin"
                class="absolute bottom-0 left-10 w-full h-full object-contain lg:object-cover lg:w-[350px] h-auto"
              />
            </div>
            <div
              class="bg-rose-500 h-full rounded-lg relative overflow-hidden lg:col-span-2 shadow-lg"
              style="
                box-shadow: inset 0 0 20px rgba(252, 165, 165, 0.5),
                  0 0 10px rgba(252, 165, 165, 0.5);
              "
            >
              <span
                class="absolute bottom-1/4 left-1/3 -translate-x-1/2 uppercase text-5xl font-['Concert_One',cursive]"
              >
                <p class="text">
                  <span
                    class="text-8xl lg:letter"
                    v-for="(char, index) in characters"
                    :key="index"
                    :style="{ transform: `rotate(${index * rotation()}deg)` }"
                    >{{ char }}</span
                  >
                </p>
              </span>
              <span
                class="absolute top-5 left-5 uppercase text-white lg:text-black text-6xl tracking-widest font-['Concert_One',cursive]"
                >SOLD <span class="ml-44 lg:ml-32">OUT!</span></span
              >
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q3 2022</span
              >
              <img
                src="/img/roadmap/smol.png"
                alt="doodle coin"
                class="absolute -bottom-6 lg:-bottom-2 left-1/2 -translate-x-1/2 w-full h-full object-contain max-h-[450px]"
              />
            </div>
            <div
              class="bg-amber-500 h-full rounded-lg relative overflow-hidden lg:col-span-2 shadow-lg"
              style="
                box-shadow: inset 0 0 20px rgba(251, 191, 36, 0.5),
                  0 0 10px rgba(251, 191, 36, 0.5);
              "
            >
              <span
                class="absolute top-0 left-5 z-20 lg:top-12 lg:left-1/2 lg:-translate-x-1/2 font-['Concert_One',cursive] uppercase text-7xl whitespace-nowrap"
                >Liftoff!</span
              >
              <span
                class="absolute bottom-2 right-3 z-20 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q3-Q4 2023</span
              >
              <img
                src="/img/roadmap/doodle_launch.png"
                alt="doodle coin"
                class="absolute -bottom-6 lg:bottom-0 left-0 lg:left-5 w-full h-full object-contain lg:object-cover lg:w-auto drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)] lg:h-[300px]"
              />
            </div>
            <div
              class="bg-emerald-500 h-full rounded-lg relative overflow-hidden lg:min-h-[450px] md:col-span-3 lg:col-span-3 shadow-lg"
              style="
                box-shadow: inset 0 0 20px rgba(5, 150, 105, 0.5),
                  0 0 10px rgba(5, 150, 105, 0.5);
              "
            >
              <img
                class="absolute -bottom-5 lg:bottom-0 left-10 w-[85%] h-auto object-contain lg:w-auto max-w-[550px]"
                src="/img/roadmap/doodle_coin.png"
                alt="doodle coin"
              />
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q4 2023</span
              >
              <span
                class="absolute top-0 lg:top-16 left-1/2 -translate-x-1/2 font-['Concert_One',cursive] uppercase text-5xl whitespace-nowrap"
                >Galacticore 101</span
              >
            </div>
            <div
              class="bg-orange-400 h-full rounded-lg relative overflow-hidden md:col-span-3 lg:col-span-3 shadow-lg"
              style="
                box-shadow: inset 0 0 20px rgba(249, 115, 22, 0.5),
                  0 0 10px rgba(249, 115, 22, 0.5);
              "
            >
              <img
                src="/img/roadmap/game222.png"
                alt="doodle coin"
                class="absolute -bottom-0 left-0 w-full h-full object-cover"
              />
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q1 2024</span
              >
              <!--              <span-->
              <!--                  @click="initiateEasterEgg()"-->
              <!--                  class="absolute top-44 right-[12.25rem] font-['Press_Start_2P',cursive] text-black text-[8px] text-center font-bold rotate-[5deg] whitespace-nowrap"-->
              <!--              >Press any <br/>-->
              <!--                button..</span-->
              <!--              >-->
            </div>
          </div>
        </div>
      </div>
      <div class="py-24 sm:py-32 relative">
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
        <div
          id="team"
          class="mx-auto grid md:max-w-[90rem] gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
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
          <div
            class="grid gap-x-8 gap-y-12 grid-cols-1 lg:grid-cols-2 sm:gap-y-16 xl:col-span-2 lg:pb-20"
          >
            <TeamCard v-for="person in team" :item="person"></TeamCard>
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
      <div class="py-24 sm:py-32 relative">
        <div class="mx-auto grid max-w-5xl px-6 lg:px-8">
          <h2
            style="font-family: 'Josefin Sans', sans-serif"
            class="lg:text-8xl text-6xl font-light tracking-wider text-gray-50 mx-auto mb-16"
          >
            FAQ
          </h2>
          <Faq :items="faqs" />
        </div>
      </div>
      <footer class="bg-[#222222] rounded-lg shadow">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#"
              ><span class="sr-only">Galacticore NFT</span
              ><img
                class="h-20 w-auto mb-6"
                src="/img/galacticore-logo.png"
                alt=""
            /></a>
            <ul
              class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
            >
              <li v-for="navitem in navigation">
                <a
                  v-if="!navitem.subNavigation"
                  :href="navitem.href"
                  class="mr-4 hover:underline md:mr-6"
                  >{{ navitem.name }}</a
                >
                <button
                  v-if="navitem.subNavigation"
                  :href="navitem.href"
                  class="mr-4 hover:underline md:mr-6"
                >
                  {{ navitem.name }}
                </button>
              </li>
            </ul>
          </div>
          <hr
            class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          />
          <span
            class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© 2023 Galacticore NFT
          </span>
        </div>
      </footer>
    </template>
  </NuxtLayout>
</template>
