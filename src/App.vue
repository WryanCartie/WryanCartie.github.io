<script setup></script>

<template>
  <div class="min-w-screen">
    <div id="jumbotron" class="px-12 py-6 w-full min-w-screen">
      <nav
        class="container w-full sticky flex flex-row justify-between max-w-6xl mx-auto"
      >
        <div class="md:w-1/3 w-1/2 mx-auto">
          <h2 class="text-white text-2xl text-center border py-1 bg-blac">
            Wryan Cartie Halim
          </h2>
        </div>
        <div
          class="hidden md:flex flex-row container max-w-6xl text-white justify-end space-x-5 text-xl"
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
          <div
            class="flex flex-col-reverse md:flex-row space-y-10 mb-10 md:space-y-0 text-white md:space-x-10 items-center"
          >
            <div class="md:flex-3 flex flex-col space-y-6 my-8">
              <h1 class="text-2xl font-semibold">
                Hello, My name is Wryan Cartie Halim (陳瑞言).
              </h1>
              <div class="mt-2 border-blue-400 border-b-2"></div>
              <p class="mt-2 max-w-lg leading-9 lg:text-xl">
                I am an Indonesian web developer with 1 and a half year of
                developmental experience based in Taichung, Taiwan. My main
                expertise lies in building responsive, user-friendly web
                application frontend.
              </p>
              <p class="mt-2 max-w-lg leading-9 lg:text-xl">
                I am well versed in a variety of technologies of web
                development. I am profficient in building frontends using
                HTML/CSS/Javascript, Typescript, Vue, React, and Next.js. On the
                backend side, I am skilled in building REST API backends using
                Node.js/Express and PHP/Laravel. Lastly, My expertise also
                involve building databases using SQL and Non-SQL using mySQL and
                Mongo DB, respectively.
              </p>
              <p class="mt-2 max-w-lg leading-9 lg:text-xl">
                Currently, I am looking for new opportunities in the web
                development field across Taiwan. If you are looking for a
                self-driven, passionate developer who can handle challenges,
                feel free to reach out to me.
              </p>
              <a
                href="#education"
                class="text-center bg-blue-500 border-2 border-blue-500 text-white w-1/2 mx-auto rounded-full hover:outline-none py-2 hover:bg-white hover:text-blue-500"
              >
                Learn more about me
              </a>
            </div>
            <div class="md:flex-1 md:my-0">
              <img src="./assets/web-icon.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="px-12 w-screen">
      <section id="education">
        <div class="mx-auto mt-20 container max-w-6xl">
          <h1 class="text-center text-4xl mt-5 mb-2 font-semibold">
            Education
          </h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mb-8"></div>
          <div class="flex flex-col md:flex-row justify-between md:space-x-16">
            <!--Education Summary-->
            <div class="max-w-2xl flex-1">
              <h1 class="text-2xl font-semibold">
                Bachelor of Computer Science (B.S in Computer Science)
                <span class="font-normal">| Graduation Date: June 2021</span>
              </h1>
              <div class="my-1 border-b-2 border-blue-500"></div>

              <p class="max-w-lg text-lg my-3">
                <span class="font-semibold">Notable Cousework: </span>
                Algorithms, Data Structures, Database, AI Python Programming,
                Web Programming, C++, PHP Backend Programming, Machine Learning
                Python, Java Programming.
              </p>
              <p class="max-w-lg text-lg my-3">
                <span class="font-semibold">Thesis: </span>Integration of Apache
                Kafka to Visualize WiFi positioning in 3D Map(整合Apache
                Kafka於3D地圖之視覺化WiFi定位) )
              </p>
              <h3 class="text-lg font-semibold mt-4 my-2">
                Notable Achievements:
              </h3>
              <ul class="flex flex-col space-y-1 list-disc ml-1">
                <li class="max-w-lg text-lg text leading-8">
                  Developed a responsive frontend for Tunghai University's
                  Tunghai_TAPG chemistry team as part of their iGEM 2019
                  competition project.
                </li>
                <li class="list-none">
                  <ul class="list-disc mx-5">
                    <li>
                      Achieved this through six months of self-study in HTML,
                      CSS, and JavaScript.
                    </li>
                    <li>
                      Contributed to the team's success, assisting in data
                      visualization and user interaction for their chemistry
                      research.
                    </li>
                    <li>
                      The project's success resulted in the team earning a
                      silver medal in the competition.
                    </li>
                  </ul>
                </li>
                <li class="max-w-lg text-lg leading-8">
                  Developed an ALE web application using HTML/CSS, JavaScript,
                  and PHP as part of a thesis project to collect and visualize
                  Wi-Fi data usage at Tunghai University.
                  <ul class="list-disc mx-5">
                    <li class="list-disc text-normal text-base leading-normal">
                      Additionally, implement Kafka in the project to leverage
                      it's real-time data stream processing to provide real-time
                      data analytics to the app.
                    </li>
                  </ul>
                </li>
                <li class="max-w-lg text-lg leading-8">
                  Volunteered to create promotionals for events as part of a
                  volunteer for the university's international office and local
                  Indonesian student Association.
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
                <img
                  src="./assets/icons/thu-icon.png"
                  class="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div class="container mt-10 p-10 max-w-6xl mx-auto">
          <h1 class="text-center text-4xl mt-5 mb-2 font-semibold">Skills</h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mb-12"></div>
          <div class="flex flex-col max-w-5xl mx-auto space-y-16 text-center">
            <!--Skill Box-->
            <div class="mx-auto">
              <h1 class="text-3xl">Frontend Development</h1>
              <div
                class="border border-b-4 w-1/2 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div class="flex flex-row space-x-5 my-2 justify-center">
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/html-icon.png"
                    class="w-full h-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/css-logo.png"
                    class="w-full h-full hover:animate-pulse"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/js-logo.png"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/typescript-logo.png"
                    class="w-full h-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img src="./assets/logo/vue-logo.png" class="w-full h-full" />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-0 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/react-logo.jpg"
                    class="w-full h-full rounded-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/next-logo.png"
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div class="mx-auto">
              <h1 class="text-3xl">Backend Development and Database</h1>
              <div
                class="border-b-4 mx-auto w-3/4 mb-6 my-2 border-b-blue-400"
              ></div>
              <div class="flex flex-row space-x-5 my-2 justify-center">
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-6 px-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/node-logo.png"
                    class="w-full h-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-6 px-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/express-logo.png"
                    class="w-full h-full rounded-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-6 px-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/php-logo.png"
                    class="w-full rounded-full h-full object-fit"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-8 px-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/laravel-logo.png"
                    class="w-full h-full rounded-lg"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md px-2 py-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/sqlite-logo.png"
                    class="w-full h-full rounded-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/mysql-logo.png"
                    class="w-full h-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-2 px-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/mongodb-logo.jpg"
                    class="w-full h-full object-fit rounded-full"
                  />
                </div>
              </div>
            </div>

            <div class="mx-auto">
              <h1 class="text-3xl">Testing and Tools</h1>
              <div
                class="border border-b-4 w-1/2 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div class="flex flex-row space-x-5 my-2 justify-center">
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/vscode-logo.png"
                    class="w-full h-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-1 px-1 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/git-logo.png"
                    class="w-full h-full rounded-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/jest-logo.png"
                    class="bg-whitew-full h-full object-cover"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-5 px-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/kafka-logo.jpg"
                    class="w-full rounded-full h-full"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/xampp-logo.png"
                    class="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div class="mx-auto w-3/4">
              <h1 class="text-3xl">Languanges</h1>
              <div
                class="border border-b-4 w-1/2 mb-6 my-2 border-b-blue-400 mx-auto"
              ></div>
              <div
                class="flex flex-col space-y-10 my-2 items-center justify-center w-full"
              >
                <div class="flex flex-row space-x-8 w-3/4 mx-auto">
                  <div
                    class="group bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24 flex items-center justify-center"
                  >
                    <h1 class="text-3xl text-center">中語</h1>
                  </div>
                  <div class="flex flex-col space-y-3 justify-center w-full">
                    <h2 class="text-xl text-left">
                      Chinese Level: Intermediate (Conversational)
                    </h2>
                    <div
                      class="w-full mx-auto self-end bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                    >
                      <div class="bg-orange-500 h-2.5 w-1/2 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row space-x-8 w-3/4 mx-auto">
                  <div
                    class="group bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24 flex items-center justify-center"
                  >
                    <h1 class="text-3xl text-center">英語</h1>
                  </div>
                  <div class="flex flex-col space-y-3 justify-center w-full">
                    <h2 class="text-xl text-left">
                      English Level: Native/Billingual
                    </h2>
                    <div
                      class="w-full mx-auto self-end bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                    >
                      <div
                        class="bg-orange-500 h-2.5 w-full rounded-full"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row space-x-8 w-3/4 mx-auto">
                  <div
                    class="group bg-opacity-20 border-2 backdrop-blur-md py-6 rounded-full shadow-lg h-24 w-24 flex items-center justify-center"
                  >
                    <h1 class="text-3xl text-center">印尼語</h1>
                  </div>
                  <div class="flex flex-col space-y-3 justify-center w-full">
                    <h2 class="text-xl text-left">Indonesian Level: Native</h2>
                    <div
                      class="w-full mx-auto self-end bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                    >
                      <div
                        class="bg-orange-500 h-2.5 w-full rounded-full"
                      ></div>
                    </div>
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
          <h1 class="text-center text-4xl mt-5 mb-2 font-semibold">Experience</h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mb-12"></div>
          <div
            class="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 space-x-24 "
          >
            <div class=" bg-gray-100 left max-w-lg relative md:pt-20 rounded-lg shadow-md shadow-black">
              <div
                class=" font-bold text-7xl text-cyan-200 absolute -translate-x-1/2 h-24 w-24 p-4 rounded-full bg-blue-400 left-1/2 -top-8 flex items-center justify-center"
              >
               1
              </div>
              <h1 class="text-center font-semibold text-2xl">July 2021 - February 2022</h1>
              <div
                class="border border-b-4 w-2/3 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div class="p-6 px-8 text-left flex flex-col space-y-2">
                <h1 class="text-2xl">Hosting Inside LTD</h1>
                <h1 class="text-xl">Fullstack Web Developer</h1>
                <p class="text-xl">Xitun District, Taichung City, Taiwan</p>
                <ul class="list-disc">
                <li class="leading-8 text-sm max-w-lg ">
                  I played a pivotal role in developing an e-commerce
                  point-of-sale application for small stores, aimed at
                  streamlining purchasing, sales, inventory management, and
                  ordering processes. This solution addressed the need for
                  efficient store operations and improved customer experiences.
                </li>
                <li class="leading-8 text-sm">
                  To bolster security and access control, I implemented a robust
                  frontend authentication system using tokens sourced from the
                  backend (BE). This three-tiered authentication system catered
                  to Admins, Store Owners, and Customers, ensuring that data
                  remained secure and accessible only to authorized users.
                </li>
                <li class="leading-8 text-sm">
                  On the backend, I leveraged PHP/Laravel to create a RESTful
                  API that seamlessly handled frontend (FE) requests. This
                  allowed users to perform critical operations, including item
                  creation, updates, and deletions, with ease and efficiency.
                </li>
              </ul>
          
              </div>
            </div>
            <div class="bg-gray-100 left max-w-lg relative md:pt-20 rounded-lg shadow-md shadow-black">
              <div
                class=" font-bold text-7xl text-cyan-200 absolute -translate-x-1/2 h-24 w-24 p-4 rounded-full bg-blue-400 left-1/2 -top-8 flex items-center justify-center"
              >
               2
              </div>
              <h1 class="text-center font-semibold text-2xl">February 2022 - Present</h1>
              <div
                class="border border-b-4 w-2/3 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div class="p-6 px-8 text-left flex flex-col space-y-2">
                <h1 class="text-2xl">Bluente</h1>
                <h1 class="text-xl">Frontend Web Developer</h1>
                <h3 class="text-xl">Remote</h3>
                <ul class="list-disc leading-8 text-sm">
                <li>
                  Collaborate with cross-function teams, including UI designers
                  and other developers, to implement an admin dashboard page
                  using Vue.js and Vite. This dashboard allowed for the
                  interactive visualization of customer demographics from the
                  company's mobile app, allowing the company to understand
                  better its target demographic and facilitate better decision
                  making
                </li>
                <li>
                  Utilize Test-Driven Development(TDD) methodology to create and
                  implement unit tests with Jest in order to improve the
                  reliability of the application.
                </li>
                <li>
                  Developed reusable UI components using ant-design-vue that are
                  critical to the data-visualization of the app such as tables,
                  charts, and graphs to simplify the UI creation proccess.
                </li>
           
                </ul>
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
        <div class="container mt-10 text-center border-tl-2 border-br-2 relative">
          <div class="absolute top-0 left-0 border-t-2 border-l-2 border-blue-400 h-full w-1/2"></div>
          <div class="absolute bottom-0 right-0 border-b-2 border-r-2 border-blue-400 h-full w-1/2"></div>
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
          class="flex flex-col space-y-8 md:flex-row justify-between items-center md:space-y-0"
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
          <div
            class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
          >
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
