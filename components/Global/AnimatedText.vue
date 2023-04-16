<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const animateText = (event: {
  target: { innerText: string; dataset: { value: string | any[] } };
}) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
</script>
<template>
  <div :data-value="text" @mouseover="animateText">{{ text }}</div>
</template>
