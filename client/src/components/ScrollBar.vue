<template>
  <div class="wrapper">
    <div class="inner" @scroll="onScroll">
      <slot></slot>
    </div>
    <div class="scrollbar"></div>
    <message-box @autoScroll="autoScroll"></message-box>
  </div>
</template>

<script>
import MessageBox from "./MessageBox";

export default {
  components: {
    "message-box": MessageBox
  },
  data() {
    return {
      scrolling: false,
      timeout: null,
      lastScrollTop: -1
    };
  },
  watch: {
    scrolling(newVal) {
      const el = document.getElementsByClassName("scrollbar")[0];
      const opacity = newVal ? "0" : "1";
      el.style.opacity = opacity;
    }
  },
  methods: {
    onScroll() {
      window.clearTimeout(this.timeout);
      this.scrolling = true;

      this.timeout = setTimeout(() => (this.scrolling = false), 3000);
    },
    autoScroll(scrollTop) {
      const chatbox = document.getElementsByClassName("inner")[0];
      if (scrollTop < 0 && this.lastScrollTop !== -1 && this.lastScrollTop !== chatbox.scrollTop) {
        scrollTop = 0;
      }

      chatbox.scrollTop += scrollTop;
      this.lastScrollTop = chatbox.scrollTop;
    }
  }
};
</script>

<style scoped>
.scrollbar {
  background-color: #fff;
  border-radius: 15px;
  z-index: 150;
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.3s ease 0s;
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 360px;
}

.wrapper > .inner {
  height: 310px;
  overflow-y: scroll;
}

.wrapper > .inner::-webkit-scrollbar {
  display: block;
  width: 6px;
}

.wrapper > .inner::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background-color: #000;
}
</style>
