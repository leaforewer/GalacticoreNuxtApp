<script setup lang="ts">
import { ref } from "vue";
import {
  ChevronRightIcon,
  DocumentTextIcon,
  PuzzlePieceIcon,
} from "@heroicons/vue/24/outline";
import Navigation from "~/components/Global/Navigation.vue";
import TeamCard from "~/components/Global/TeamCard.vue";

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
      <Navigation home-page="#start" :navigation="navigation" />
    </template>
    <template #content>
      <!--    Hero Section -->
      <div id="start" class="relative isolate px-6 py-20 lg:px-8">
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
        <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <GlobalShapeShiftG class="mx-auto" />
          <div class="text-center mt-4">
            <GlobalAnimatedText
              class="text-white text-3xl tracking-widest font-bold font-[Sen_,sans-serif]"
              text="WELCOME TO GALACTICORE"
            />
            <h1
              class="text-4xl font-bold font-[Sen_,sans-serif] sm:!leading-normal tracking-normal text-gray-200 lg:text-6xl"
            >
              Explore The Cosmos
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
            <p class="mt-6 text-xl leading-8 text-gray-400">
              Explore the captivating universe of Galacticore, an enigmatic NFT
              project on Shardeum. Dive into a thrilling gaming cosmos where you
              can journey through cosmic depths, unlock mysteries, and unleash
              your potential with blockchain.
            </p>
            <div class="flex justify-center gap-x-6">
              <svg
                class="h-8 w-8 text-teal-500"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 511.588 511.588"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      d="M508.508,93.804c-2.794-2.708-6.795-3.601-10.44-2.334l-17.252,5.953c10.162-12.297,17.66-25.14,21.608-37.315
			c1.146-3.549,0.104-7.48-2.647-10.006c-2.768-2.543-6.786-3.263-10.275-1.805c-24.194,10.145-45.603,18.979-62.629,24.264
			c-0.633,0.2-1.284,0.113-1.935-0.252c-13.572-7.602-47.547-25.062-71.68-24.784c-61.032,1.119-110.696,53.274-110.696,116.267
			v3.445c-89.869-17.399-139.533-43.251-193.31-99.666l-8.4-8.817l-5.589,10.821C6.071,126.043,26.768,176.653,60.881,210.74
			c-15.117-2.317-26.095-7.185-35.337-15.247c-3.549-3.072-8.583-3.454-12.54-0.937c-3.896,2.482-5.675,7.125-4.417,11.55
			c11.481,40.622,42.227,73.98,74.683,93.913c-15.681-0.017-28.585-1.762-41.559-10.101c-3.775-2.43-8.687-2.178-12.21,0.607
			c-3.497,2.777-4.842,7.463-3.35,11.672c15.82,44.431,45.403,67.801,94.425,73.624c-25.201,14.735-57.899,26.381-108.952,27.448
			c-4.981,0.104-9.39,3.341-10.986,8.044C-0.958,416,0.5,421.033,4.344,424.122c31.024,25.01,100.612,39.945,186.151,39.945
			c153.123,0,277.695-136.253,277.695-303.729v-2.942c19.812-9.468,34.929-28.151,42.921-53.274
			C512.274,100.46,511.276,96.503,508.508,93.804z"
                    />
                  </g>
                </g>
              </svg>
              <svg
                class="h-8 w-8 text-sky-500"
                viewBox="0 -28.5 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </div>
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
        <div id="roadmap" class="mx-auto container">
          <h1 class="sm:text-6xl text-center text-3xl text-gray-100 my-6">
            Roadmap
          </h1>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-4 mt-10"
          >
            <div
              class="bg-sky-500 h-full rounded-lg relative overflow-hidden lg:col-span-2 shadow-lg"
              style="
                box-shadow: inset 0 0 20px rgba(96, 165, 250, 0.5),
                  0 0 10px rgba(96, 165, 250, 0.5);
              "
            >
              <span
                class="absolute top-12 left-8 uppercase text-6xl rotate-[340deg] font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Found It!</span
              >
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q2 2022</span
              >
              <img
                src="/img/roadmap/idea.png"
                alt="doodle coin"
                class="absolute bottom-0 left-10 object-cover w-[350px] h-auto"
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
                    class="letter"
                    v-for="(char, index) in characters"
                    :key="index"
                    :style="{ transform: `rotate(${index * rotation()}deg)` }"
                    >{{ char }}</span
                  >
                </p>
              </span>
              <span
                class="absolute top-5 left-5 uppercase text-6xl tracking-widest font-['Concert_One',cursive]"
                >SOLD <span class="ml-32">OUT!</span></span
              >
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q3 2022</span
              >
              <img
                src="/img/roadmap/smol.png"
                alt="doodle coin"
                class="absolute -bottom-2 left-1/2 -translate-x-1/2 max-h-[450px]"
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
                class="absolute top-12 left-1/2 -translate-x-1/2 font-['Concert_One',cursive] uppercase text-7xl whitespace-nowrap"
                >Liftoff!</span
              >
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q3-Q4 2023</span
              >
              <img
                src="/img/roadmap/doodle_launch.png"
                alt="doodle coin"
                class="absolute bottom-0 left-5 object-cover w-auto drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)] h-[300px]"
              />
            </div>
            <div
              class="bg-emerald-500 h-full rounded-lg relative overflow-hidden min-h-[450px] md:col-span-3 lg:col-span-3 shadow-lg"
              style="
                box-shadow: inset 0 0 20px rgba(5, 150, 105, 0.5),
                  0 0 10px rgba(5, 150, 105, 0.5);
              "
            >
              <img
                class="absolute bottom-0 left-10 max-w-[550px]"
                src="/img/roadmap/doodle_coin.png"
                alt="doodle coin"
              />
              <span
                class="absolute bottom-2 right-3 uppercase text-2xl font-['Concert_One',cursive] drop-shadow-[0_20px_25px_rgb(0_0_0_/_1)]"
                >Q4 2023</span
              >
              <span
                class="absolute top-16 left-1/2 -translate-x-1/2 font-['Concert_One',cursive] uppercase text-5xl whitespace-nowrap"
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
              <span
                @click="initiateEasterEgg()"
                class="absolute top-44 right-[12.25rem] font-['Press_Start_2P',cursive] text-black text-[8px] text-center font-bold rotate-[5deg] whitespace-nowrap"
                >Press any <br />
                button..</span
              >
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
            class="grid gap-x-8 gap-y-12 grid-cols-2 sm:gap-y-16 xl:col-span-2 lg:pb-20"
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
            class="lg:text-8xl font-light tracking-wider text-gray-50 mx-auto mb-16"
          >
            FAQ
          </h2>
          <GlobalFaq :items="faqs" />
        </div>
      </div>
      <footer class="bg-[#222222] rounded-lg shadow">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#"
              ><span class="sr-only">Galacticore NFT</span
              ><img class="h-20 w-auto" src="/img/galacticore-logo.png" alt=""
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
