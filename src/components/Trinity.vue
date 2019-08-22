<template>
    <div id="menu-wrapper">
      <div id="triangle-container" >
         <div id="funbutton">
            <div class="shape" v-on:click='isOpen = !isOpen'>
               <div class="triangle back" v-bind:class="{ animated: isOpen }"></div>
               <div class="triangle middle" v-bind:class="{ animated: isOpen }"></div>
               <div class="triangle front" v-bind:class="{ animated: isOpen }"></div>
            </div>
            <div id="fun-menu">
               <li class="menu-item" id="github" v-bind:class="{ open: isOpen }" ><a href="https://github.com/mofumir" id="menu"><span class="fab fa-github"></span></a></li>
               <li class="menu-item" id="codepen" v-bind:class="{ open: isOpen }" ><a href="https://codepen.io/mofumir/" id="menu"><span class="fab fa-codepen"></span></a></li>
               <li class="menu-item" id="twitter" v-bind:class="{ open: isOpen }" ><a href="https://twitter.com/mofumir" id="menu"><span class="fab fa-twitter"></span></a></li>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Trinity',
  data: function () {
    return {
      isOpen: false
    }
  }
})
</script>

<style lang="sass">
#menu-wrapper
    position: fixed
    bottom: 5%
    left: 5%
    z-index: 20
    #funbutton
        @include triangle(4rem)
        z-index: 99
        cursor: pointer

    #fun-menu
        @include menu(3.5rem)
</style>
