<template>
    <div class="contact-wrap">
        <div class="container">
            <span>
                <h1 v-scroll="handleScroll" class="text" v-bind:class="{visible: isVisible}">Contact me:</h1>
                <h3 v-scroll="handleScroll" class="text" v-bind:class="{visible: isVisible}"> <a v-bind:href="mailaddress">@my mail_address </a></h3>
                <h3 v-scroll="handleScroll" class="text" v-bind:class="{visible: isVisible}"> Or my twitter : <a v-bind:href="twitter" > @mofumir </a></h3>
            </span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Contact',
  props: {
  },
  data () {
    return {
      mailaddress: 'mailto:' + 'katsuki.mizukoshi@gmail.com',
      twitter: 'https://twitter.com/mofumir',
      isVisible: false
    }
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 1050) {
        this.isVisible = true
      }
      return window.scrollY > 1050
    }
  }
}
</script>
<style lang="sass" scoped>
.contact-wrap
    position: relative
    width: 100%
    height: 400px
    background-color: #1d2e55
    color: #ddd
    text-align: left
    a
        color: #ddd
    .container
        position: absolute
        @include mq($until:md)
          margin: 50px 10%
        @include mq($from:md)
          margin: 75px 25%
        justify-content: center
        overflow: hidden
        .text
            overflow: hidden
            transform: translate3d(0, 400%, 0)
            transition: 1.5s
            &.visible
                transform: translate3d(0, 0%, 0)
            &:nth-child(1)
                transition-delay: 0.5s
            &:nth-child(2)
                transition-delay: 1s
            &:nth-child(3)
                transition-delay: 1.5s
</style>
