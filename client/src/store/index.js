import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: {
      1: {
        name: "Linsay",
        avatar: "https://semantic-ui-vue.github.io/static/images/avatar/small/lindsay.png"
      },
      2: {
        name: "Matthew Boss",
        avatar: "https://semantic-ui-vue.github.io/static/images/avatar/small/matthew.png"
      },
      3: {
        name: "Jenny Lawrence",
        avatar: "https://semantic-ui-vue.github.io/static/images/avatar/small/jenny.jpg"
      }
    },
    messages: [],
    conversations: [
      {
        id: 1,
        name: "Opera",
        imgUrl: "https://cdn.discordapp.com/icons/715121965563772980/a_cb1862f07e71861a7cc4eb5996ea6638.png?size=128"
      },
      {
        id: 2,
        name: "Python",
        imgUrl: "https://cdn.discordapp.com/icons/267624335836053506/a_e04f4ec89691e1894e91941c486f935d.png?size=128"
      },
      {
        id: 3,
        name: "Riot",
        imgUrl: "https://cdn.discordapp.com/icons/187652476080488449/64ecf1300e84c435fe1d30af7894dfb3.png?size=128"
      }
    ],
    currentConversation: 1
  },
  mutations: {
    setCurrentConversation(state, conversationId) {
      state.currentConversation = conversationId;
    },
    send(state, message) {
      state.messages.unshift({
        userId: 2,
        text: message
      });
    },
    setMessages(state, messages) {
      state.messages = [...messages];
    }
  },
  actions: {
    async loadMessages({ commit }, conversationId) {
      const messages = [
        {
          userId: 1,
          text: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
        },
        {
          userId: 2,
          text: "Spread love everywhere you go."
        },
        {
          userId: 3,
          text: "When you reach the end of your rope, tie a knot in it and hang on."
        },
        {
          userId: 3,
          text: "Always remember that you are absolutely unique. Just like everyone else."
        },
        {
          userId: 1,
          text: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
        },
        {
          userId: 2,
          text: "Spread love everywhere you go."
        },
        {
          userId: 3,
          text: "When you reach the end of your rope, tie a knot in it and hang on."
        },
        {
          userId: 3,
          text: "Always remember that you are absolutely unique. Just like everyone else."
        }
      ];

      await new Promise(resolve => setTimeout(resolve, 1));

      commit("setMessages", messages);
    }
  },
  modules: {}
});
