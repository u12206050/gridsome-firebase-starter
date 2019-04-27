<template>
  <div class="Loading">Loading...</div>
</template>

<style lang="scss">
.Loading {
  .loading,
  .loading:before,
  .loading:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: loading-animation 1.8s infinite ease-in-out;
    animation: loading-animation 1.8s infinite ease-in-out;
  }
  .loading {
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
  .loading:before,
  .loading:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .loading:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loading:after {
    left: 3.5em;
  }
  @-webkit-keyframes loading-animation {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes loading-animation {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
}
</style>
