<template>
  <div class="user-panel">
    <div class="user-panel-header">
      <b-icon icon="circle-fill" style="color: #9c1de7;"></b-icon>
      <b-icon icon="circle-fill" style="color: #f3558e;"></b-icon>
      <b-icon icon="circle-fill" style="color: #f9ff21;"></b-icon>
      <h2 class="room-name mt-3">Room</h2>
    </div>
    <div class="mt-3">
      <div
        class="room pb-3"
        v-for="(conversation, index) in conversations"
        :key="index"
        @click="selectConversation(conversation.id)"
      >
        <b-avatar class="mr-2" :src="conversation.imgUrl"></b-avatar>
        <span>{{ conversation.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["conversations", "currentConversation"])
  },
  methods: {
    ...mapMutations(["setCurrentConversation"]),
    ...mapActions(["loadMessages"]),
    selectConversation(conversationId) {
      const oldConversation = this.currentConversation;
      this.setCurrentConversation(conversationId);
      this.$socketio.emit("openConversation", {
        oldConversation: oldConversation,
        newConversation: this.currentConversation
      });
      // this.loadMessages(conversationId);
    }
  }
};
</script>

<style lang="css" scoped>
.room-name {
  text-align: center;
  padding: 0 1rem;
  margin: 0 auto;
  font-weight: 800;
  border: 2px solid #000;
}

svg {
  font-size: 1rem;
  border: 1px solid #000;
  border-radius: 50%;
  margin-right: 5px;
}

.room {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
}
</style>
