<script setup>

</script>

<template>
  <div class="min-w-screen">
    <div id="jumbotron" class="px-12 py-6 w-full min-w-screen">                                                     
      <nav
        class="container w-full flex flex-row justify-between max-w-6xl mx-auto"
      >
        <div class="md:w-1/3 w-1/2 mx-auto">
          <h2 class="text-white text-2xl text-center border py-1 bg-blac">
            Wryan Cartie Halim
          </h2>
        </div>
        <div
          class="hidden md:flex flex-row container max-w-6xl text-white justify-end space-x-5"
        >
          <a href="#app">Home</a>
          <a href="#introduction">About Me</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>
      <section id="introduction">
        <div class="container mx-auto mt-20 max-w-6xl">
          <div class="flex flex-col md:flex-row space-y-6 mb-10 md:space-y-4 text-white md:space-x-10 items-center ">
            <div class="md:flex-1"><img src="./assets/web-icon.png" /></div>
            <div class="md:flex-3 flex flex-col space-y-6 ">
              <h1 class="text-2xl bold">
                Hello, My name is Wryan Cartie Halim.
              </h1>
              <div class="mt-2 border-blue-400 border-b-2"></div>
              <p class="mt-2 max-w-lg leading-9">
                I am a recent computer science graduate of Tunghai University
                with 1 year of internship experience. I am well versed in a
                variety of modern web technologies, such as Javascript,
                Typescript, Vue, React, PHP/Laravel and Node.js.
              </p>
              <p class="mt-2 max-w-lg leading-9">
                As a recent graduate, I am looking for new opportunities in web
                development, in the frontend/backend/fullstack. If you are
                looking for a passionate and self-driven developer who isn't
                afraid of challenges, please feel free to contact me
              </p>
              <button
                class="bg-blue-200 text-white w-1/2 mx-auto rounded-full  hover:outline-none py-2"
              >
                Learn more about me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="px-12 w-screen">
      <section id="education">
        <div class="mx-auto mt-20 container max-w-6xl">
          <h1 class="text-center text-4xl mt-5 mb-2 font-semibold">Education</h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mb-8"></div>
          <div class="flex flex-col md:flex-row justify-between md:space-x-16">
            <!--Education Summary-->
            <div class="max-w-2xl flex-1">
              <h1 class="text-2xl font-semibold">Bachelor of Computer Science (B.S in Computer Science) <span class="font-normal">| Graduation Date:  June 2021</span> </h1>
              <div class="my-1 border-b-2 border-blue-500"></div>
  
              <p class="max-w-lg text-lg my-3">
                <span class="font-semibold">Notable Cousework: </span> Algorithms, Data Structures, Database, AI
                Python Programming, Web Programming, C++, PHP Backend Programming, Machine Learning Python, Java Programming.
              </p>
              <p class="max-w-lg text-lg my-3">
                <span class="font-semibold">Thesis: </span>Integration of Apache Kafka to Visualize WiFi
                positioning in 3D Map(整合Apache Kafka於3D地圖之視覺化WiFi定位)
                )
              </p>
              <h3 class="text-lg font-semibold mt-4 my-2">Notable Achievements:</h3>
              <ul class=" flex flex-col space-y-1 list-disc ml-1">
              
                <li class="max-w-lg text-lg text leading-8">Developed a responsive frontend for Tunghai University's Tunghai_TAPG chemistry team as part of their iGEM 2019 competition project.</li>
                <li class="list-none"><ul class="list-disc mx-5 ">
             
                  <li>Achieved this through six months of self-study in HTML, CSS, and JavaScript.</li>
                  <li>Contributed to the team's success, assisting in data visualization and user interaction for their chemistry research.</li>
                  <li>The project's success resulted in the team earning a silver medal in the competition.</li>
                </ul></li>
                <li class="max-w-lg text-lg leading-8">
                  Developed an ALE web application using HTML/CSS, JavaScript, and PHP as part of a thesis project to collect and visualize Wi-Fi data usage at Tunghai University.
                <ul>
                  <li class="list-disc text-normal">Additionally, implement Kafka in the project to leverage it's real-time data stream processing to provide real-time data analytics to the app. </li>
                </ul>
                </li>
                <li class="max-w-lg text-lg leading-8">
                  Volunteered to create promotionals for events as part of a
                  volunteer for the university's international office and.
                </li>
              </ul>
            </div>
            <!--Photo Grid-->
            <div
              class="grid grid-cols-2 w-full h-full grid-row-1 flex-1 gap-4 py-4"
            >
              <div class="col-span-2 h-[200%]">
                <img src="./assets/images/graduation-photo.jpg" class="" />
              </div>
              <div class="pb-0">
                <img
                  src="./assets/images/thesis-photo.png"
                  class="mx-auto mb-0 h-full"
                />
              </div>
              <div class="pb-0">
                <img src="./assets/images/ALE-photo.png" class="h-full" />
              </div>
              <div class="col-span-2 h-24">
                <img src="./assets/icons/thu-icon.png" class="object-cover h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div class="container mt-10 p-10 bg-gray-100">
          Skills
          <div class="flex flex-row justify-center items-center space-x-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
              <div>
              <h1>Frontend Skills</h1>
            <div class="grid grid-cols-4 bg-white">
              <div 
                class="bg-opacity-20 border-2 backdrop-blur-md rounded-full shadow-lg h-24 w-24 p-4"
              >
              <img src="./assets/logo/html-logo.png" class="w-full h-full "/>
            </div>
            <div 
                class="bg-opacity-20 border-2 backdrop-blur-md p-4  rounded-full shadow-lg h-24 w-24"
              >
              <img src="./assets/logo/vue-logo.png" class="w-full h-full "/>
            </div>
            <div 
                class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
              >
              <img src="./assets/logo/vue-logo.png"/>
            </div>
            <div 
                class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
              >
              <img src="./assets/logo/html-icon.png"/>
            </div>
             
            </div>
          </div>
        </div>
           </div>
          <!--Skill box 1-->
        </div>
      </section>
      <section id="experience">
        <div class="container relative mt-10 max-w-6xl mx-auto">
          <div
            class="flex flex-col md:flex-row justify-between items-center space-x-24"
          >
            <div class="bg-gray-200 left w-full relative md:pt-20">
              <div
                class="absolute -translate-x-1/2 h-32 w-32 p-4 rounded-full bg-black left-1/2 -top-8"
              >
                <img
                  src="./assets/icons/1-icon.png"
                  class="object-contain w-full h-full"
                />
              </div>
              <div>
                <h1>Hosting Inside LTD</h1>
                <h1>Fullstack Web Developer(Internship)</h1>
                <p>Xitun District, Taichung City, Taiwan</p>
                <p>I played a pivotal role in developing an e-commerce point-of-sale application for small stores, aimed at streamlining purchasing, sales, inventory management, and ordering processes. This solution addressed the need for efficient store operations and improved customer experiences.



</p>
                <p>
To bolster security and access control, I implemented a robust frontend authentication system using tokens sourced from the backend (BE). This three-tiered authentication system catered to Admins, Store Owners, and Customers, ensuring that data remained secure and accessible only to authorized users.</p>
                <p>
On the backend, I leveraged PHP/Laravel to create a RESTful API that seamlessly handled frontend (FE) requests. This allowed users to perform critical operations, including item creation, updates, and deletions, with ease and efficiency.</p>
                <p>One of my notable contributions was the design and optimization of a custom MySQL database schema. This schema overhaul significantly enhanced data efficiency, enabling rapid data retrieval for tasks such as managing serial numbers, tracking purchases and sales, and conducting inventory queries.</p>
              </div>
            </div>
            <div class="bg-gray-200 text-left w-full relative md:pt-20">
              <div
                class="absolute -translate-x-1/2 h-24 w-24 rounded-full bg-black left-1/2 -top-8 p-4"
              >
                <img
                  src="./assets/icons/2-icon.png"
                  class="object-contain w-full h-full"
                />
              </div>
              <div class="p-4 px-8">
                <h1>Bluente</h1>
                <h1>Fullstack Web Developer(Internship)</h1>
                <h3>Remote</h3>
                <p>
                  Collaborate with cross-function teams, including UI designers
                  and other developers, to implement an admin dashboard page
                  using Vue.js and Vite. This dashboard allowed for the
                  interactive visualization of customer demographics from the
                  company's mobile app, allowing the company to understand
                  better its target demographic and facilitate better decision
                  making
                </p>
                <p>
                  Utilize Test-Driven Development(TDD) methodology to create and
                  implement unit tests with Jest in order to improve the
                  reliability of the application.
                </p>
                <p>
                  Developed reusable UI components using ant-design-vue that are
                  critical to the data-visualization of the app such as tables,
                  charts, and graphs to simplify the UI creation proccess.
                </p>
                <p>
                  Collaborated closely with the Bluente server API to
                  efficiently fetch and manage JSON user data, making sure that
                  the data-fetching progress is instant and seamless to the
                  user. Authenthicated the proccess using JWT tokens that are
                  provided by the server for security.
                </p>
              </div>
            </div>
          </div>
          <div
            class="hidden absolute top-1/2 left-2 h-3 w-10/12 bg-blue-500 -z-10 md:block"
          ></div>
          <!--Vertical Line-->
          <div
            class="absolute w-2 h-full left-1/2 -ml-1 bg-cyan md:hidden"
          ></div>
        </div>
      </section>
      <section id="projects">
        <div class="container mt-10 text-center">
          <h1 class="text-3xl bold">Featured Projects:</h1>
          <!--Project View-->
          <div>
            <h1>Project Name</h1>
            <p>Project Overview</p>
            <button>View Project Details</button>
          </div>
        </div>
      </section>
      <div id="project-view"></div>
      <section id="contact"></section>
    </div>
    <footer id="footer" class="bg-black text-white mt-10">
      <!--Footer Container-->
      <div class="bg-black max-w-6xl mx-auto py-12 p-6">
        <!--Menu bar-->
        <div
          class="flex flex-col space-y-8 md:flex-row justify-between items-center md:space-y-0 "
        >
          <!--Email and Phone-->
          <div class="flex flex-col space-y-4">
            <div class="flex flex-row items-center space-x-2">
              <img
                src="./assets/icons/email-icon.png"
                class="bg-black h-8 w-8 rounded-full"
              />
              <h1 class="item">wryancartie@gmail.com</h1>
            </div>
            <div class="flex flex-row items-center space-x-2">
              <img
                src="./assets/icons/phone-icon.png"
                class="bg-black h-8 w-8 rounded-full"
              />
              <h1 class="item">(886) 908-046-941</h1>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-x-10 gap-y-2 mt-0">
            <a href="#app">Home</a>
            <a href="#introduction">About Me</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
          <!--Linkedin and Github-->
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
            <a class="" href="https://github.com/WryanCartie">
              <img
                src="./assets/icons/github-icon.png"
                class="h-16 w-16 rounded-full hover:scale-110"
              />
            </a>
            <a class="" href="https://www.linkedin.com/in/wryan-cartie-halim/">
              <img
                src="./assets/icons/linkedin-icon.png"
                class="h-16 w-16 rounded-full hover:scale-110"
              />
            </a>
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
