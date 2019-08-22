<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import '~sanitize.css'
@import '~sanitize.css/forms.css'
@import '~sanitize.css/typography.css'

body
  font-size: calc(112.5% + 0.25vw)
  background-color: #222
  margin: 0, 0
  padding: 0, 0

@mixin section($color)
    $seccolor: $color
    background: $seccolor
    display: block
    width: 100vw
    height: 100vh

section
    @include section(#222)

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background-color: #222

</style>
