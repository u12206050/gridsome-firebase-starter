<template>
  <div class="gloading">loading...</div>
</template>

<style lang="scss">
.gloading,
.gloading:before,
.gloading:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: gloading-animation 1.8s infinite ease-in-out;
  animation: gloading-animation 1.8s infinite ease-in-out;
}
.gloading {
  color: var(--primary-color);
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.gloading:before,
.gloading:after {
  content: '';
  position: absolute;
  top: 0;
}
.gloading:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.gloading:after {
  left: 3.5em;
}
@-webkit-keyframes gloading-animation {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes gloading-animation {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>
