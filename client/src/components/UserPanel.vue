<template>
  <div class="user-panel">
    <div class="user-panel-header">
      <b-icon icon="circle-fill" style="color: #9c1de7;"></b-icon>
      <b-icon icon="circle-fill" style="color: #f3558e;"></b-icon>
      <b-icon icon="circle-fill" style="color: #f9ff21;"></b-icon>
      <h2 class="room-name mt-3">Socket.io</h2>
    </div>
    <div class="mt-3">
      <div class="py-2">
        <b-avatar
          class="mr-2"
          src="https://semantic-ui-vue.github.io/static/images/avatar/small/lindsay.png"
        ></b-avatar>
        <span>Lindsay</span>
      </div>
      <div class="pb-2">
        <b-avatar
          class="mr-2"
          src="https://semantic-ui-vue.github.io/static/images/avatar/small/matthew.png"
        ></b-avatar>
        <span>Matthew Boss</span>
      </div>
      <div class="pb-2">
        <b-avatar
          class="mr-2"
          src="https://semantic-ui-vue.github.io/static/images/avatar/small/jenny.jpg"
        ></b-avatar>
        <span>Jenny Lawrence</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>