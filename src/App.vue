<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav class="w-full flex flex-row justify-between">
      <div class="flex flex-row space-x-5">
        <a>Home</a>
        <a>About Me</a>
        <a>Education</a>
        <a>Skills</a>
        <a>Experience</a>
      </div>
      <div class="flex flex-row justify-end">
        <div><img src=""/></div>

      </div>

    </nav>
    <section id="introduction">
      <div class="container mx-auto mt-20">
        <div class="flex flex-col md:flex-row space-x-10">
          <div class="flex-1"><img src='./assets/web-icon.png'/></div>
          <div class="flex-3 flex flex-col space-y-2 ">
            <h1 class="text-2xl bold">Hello, My name is Wryan Cartie Halim.</h1>
            <div class=" mt-2 border-blue-400 border-b-2"></div>
            <p class="mt-2 max-w-lg">I am a recent computer science graduate of Tunghai University with 1 year of internship experience. I am well versed in a variety of technologies</p>
            <p class="mt-2 max-w-lg">As a recent graduate, I am looking for new opportunities in web development, in the frontend/backend/fullstack. If you are looking for a passionate and self-driven developer who isn't afraid of challenges, please feel free to contact me</p>
            <button class="bg-blue-200 text-white w-1/2 mx-auto rounded-full  hover:outline-none py-2">Learn more about me</button>
          </div>
        </div>
      </div>
    </section>
    <section id="education">
      <div class="container mx-auto mt-20">
        <div class="flex flex-col md:flex-row justify-between">
          <!--Photo Grid-->
          <div></div>
          <!--Education Summary-->
          <div>Bachelor of Computer Science</div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
