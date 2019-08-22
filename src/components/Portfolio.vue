<template>
    <div class="portwrap">
        <span class="header"><h1 class="headline" v-scroll="handleScroll" v-bind:class="{visible: isVisible}">My Works</h1></span>
        <div class="contentBox" v-scroll="handleScroll" v-bind:class="{visible: isVisible}">
            <MyWork
            v-for="data in MyWorks"
            v-bind:key="data.id"
            v-bind:workname="data.workname"
            v-bind:thumbnail="data.thumbnail"
            v-bind:githublink="data.githublink"
            v-bind:projectlink="data.projectlink"
            />
        </div>
    </div>
</template>

<script>
import MyWork from '@/components/MyWork.vue'
import json from '../../public/data/portfolio.json'
export default {
  name: 'Portfolio',
  components: {
    MyWork
  },
  data: function () {
    return {
      isVisible: false,
      MyWorks: json
    }
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 600) {
        this.isVisible = true
      }
      return window.scrollY > 600
    }
  }
}
</script>

<style lang="sass">
.portwrap
    position: relative
    background-color: #ddd
    color: #333
    margin: 0
    display: flex
    vertical-align: top
    align-items: stretch
    min-height: 20vh
    flex-direction: column
    .header
        flex: initial
        height: 6em
        width: 100vw
        background-color: #555
        overflow: hidden
        .headline
            transform: translate3d(0, 150%, 0)
            &.visible
                transition: 1s
                transform: translate3d(0, 0%, 0)
    .contentBox
        flex-basis: 100%
        background-color: #444
        display: flex
        flex-wrap: wrap
        justify-content: flex-start
        opacity: 0
        margin: 1vh
        min-height: 200px
        &.visible
            transition: 1s
            transition-delay: 1s
            opacity: 1
</style>
