// Not really sure what I'm going to use this for yet, I mean there is no part that requires 'refreshing and ajaxing' included
<template>
    <div id="loader">
      <div id="loadingContainer">
         <div id="loadBar">
            <div id="loadBarValue"></div>
         </div>
         <div id="loadingPercent"></div>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoadingScreen'
})
</script>

<style lang="sass" scoped>
#loader
    content: ''
    display: flex
    position: fixed
    top: 0
    left: 0
    height: 100%
    width: 100%
    background-color: #222222
    z-index: 800
    margin: auto
    padding: auto
    justify-content: center
    align-items: center
    transition: 0.75s opacity
    #loadingContainer
        width: 30%
        height: 10%
        max-width: 350px
        #loadBar
            width: 100%
            height: 10%
            background: rgba(0,0,0,0.2)
            overflow: hidden
            #loadBarValue
                width: 0%
                float: left
                height: 100%
                background: #ffffff
        #loadingPercent
            color: #ffffff
</style>
