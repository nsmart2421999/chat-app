<template>
  <div class="chat-panel">
    <chat-box></chat-box>
    <message-box></message-box>
  </div>
</template>

<script>
import ChatBox from "./ChatBox";
import MessageBox from "./MessageBox";

export default {
  components: {
    "chat-box": ChatBox,
    "message-box": MessageBox
  }
};
</script>

<style scoped>
.chat-panel {
  height: 360px;
  display: flex;
  flex-direction: column;
}
</style>
