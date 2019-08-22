<template>
  <div class="home">
    <Trinity />
    <Title
    hWelcome="Welcome."
    p1Welcome="I am 'Katsuki Mizukoshi',"
    p2Welcome="and this is my site."></Title>
    <AboutMe
    hAboutMe="WHO AM I?"
    v-bind:pAboutMe="AboutMe" />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Trinity from '@/components/Trinity.vue'
import Title from '@/components/Title.vue'
import AboutMe from '@/components/AboutMe.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  components: {
    Trinity,
    Title,
    AboutMe,
    Portfolio,
    Contact
  },
  data: function () {
    return {
      AboutMe: `Webフロントエンジニアを目指している、
      千葉在住の21歳男性です。
      Javascript(Vue.js)でサイト作りをしています。
      趣味はゲーム、調べ物です。`
      // this p tag has style of white-space: pre-line
    }
  }
}
</script>
