<template>
    <div class="wrap">
        <div class="content">
            <span>
            <span v-scroll="handleScroll"
            class="header"
            v-bind:class="{visible: isVisible}">{{ hAboutMe }}</span>
            </span>
            <span v-scroll="handleScroll"
            class="paragraph"
            v-bind:class="{visible: isVisible}">
            <p>{{ pAboutMe }}</p></span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AboutMe',
  props: {
    hAboutMe: String,
    pAboutMe: String
  },
  data: function () {
    return {
      isVisible: false
    }
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 250) {
        this.isVisible = true
      }
      return window.scrollY > 250
    }
  }
}
</script>

<style lang="sass" scoped>
.wrap
    position: relative
    width: 100vw
    background-color: #222
    color: #fff
    overflow: hidden
    @include mq($from:sm, $until:md)
        height: 350px
        text-align: center
        margin: auto
    @include mq($from:md, $until:lg)
        height: 350px
        margin: 0
    @include mq(lg)
        height: 350px
    .content
        position: absolute
        top: 15%
        text-align: left
        @include mq($from:sm, $until:md)
            left: auto
            margin: auto
        @include mq($from:lg, $until:xl)
            left: 40%
        >span
            display: block
            overflow: hidden
        .header
            display: inline-block
            transform: translate3d(0, 100%, 0)
            overflow: hidden
            font-size: 2em
            font-weight: bolder
            z-index: 2
            &.visible
                transition: 1s
                transform: translate3d(0, 0%, 0)
        .paragraph
            z-index: 1
            opacity: 0
            &.visible
                transition: 1s
                transition-delay: 1s
                opacity: 1
        p
            @include mq($until:md)
                font-size: 0.85em
            @include mq($from:lg)
                font-size: 1rem
            white-space: pre-line

</style>
