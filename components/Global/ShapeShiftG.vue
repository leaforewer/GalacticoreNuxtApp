<template>
  <div class="menu-container">
    <div class="menu-bar animate-top-left"></div>
    <div class="menu-bar animate-top-right"></div>
    <div class="menu-bar animate-middle"></div>
    <div class="menu-bar animate-middle-right"></div>
    <div class="menu-bar animate-bottom"></div>
  </div>
</template>
<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 35px;
  cursor: pointer;
}

.menu-bar {
  width: 100%;
  height: 2.5px;
  background-color: rgb(229 231 235);
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
}

.menu-container:hover .animate-top-left {
  transform: translateY(10px) translateX(-50%) rotate(90deg);
  width: 100%;
}

.menu-container:hover .animate-top-right {
  transform: translateY(-12px) translateX(15%) rotate(0deg);
  width: 85%;
}

.menu-container:hover .animate-middle {
  transform: translateY(-3px) translateX(60%);
  width: 60%;
}

.animate-middle-right {
  opacity: 0;
}

.animate-bottom {
  opacity: 0;
}

.menu-container:hover .animate-middle-right {
  opacity: 1;
  transform: translateX(250%) translateY(-5px) rotate(90deg);
  width: 35%;
}

.menu-container:hover .animate-bottom {
  opacity: 1;
  transform: translateY(-3px) translateX(15%) rotate(0deg);
  width: 85%;
}
</style>
