<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav class="w-full flex flex-row justify-between">
      <div class="flex flex-row justify-end">
        <div class=" font-bold text-2xl ">Wryan Cartie Halim</div>

      </div>
      <div class="flex flex-row justify-end space-x-5">
        <a>Home</a>
        <a>About Me</a>
        <a>Education</a>
        <a>Skills</a>
        <a>Experience</a>
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
         
       
          <!--Education Summary-->
          <div class="max-w-2xl">
            <h1 class="text-2xl"> Bachelor of Computer Science</h1>
            <p>Notable Cousework: Algorithms, Data Structures, Database, AI Python Programming, Web Programming, C++, PHP Development </p>
            <p>Thesis Name : Integration of Apache Kafka to Visualize WiFi positioning in 3D Map(整合Apache Kafka於3D地圖之視覺化WiFi定位)
)</p>
            <ul>Notable Moments:
              <li>Built a simple frontend for Tunghai University's </li>
              <li>Built an ALE web application using HTML/CSS/Javascript and PHP to collect and visualize the usage of Wi-Fi data in Tunghai University. </li>
              <li>Design and create promotionals for events as part of a volunteer for the local indonesian student association.</li>
            </ul>
          </div>
           <!--Photo Grid-->
          <div></div>
        </div>
      </div>
    </section>
    <section id="skills">
      <div class="containe  r mt-10 bg-gray-100">
        Skills
      </div>
    </section>
    <section id="experience"></section>
    <section id="projects"></section>
    <section id="contact"></section>
    <footer id="footer">
     <!--Footer Container-->
      <div class="bg-black text-white">
        <!--Menu bar-->
        <div class="flex flex-col space-y-4 md:flex-row">
          <!--Email and Phone-->
          <div>

          </div>
          <!--Linkedin and Github-->
          <div class="flex flex-col md:flex-row">

          </div>
        </div>
     </div> 
    </footer>
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
