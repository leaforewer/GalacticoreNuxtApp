<template>
  <div class="gradient-text"><slot /></div>
</template>
<style>
.gradient-text {
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #2eabff 0, #84ff3d 70%);
  -webkit-background-clip: text;
  background-clip: text;
  font-family: Righteous, cursive;
  font-weight: 1000;
  letter-spacing: 2px;
  line-height: 100%;
  padding: 1rem 0;
}
</style>
