<template>
  <div class="channel">
    <div class="channel__details">
      <img :src="this.$props.avatar" alt="img channel">
      <p>{{ this.$props.name }}</p>
    </div>
    <p>{{ follower }}</p>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    avatar: String,
    name: String,
    follower: String
  },
  mounted() {
    console.log(this.avatar)
  }
}
</script>

<style lang="scss" scoped>
.channel {
  cursor: pointer;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;

  &:hover {
    background-color: #25252c;
  }

  &__details {
    display: flex;
    align-items: center;
  }

  & > div > img {
    object-fit: contain;
    margin-right: 5px;
    width: 70px;
  }
}

</style>