<template>
  <div class="wrapper">
    <div class="scrollbar"></div>
    <div class="inner" @scroll="onScroll">
      <div :class="{ sender: message.userId === 2 }" v-for="(message, index) in messages" :key="index">
        <div class="d-flex justify-content-end" style="max-width: 240px;">
          <b-avatar
            v-if="message.userId !== 2 && (index === 0 || message.userId !== messages[index - 1].userId)"
            class="mr-2"
            :src="users[message.userId].avatar"
          ></b-avatar>
          <div class="d-inline-block" style="max-width: 190px;">
            <b-badge class="message text-wrap text-left mb-2" variant="dark">
              {{ message.text }}
            </b-badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      scrolling: false,
      timeout: null
    };
  },
  created() {
    this.$socketio.on("message", message => {
      this.send(message);
    });
    this.$eventBus.$on("autoScroll", this.autoScroll);
    this.loadMessages();
  },
  computed: {
    ...mapState(["users", "messages"])
  },
  watch: {
    scrolling(newVal) {
      const el = document.getElementsByClassName("scrollbar")[0];
      const opacity = newVal ? "0" : "1";
      el.style.opacity = opacity;
    }
  },
  methods: {
    ...mapMutations(["send"]),
    ...mapActions(["loadMessages"]),
    onScroll(e) {
      window.clearTimeout(this.timeout);
      this.scrolling = true;

      this.timeout = setTimeout(() => {
        this.scrolling = false;
      }, 3000);
    },
    autoScroll(scrollTop) {
      const chatbox = document.getElementsByClassName("inner")[0];
      if (chatbox.scrollTop === 0) {
        scrollTop = 0;
      }

      chatbox.scrollTop += scrollTop;
    }
  }
};
</script>

<style scoped>
.sender {
  display: flex;
  flex-direction: row-reverse;
}

.sender .message {
  background-color: rgb(0, 132, 255);
}

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
  height: 310px;
  overflow-y: scroll;
}

.wrapper > .inner {
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
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
