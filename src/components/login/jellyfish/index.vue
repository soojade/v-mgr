<template>
  <div class="jellyfish">
    <div class="arms">
      <div class="arm"
           style="--scaleX:1;--scaleY:1;--rotate:3;"></div>
      <div class="arm"
           style="--scaleX:1;--scaleY:1.1;--rotate:2;"></div>
      <div class="arm"
           style="--scaleX:1;--scaleY:1.2;--rotate:1;"></div>
      <div class="arm"
           style="--scaleX:-1;--scaleY:1.15;--rotate:0;"></div>
      <div class="arm"
           style="--scaleX:-1;--scaleY:1.1;--rotate:0;"></div>
      <div class="arm"
           style="--scaleX:-1;--scaleY:1;--rotate:-1;"></div>
      <div class="arm"
           style="--scaleX:-1;--scaleY:1.15;--rotate:-2;"></div>
      <div class="arm"
           style="--scaleX:.5;--scaleY:1.15;--rotate:-3;"></div>
    </div>
    <div class="tentacles">
      <div class="tentacle"></div>
      <div class="tentacle"></div>
      <div class="tentacle"></div>
      <div class="tentacle"></div>
      <div class="tentacle"></div>
    </div>
    <div class="guts"></div>
    <div class="body">
      <div class="base"></div>
    </div>
    <div class="eyes">
      <div class="eye left">
        <div class="eyelid"></div>
      </div>
      <div class="eye right">
        <div class="eyelid"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
@keyframes swim {
  20% {
    transform: translateY(0em);
  }
  45% {
    transform: translateY(-3em);
  }
  100% {
    transform: translateY(0em);
  }
}
@keyframes squash {
  20% {
    transform: scaleY(0.9);
  }
  40% {
    transform: scaleY(1.1);
  }
  60% {
    transform: scaleY(0.9);
  }
}
@keyframes wave {
  30% {
    transform: scaleX(var(--scaleX)) scaleY(var(--scaleY))
      rotate(calc(var(--rotate) * -1deg));
  }
}
.jellyfish {
  position: relative;
  font-size: 4vmin;
  filter: drop-shadow(0 0 1em cyan);
  height: 14em;
  animation: swim 10s ease-in-out infinite;
  transform-origin: 50% 0;
  margin: 0px auto;
  /* width: 268px; */
}
.jellyfish .arms {
  transform-origin: 50% 0;
  animation: squash 10s ease-in-out infinite;
}
.jellyfish .arms .arm {
  position: absolute;
  width: 2em;
  height: 6em;
  top: 3em;
  border-radius: 50%;
  border-left: 1em solid #ccffff;
  border-bottom: 0.3em solid transparent;
  transform-origin: 50% 0;
  opacity: 0.4;
  transform: scaleX(var(--scaleX)) scaleY(var(--scaleY))
    rotate(calc(var(--rotate) * 1deg));
  animation: wave 10s ease-in-out infinite;
}
.jellyfish .arms .arm:before {
  content: "";
  position: absolute;
  width: 1.6em;
  height: 3em;
  top: 5.1em;
  left: -1.5em;
  border-radius: 50%;
  border-right: 0.6em solid #ccffff;
  border-top: 0.3em solid transparent;
  border-bottom: 0.3em solid transparent;
  transform: rotate(-10.4deg);
}
.jellyfish .arms .arm:after {
  content: "";
  position: absolute;
  width: 1em;
  height: 2em;
  top: 7.5em;
  left: -0.05em;
  border-radius: 50%;
  border-top: 0.4em solid transparent;
  border-left: 0.4em solid #ccffff;
  transform: rotate(10deg);
}
.jellyfish .arms .arm:nth-child(1) {
  left: 2.2em;
}
.jellyfish .arms .arm:nth-child(2) {
  left: 3em;
}
.jellyfish .arms .arm:nth-child(3) {
  left: 3.6em;
}
.jellyfish .arms .arm:nth-child(4) {
  left: 2.3em;
}
.jellyfish .arms .arm:nth-child(5) {
  left: 3.8em;
}
.jellyfish .arms .arm:nth-child(6) {
  left: 4.5em;
}
.jellyfish .arms .arm:nth-child(7) {
  left: 3em;
}
.jellyfish .arms .arm:nth-child(8) {
  left: 4.5em;
}
.jellyfish .tentacles {
  animation: squash 10s ease-in-out infinite;
}
.jellyfish .tentacles .tentacle {
  position: absolute;
  top: 4em;
  width: 10em;
  height: 8em;
  border: 1px solid rgba(0, 255, 255, 0.6);
  border-bottom: none;
  border-top: none;
  border-bottom-left-radius: 10% 50%;
  border-bottom-right-radius: 10% 50%;
  border-top-left-radius: 20% 50%;
  border-top-right-radius: 20% 50%;
}
.jellyfish .tentacles .tentacle:nth-child(2) {
  transform: scaleX(0.8);
}
.jellyfish .tentacles .tentacle:nth-child(3) {
  transform: scaleX(0.6);
}
.jellyfish .tentacles .tentacle:nth-child(4) {
  transform: scaleX(0.4);
}
.jellyfish .tentacles .tentacle:nth-child(5) {
  transform: scaleX(0.2);
}
.jellyfish .guts {
  width: 4em;
  height: 4em;
  background: white;
  position: absolute;
  left: 3em;
  top: 1em;
  border-radius: 50%;
  box-shadow: -1.5em 0.7em 0 -0.8em white, -1.7em -0.5em 0 -1.4em white,
    1.8em -0.1em 0 -1.3em white, 1em 1em 0 -0.6em white,
    -0.4em 1.8em 0 -1.3em white, 1.4em -1em 0 -1.5em white,
    -1.3em 1.8em 0 -1.5em white;
  filter: drop-shadow(0 0 0.5em rgba(255, 255, 255, 0.5));
}
.jellyfish .body {
  background: cyan;
  width: 10em;
  height: 5em;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  position: relative;
  opacity: 0.65;
  box-shadow: inset 0 0.2em 0 cyan, inset 0 0.4em 0 hsla(0, 0%, 100%, 0.6);
  transform-origin: 50% 50%;
  animation: squash 10s ease-in-out infinite;
}
.jellyfish .body .base {
  position: absolute;
  width: 3em;
  height: 1.5em;
  background: cyan;
  bottom: -1.5em;
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  box-shadow: 3.5em 0 0 cyan, 7em 0 0 cyan;
}
.jellyfish .body .base:after {
  content: "";
  position: absolute;
  width: 3em;
  height: 1em;
  left: 1.75em;
  top: -0.25em;
  background: radial-gradient(
    circle at 50% 120%,
    rgba(0, 255, 255, 0) 0,
    rgba(0, 255, 255, 0) 25%,
    cyan 10%,
    cyan 100%
  );
}
.jellyfish .body .base:before {
  content: "";
  position: absolute;
  width: 3em;
  height: 1em;
  left: 5.25em;
  top: -0.25em;
  background: radial-gradient(
    circle at 50% 120%,
    rgba(0, 255, 255, 0) 0,
    rgba(0, 255, 255, 0) 25%,
    cyan 10%,
    cyan 100%
  );
}
@keyframes eyes {
  40% {
    transform: translateY(-0.2em);
  }
  60% {
    transform: translateY(0.2em);
  }
}
.jellyfish .eyes .eye {
  width: 2em;
  height: 2em;
  background: white;
  position: absolute;
  left: 2.85em;
  top: 3em;
  border-radius: 50%;
  overflow: hidden;
  transform: translateZ(0);
}
.jellyfish .eyes .eye:before {
  content: "";
  position: absolute;
  width: 70%;
  height: 70%;
  background: darkblue;
  border-radius: 50%;
  left: 15%;
  top: 15%;
  animation: eyes 10s ease-in-out infinite;
}
.jellyfish .eyes .eye:after {
  content: "";
  position: absolute;
  width: 25%;
  height: 25%;
  background: #fff;
  border-radius: 50%;
  left: 25%;
  top: 25%;
  box-shadow: 0.4em 0.4em 0 -0.12em white, 0.5em 0.05em 0 -0.15em white;
  animation: eyes 10s ease-in-out infinite;
  z-index: 1;
}
.jellyfish .eyes .eye.right {
  left: 5.15em;
}
.jellyfish .eyes .eyelid {
  width: 100%;
  height: 100%;
  background: cyan;
  z-index: 2;
  position: relative;
  transform: translateY(-3em);
  animation: blink 6s ease-in-out infinite;
}
@keyframes blink {
  97% {
    transform: translateY(-3em);
  }
  100% {
    transform: translateY(0em);
  }
}
</style>
