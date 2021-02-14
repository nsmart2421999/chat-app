<template>
  <div class="message-box mt-3">
    <textarea placeholder="Type something..." @input="onTypingMessage"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 44
    };
  },
  watch: {
    height(newVal, oldVal) {
      this.$emit("autoScroll", newVal - oldVal);
    }
  },
  methods: {
    onTypingMessage({ target }) {
      const height = parseInt(target.scrollHeight);

      if (height - 22 <= 24 * 3) {
        target.style.height = "44px";
        target.style.height = `${target.scrollHeight}px`;
        this.height = target.scrollHeight;
      }
    }
  }
};
</script>

<style scoped>
.message-box > textarea {
  height: 44px;
  padding: 10px;
  border: none;/* Bug không giảm height được */
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
