<template>
    <div class="container">
        <img class="thumbnail" v-bind:src="`${publicPath}`+`data/myworkicons/`+thumbnail" alt="">
        <div class="descContainer">
            <h4 class="name">{{ workname }}</h4>
            <a v-bind:href="githublink"><button class="github">Github Repo</button></a>
           <a v-bind:href="projectlink"><button class="project">Project Link</button></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyWork',
  props: {
    thumbnail: String,
    workname: String,
    githublink: String,
    projectlink: String
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="sass" scoped>
@mixin button($catcolor)
    $bgcolor: #ddd
    cursor: pointer
    @include mq($until: lg)
        background-color: $catcolor
        color: $bgcolor
        &:active
            background-color: $bgcolor
    @include mq($from: lg)
        background-color: $bgcolor
        border-color: $catcolor
        transition: 0.5s
        &:hover
            background-color: $catcolor
            color: $bgcolor

.container
    margin: 0.25em
    border: thick double
    background-color: #333
    color: #eee
    width: 100%
    display: flex
    overflow: hidden
    @include mq($until: md)
        height: 400px
        flex-direction: column
    @include mq($from: md)
        height: 200px
        flex-direction: row
    @include mq($from: xl)
        width: 47.5%
        margin: auto
    .thumbnail
        flex: initial
        width: 175px
        height: 175px
        @include mq($until: md)
            margin: auto
            margin-top: 7.5px
            margin-bottom: 7.5px
        @include mq($from: md)
            margin: 7.5px
            margin-top: 7.5px
            margin-bottom: 7.5px
    .descContainer
        flex: auto
        display: flex
        flex-wrap: wrap
        .name
            width: 100%
        .description
        a
            height: 30%
            margin: auto
            text-decoration: none
            color: #111
            @include mq($until: md)
                width: 100%
            @include mq($from: md)
                width: 45%
            button
                width: 100%
                height: 100%
                margin: 0 0
            .github
                @include button(#6e5494)
            .project
                @include button(#00aced)

</style>
