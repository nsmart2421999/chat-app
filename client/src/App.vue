<template>
  <div id="app">
    <b-row class="m-0">
      <b-col class="left-panel pt-2" cols="4">
        <user-panel />
      </b-col>
      <b-col class="right-panel my-3" cols="8">
        <chat-panel />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import io from "socket.io-client";
import UserPanel from "./components/UserPanel";
import ChatPanel from "./components/ChatPanel";

export default {
  name: "App",
  components: {
    "user-panel": UserPanel,
    "chat-panel": ChatPanel
  },
  created() {
    const socket = io("ws://localhost:3000");
    socket.on("message", message => console.log(message));
  }
};
</script>

<style>
@font-face {
  font-family: fira-code;
  src: url("./fonts/FiraCode-Light.ttf");
}

*::-webkit-scrollbar {
  display: none;
}

body {
  background: linear-gradient(135deg, #fc6b60 0%, #ffcc6f 100%);
  font-family: "fira-code" !important;
  margin: 8px !important;
}
</style>

<style scoped>
#app {
  background: #fff;
  width: 768px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#app .left-panel {
  background-color: #96f7d2;
}
</style>
