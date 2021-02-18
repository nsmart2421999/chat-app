<template>
  <div class="message-box mt-3">
    <textarea
      v-model="message"
      placeholder="Type something..."
      @input="typeMessage"
      @keypress.enter.prevent="sendMessage"
    ></textarea>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      height: 44,
      socket: null,
      message: ""
    };
  },
  computed: {
    ...mapState(["currentConversation"])
  },
  watch: {
    height(newVal, oldVal) {
      this.$eventBus.$emit("autoScroll", newVal - oldVal);
    }
  },
  methods: {
    ...mapMutations(["send"]),
    typeMessage({ target }) {
      const height = parseInt(target.scrollHeight);

      if (height - 22 <= 24 * 3) {
        target.style.height = "44px";
        target.style.height = `${target.scrollHeight}px`;
        this.height = target.scrollHeight;
      }
    },
    sendMessage() {
      this.$socketio.emit("message", {
        message: this.message,
        conversationId: this.currentConversation
      });
      this.message = "";
    }
  }
};
</script>

<style scoped>
.message-box > textarea {
  height: 44px;
  padding: 10px;
  border: none; /* Bug không giảm height được */
  resize: none;
}

.message-box > textarea,
.message-box > textarea:focus {
  background-color: rgb(240, 242, 245);
  outline: none;
}

.message-box > textarea::placeholder {
  color: #000;
}
</style>
