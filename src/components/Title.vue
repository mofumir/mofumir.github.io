<template>
    <div class="wrap">
        <vue-particles class="particles"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#222"
        :linesWidth="0"
        :lineLinked="false"
        :lineOpacity="0"
        :linesDistance="150"
        :moveSpeed=4
        :hoverEffect="false"
        :clickEffect="false">
        </vue-particles>
        <div id="headline">
            <h1>{{ hWelcome}}</h1>
            <p class="p1">{{ p1Welcome }}</p>
            <p class="p2">{{ p2Welcome }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    hWelcome: String,
    p1Welcome: String,
    p2Welcome: String
  }
}
</script>

<style lang="sass">
.wrap
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    position: relative
    width: 100vw
    height: 100vh
    overflow: auto
    .particles
        width: 100vw
        height: 100vh
        background: #26499d
        background: -moz-linear-gradient(top, #26499d 0%, #6c9bd2 100%)
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#26499d), color-stop(100%,#6c9bd2))
        background: -webkit-linear-gradient(top, #26499d 0%,#6c9bd2 100%)
        background: -o-linear-gradient(top, #26499d 0%,#6c9bd2 100%)
        background: -ms-linear-gradient(top, #26499d 0%,#6c9bd2 100%)
        background: linear-gradient(to bottom, #26499d 0%,#6c9bd2 100%)
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#26499d', endColorstr='#6c9bd2',GradientType=0 )
    #headline
        position: absolute
        display: block
        z-index: 999
        h1
          font-size: 3em
        p
            @include mq(sm)
                font-size: 1em
            @include mq(md)
                font-size: 1.5em
            @include mq(lg)
                font-size: 2em
            @include mq(xl)
                font-size: 2.5em
            width: 0%
            overflow: hidden
            white-space: nowrap
            margin: 0 auto
            letter-spacing: 0.10vw
            animation: typing 2s forwards
            &.p1
                animation-delay: 1s
            &.p2
                animation-delay: 2s
            @keyframes typing
                from
                    width: 0%
                to
                    width: 100%

</style>
