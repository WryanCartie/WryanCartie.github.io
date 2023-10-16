<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";

const projects = reactive([
  {
    name: "Clancraft Army Manager",
    introduction:
      " A Vue/Tailwind CSS Web app to manage virtual armies of a game.",
    description:
      "A web application develped using Vue and Tailwind CSS to manage army data of a roleplaying game. Uses a node.js backend to manage the backend JSON army data, comes with a feature to import/export into excel files",
    technologies: ["vue", "tailwind", "js", "node"],
    introductionImageLink: new URL("./assets/images/cam-1.png", import.meta.url)
      .href,
    hosted: true,
    hostedLink: "https://clancraft-army-manager-frontend.onrender.com",
    githubLink: "https://github.com/7GCraft/Clancraft-Army-Manager",
    role: "Role: Project Manager, Lead Developer (Vue/Node.js), Designer",
    hosting: "Firebase (Outdated)",
    remarks:
      "This project allows me to improve my skills in building functional front-ends using Vue and Tailwind CSS from scratch to build a user-friendly app for a specific purpose. Additionally, this project  hone my skills in Node/Express.js and how to handle JSON data from the FE to the BE and vice versa. Lastly, the custom, changing requirements of the project improve my ability to develop new features in order to adapt to changing circumstances of the project. ",
    imagesLink: ["cam-1", "cam-2", "cam-3", "cam-4"],
  },
  {
    name: "CES Manager",
    description:
      "A desktop application built using Electron and Node to handle the economic data of a roleplaying game. Comes with an in-built SQL database using SQLite3 for data management. Currently, the project is starting to use Vue as the basis for its FE.",
    remarks:
      "In this project, I honed my fullstack development skills in a desktop environment with Electron, Javascript and Node.js. My recent accomplishment involved a complete overhaul of the frontend, using Vue.js and Tailwind CSS to enhance responsiveness and modernize the user interface. This project also provided me with a profound understanding of agile teamwork using Pivotal Tracker and Git, collaborating seamlessly with other developers in a bi-weekly meeting format.",
    introduction:
      " An electron desktop app to manage the economic system of a roleplaying game",
    technologies: ["js", "node", "sqlite", "vue", "tailwind"],
    introductionImageLink: new URL("./assets/images/ces-1.png", import.meta.url)
      .href,
    githubLink: "https://github.com/7GCraft/ces-manager",
    imagesLink: ["ces-1", "ces-2", "ces-3", "ces-4"],
    role: "Role: Frontend Developer Lead, Fullstack Programmer, Designer",
  },
  {
    name: "Favourite Places App",
    introduction: "A MERN Web app to share and upload your favourite places.",
    technologies: ["react", "js", "mongodb", "node", "express"],
    introductionImageLink: new URL(
      "./assets/images/favourite_place-1.png",
      import.meta.url,
    ).href,
    description:
      "A web app built using the MERN stack(Mongo DB, Express, Node, and React.js) to share your favourite places with other users. The app uses a Node/Express backend that comes with server-side authenthication to handle MongoDB data using Mongoose. Comes with a login and signup feature. ",
    remarks:
      "This app taught me how to work in a fullstack envinronment, from the React FE to the Node backend, in order to create a hollistic app that connects seamlessly between the FE and the BE. The project also allow to implement key features in React, such as state-management and client-side routing. Lastly, it taught me how to work with Non-SQL database, especially with MongoDB and how to do CRUD operations to it using Node/Express.js.",
    role: "Sole Fullstack Developer (MERN), Designer",
    hosted: true,
    hosting: "Render",
    hostedLink: "https://favourite-places-app-mern.onrender.com/",
    githubLink: "https://github.com/WryanCartie/MERN-Fullstack-Application",
    imagesLink: [
      "favourite_place-1",
      "favourite_place-2",
      "favourite_place-3",
      "favourite_place-4",
    ],
  },
]);
const targetNum = ref(0);
const projectNum = ref(0);





const changeProjectImg = (val) => {
  projectNum.value += val;
  if (projectNum.value > 3) {
    projectNum.value = 0;
  }
  if (projectNum.value < 0) {
    projectNum.value = 3;
  }
};

const generateTechUrl = (techs) => {
  let techUrl = techs.map((tech) => {
    return new URL(`./assets/logo/${tech}-logo.png`, import.meta.url).href;
  });
  return techUrl;
};

const generateProjectUrl = (img) => {
  let imgUrl = new URL(`./assets/images/${img}.png`, import.meta.url).href;
  return imgUrl;
  /*
  let imgUrl = imgs.map(img=>{
    return new URL(`./assets/images/${img}.png`, import.meta.url).href
  }) */
};

const sendEmail = async () => {
  // Make an HTTP POST request to the backend with formData
  await axios
    .post(
      "https://portofolio-backend-5646e-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json",
      JSON.stringify(formEmailData),
    )
    .then((response) => {
      // Handle success, e.g., show a success message
      console.log("Email sent successfully", response.data);
    })
    .catch((error) => {
      // Handle errors, e.g., show an error message
      console.error("Error sending email", error);
    });
};

const formEmailData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const currentProject = computed(() => {
  return projects[targetNum.value];
});

const showProjectModal = ref(false);

const showModalContent = ref(false);

const toggleProjectDetails = () => {
  showProjectModal.value = !showProjectModal.value;
  projectNum.value = 0;
  setTimeout(()=>{
    showModalContent.value = !showModalContent.value
  },10)
};

const changeProject = (value) => {
  targetNum.value += value;
  if (targetNum.value >= projects.length) {
    targetNum.value = 0;
  } else if (targetNum.value < 0) {
    targetNum.value = projects.length - 1;
  }
};
</script>

<template>
 
  <div class="min-w-screen">
    <Transition name="fade-jumbotron" appear>
    <div  id="jumbotron" class="px-12 py-6 min-w-screen square xyz-in" xyz="fade small">
      <Transition name="insert-intro" appear>
        <div>
      <nav
        class="xyz-nested container w-full sticky flex flex-row justify-between max-w-6xl mx-auto"
      >
        <div class="md:w-1/3 w-1/2 mx-auto">
          <h2 class="text-white text-2xl text-center border py-1 bg-blac">
            Wryan Cartie Halim
          </h2>
        </div>
        <div
          class="hidden md:flex flex-row container max-w-6xl text-white justify-end space-x-5 text-xl"
        >
          <a href="#introduction">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </nav>
   
      <section id="introduction">
        <div class="container mx-auto mt-20 max-w-6xl p-10 relative">
        
          <div
            class="flex flex-col-reverse md:flex-row space-y-10 mb-10 md:space-y-0 text-white md:space-x-10 items-center"
          >
            <div class="md:flex-3 flex flex-col space-y-6 my-8">
              <h1 class="text-2xl font-semibold tracking-wider">
                Hello, My name is Wryan Cartie Halim (陳瑞言)
              </h1>
              <div class="mt-2 border-blue-600 border-b-2"></div>
              <p class="mt-2 max-w-lg leading-10 tracking-widest text-xl ">
                I am a <span class="text-blue-200 font-bold">Software Engineer </span> with a focus on building <span class="text-blue-200 font-bold">responsive and user-friendly </span> web applications using cutting-edge technologies. I am passionate about delivering web application that meet your unique goals and objectives, <span class="font-bold text-blue-200">no matter how difficult or complex your requirements are </span>.
              </p>
              
              <a
                href="#education"
                class="text-center bg-blue-500 border-2 border-blue-500 text-white w-1/2 mx-auto rounded-full hover:outline-none py-2 hover:bg-white hover:text-blue-500"
              >
                Learn more about me
              </a>
            </div>
            <div class="md:flex-1 md:my-0 flex items-center justify-center">
              <img src="./assets/images/real.jpg" class="rounded-full h-100 w-80 " />
            </div>
          </div>
         
        </div>
      </section>
    </div>
      </Transition>
    </div>
    </Transition>
    <Transition name="fade-content" appear>
    <div>
    <section id="about-me">
      <div class="mx-auto mt-20 container max-w-6xl">
        <h1 class="text-center text-4xl mt-5 mb-2 font-semibold">
            About me
          </h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mb-12"></div>
          <div class="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0 md:space-x-8">
            
              <img src="./assets/images/about-me.png" class=" md:w-full md:object-contain "/>
          
            <div>
              <p class="mt-2 max-w-xl leading-9 trackiong-wide lg:text-xl">
                I'm a web developer based in Taichung, Taiwan, with 1.5 years of
                hands-on experience in creating responsive and user-friendly web
                applications. My passion for web development has led me to
                become proficient in a range of technologies, making me a
                potential asset to anyone looking for a passionate/creative
                developer.
              </p>
              <p class="mt-2 max-w-xl leading-9 tracking-wide lg:text-xl">
                My expertise spans the full spectrum of web development
                technologies. On the frontend, I excel in crafting captivating
                user interfaces using HTML, CSS, JavaScript, TypeScript, and
                popular frameworks like Vue, React, and Next.js. On the backend,
                I have a strong background in building robust REST API services
                with Node.js/Express and PHP/Laravel. I'm equally comfortable
                working with both SQL and NoSQL databases, having experience
                with MySQL and MongoDB.
              </p>
              <p class="mt-2 max-w-xl tracking-wide leading-9 lg:text-xl">
                As part as my commitment to become a better developer, I keep honing my skills and learning new technologies. Most recently, I expanded my skillset into Typescript, a js framework that have been getting popular in recent years. On the frontend side, I also expanded my skillset into learning server-side rendering and SEO concepts by mastering Next.js, a server-side rendering framework for React. On the other hand, I've also expanded my expertise in node.js, seeking to master GraphQL and broaden my backend skills. 
                </p>
              <p class="mt-2 max-w-xl tracking-wide leading-9 lg:text-xl">
                My mission is to turn your web development challenges into
                innovative solutions. If you're seeking a self-driven developer
                who can bring a unique blend of technical skills and creativity
                to your project, don't hesitate to get in touch. Let's discuss
                how I can help you achieve your goals and contribute to your team.
                </p>
            </div>
          </div>
      </div>
    </section>
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

              <p class="md:max-w-lg text-lg my-3">
                <span class="font-semibold">Notable Cousework: </span>
                Algorithms, Data Structures, Database, AI Python Programming,
                Web Programming, C++, PHP Backend Programming, Machine Learning
                Python, Java Programming.
              </p>
              <p class="md:max-w-lg text-lg my-3">
                <span class="font-semibold">Thesis: </span>Integration of Apache
                Kafka to Visualize WiFi positioning in 3D Map(整合Apache
                Kafka於3D地圖之視覺化WiFi定位) )
              </p>
              <h3 class="text-lg font-semibold mt-4 my-2">
                Notable Achievements:
              </h3>
              <ul class="flex flex-col space-y-1 md:list-disc ml-1">
                <li class="md:max-w-lg text-lg text leading-8">
                  Developed a responsive frontend for Tunghai University's
                  Tunghai_TAPG chemistry team as part of their iGEM 2019
                  competition project.
                </li>
                <li class="list-none">
                  <ul
                    class="md:list-disc md:mx-5 md:tracking-normal tracking-wider"
                  >
                    <li>
                      Achieved this through six months of self-study in HTML,
                      CSS, and JavaScript.
                    </li>
                    <li>
                      Contributed to the team's success by providing a clear
                      platform to display and visualize their research in an
                      effective manner for the competition.
                    </li>
                    <li>
                      The project's success contributed in the team earning a
                      silver medal in the competition.
                    </li>
                  </ul>
                </li>
                <li class="max-w-lg text-lg leading-8">
                  Developed an ALE web application using HTML/CSS, JavaScript,
                  and PHP as part of a thesis project to collect and visualize
                  Wi-Fi data usage at Tunghai University.
                  <ul
                    class="md:list-disc tracking-wide md:tracking-normal md:mx-5"
                  >
                    <li
                      class="md:list-disc text-normal text-base leading-normal"
                    >
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
            <div class="mx-auto w-full">
              <h1 class="text-3xl">Frontend Development</h1>
              <div
                class="border border-b-4 w-1/2 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div
                class="grid grid-cols-3 sm:grid-cols-4 gap-4 md:flex flex-row md:space-x-5 my-2 justify-center"
              >
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/js-logo.png"
                    class="w-full h-full object-cover hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/css-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-5 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/typescript-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-5 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/vue-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/css-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-1 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/react-logo.jpg"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-2 px-1 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/next-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div class="mx-auto w-full">
              <h1 class="text-3xl">Backend Development and Database</h1>
              <div
                class="border-b-4 mx-auto w-1/2 mb-6 my-2 border-b-blue-400"
              ></div>
              <div
                class="grid grid-cols-3 sm:grid-cols-4 gap-4 md:flex flex-row md:space-x-5 my-2 justify-center"
              >
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-6 px-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/node-logo.png"
                    class="w-full h-full scale:50 md:scale-100 hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-8 px-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/express-logo.png"
                    class="w-full h-full rounded-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-6 px-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/php-logo.png"
                    class="w-full rounded-full h-full object-fit hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-8 px-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/laravel-logo.png"
                    class="w-full h-full rounded-lg hover:scale-110 cursor-pointer"
                  />
                </div>

                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md px-4 py-5 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/mysql-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-3 px-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/mongodb-logo.jpg"
                    class="w-full h-full object-fit rounded-full hover:scale-110 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div class="mx-auto w-full">
              <h1 class="text-3xl">Testing and Tools</h1>
              <div
                class="border border-b-4 w-1/2 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div
                class="grid grid-cols-3 sm:grid-cols-4 gap-4 md:flex flex-row md:space-x-5 my-2 justify-center"
              >
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/vscode-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md py-3 px-2 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/git-logo.png"
                    class="w-full h-full rounded-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-4 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/jest-logo.png"
                    class="bg-white w-full h-full object-cover hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-6 px-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/kafka-logo.jpg"
                    class="w-full rounded-full h-full hover:scale-110 cursor-pointer"
                  />
                </div>
                <div
                  class="bg-opacity-20 border-2 backdrop-blur-md p-3 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    src="./assets/logo/xampp-logo.png"
                    class="w-full h-full hover:scale-110 cursor-pointer rounded-full"
                  />
                </div>
              </div>
            </div>
            <div class="mx-auto w-3/4">
              <h1 class="text-3xl">Languages</h1>
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
                    <h1
                      class="text-2xl sm:text-3xl text-center hover:scale-110 cursor-pointer"
                    >
                      中語
                    </h1>
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
                    <h1
                      class="text-2xl sm:text-3xl text-center hover:scale-110 cursor-pointer"
                    >
                      英語
                    </h1>
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
                    <h1
                      class="text-2xl sm:text-3xl text-center hover:scale-110 cursor-pointer"
                    >
                      印尼語
                    </h1>
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
          <h1 class="text-center text-4xl mt-5 mb-2 font-semibold">
            Experience
          </h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mb-12"></div>
          <div
            class="flex flex-col md:flex-row justify-between space-y-20 md:space-y-0 md:space-x-24"
          >
            <div
              class="bg-gray-100 left md:max-w-lg relative pt-20 rounded-lg shadow-md shadow-black"
            >
              <div
                class="font-bold text-7xl text-cyan-200 absolute -translate-x-1/2 h-24 w-24 p-4 rounded-full bg-blue-400 left-1/2 -top-8 flex items-center justify-center"
              >
                1
              </div>
              <h1 class="text-center font-semibold text-2xl">
                July 2021 - February 2022
              </h1>
              <div
                class="border border-b-4 w-2/3 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div class="p-6 px-8 text-left flex flex-col space-y-2">
                <h1 class="text-2xl">Hosting Inside LTD</h1>
                <h1 class="text-xl">Fullstack Web Developer</h1>
                <p class="text-xl">Xitun District, Taichung City, Taiwan</p>
                <ul class="list-disc">
                  <li class="leading-8 text-sm max-w-lg">
                    Developed an e-commerce point-of-sale application for small
                    stores, aimed at streamlining purchasing, sales, inventory
                    management, and ordering processes. This solution addressed
                    the need for efficient store operations and improved
                    customer experiences.
                  </li>
                  <li class="leading-8 text-sm">
                    Implemented a robust frontend authentication system using
                    tokens sourced from the backend (BE). This three-tiered
                    authentication system are admins, store-owners ,and clients.
                    This three-level authenthication system allow for a seamless
                    integration between customer, store-owner and admin usage.
                  </li>
                  <li class="leading-8 text-sm">
                    Created a PHP/Laravel RESTful API to seamlessly handle
                    frontend (FE) requests. This allowed users to perform store
                    operations, including making purchases, sales, adding items,
                    etc. Key achievement include creationg of custom serial
                    number system based on client requirements, creating
                    addition to the backend handler/services and the MySQL
                    database.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="bg-gray-100 left md:max-w-lg relative pt-20 rounded-lg shadow-md shadow-black"
            >
              <div
                class="font-bold text-7xl text-cyan-200 absolute -translate-x-1/2 h-24 w-24 p-4 rounded-full bg-blue-400 left-1/2 -top-8 flex items-center justify-center"
              >
                2
              </div>
              <h1 class="text-center font-semibold text-2xl">
                February 2022 - Present
              </h1>
              <div
                class="border border-b-4 w-2/3 mx-auto mb-6 my-2 border-b-blue-400"
              ></div>
              <div class="p-6 px-8 text-left flex flex-col space-y-2">
                <h1 class="text-2xl">Bluente</h1>
                <h1 class="text-xl">Frontend Web Developer</h1>
                <h3 class="text-xl">Remote</h3>
                <ul class="list-disc leading-8 text-sm">
                  <li>
                    Collaborate with cross-function teams, including UI
                    designers and other developers, to implement an admin
                    dashboard page using Vue.js and Vite. This dashboard allowed
                    for the interactive visualization of customer demographics
                    from the company's mobile app, allowing the company to
                    understand better its target demographic and facilitate
                    better decision making
                  </li>
                  <li>
                    Utilize Test-Driven Development(TDD) methodology using Jest
                    framework to create and implement unit tests with Jest in
                    order to improve the reliability of the application. For
                    example, created unit test for the data that come from the
                    company's API to make sure that the client data comes in the
                    correct format and manageable size.
                  </li>
                  <li>
                    Developed reusable UI components using ant-design-vue that
                    are critical to the data-visualization of the app such as
                    tables, charts, and graphs to simplify the UI creation
                    proccess. These reusable components are then combined and
                    reused to create a full envinronment that gives the user a
                    clear idea of the demographics and trends of the company's
                    users.
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
            class="absolute w-2 h-1/2 -z-10 left-1/2 top-1/2 -ml-1 bg-black md:hidden"
          ></div>
        </div>
      </section>
      <section id="projects">
        <div class="container mt-16 py-8 text-center max-w-5xl mx-auto">
          <h1 class="text-3xl bold">Featured Projects</h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mt-2 mb-6"></div>

          <div class="border-tl-2 p-16 border-br-2 relative max-w-4xl mx-auto">
            <div
              class="-z-10 absolute top-0 left-0 border-t-2 border-l-2 border-blue-400 border-dashed h-full w-1/2"
            ></div>
            <div
              class="-z-10 absolute bottom-0 right-0 border-b-2 border-r-2 border-dashed border-blue-400 h-full w-1/2"
            ></div>
            <div
              @click="changeProject(-1)"
              class="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-20 w-20 text-blue-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div
              @click="changeProject(1)"
              class="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-20 w-20 text-blue-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <!--Project View-->

            <div class="flex flex-col space-y-4">
              <h1 class="text-2xl font-semibold select-none">
                {{ currentProject.name }}
              </h1>
              <div
                class="border border-b-4 w-1/2 mb-6 my-2 border-b-blue-400 mx-auto"
              ></div>
              <img
                :src="currentProject.introductionImageLink"
                class="px-4 select-none"
              />
              <p class="text-lg leading-8 max-w-sm mx-auto">
                {{ currentProject.introduction }}
              </p>

              <button
                @click="toggleProjectDetails"
                class="p-4 rounded-full bg-blue-400 w-1/2 mx-auto text-white border-blue-400 hover:bg-white hover:text-blue-400"
              >
                View Project Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div
          class="container max-w-5xl my-10 mb-20 mx-auto flex flex-col space-y-8 items-center"
        >
          <h1 class="text-center text-4xl mt-5 mb-2 font-semibold">
            Contact Me
          </h1>
          <div class="w-1/4 mx-auto border-b-4 border-b-black mb-12"></div>

          <h2 class="max-w-xl text-xl">Feel free to contact me by:</h2>
          <div
            class="flex flex-col space-y-4 md:flex-row md:space-y-0 mt-4 md:space-x-8 justify-center items-center"
          >
            <div
              class="hover:scale-110 cursor-pointer flex bg-gray-50 flex-row items-center space-x-2 border-2 p-4"
            >
              <img
                src="./assets/icons/email-icon.png"
                class="bg-black h-12 w-12 rounded-full"
              />
              <h1 class="item text-xl">wryancartie@gmail.com</h1>
            </div>
            <h1 class="text-xl">and</h1>
            <div
              class="hover:scale-110 cursor-pointer bg-gray-50 flex flex-row items-center space-x-2 border-2 p-4"
            >
              <img
                src="./assets/icons/phone-icon.png"
                class="bg-black h-12 w-12 rounded-full"
              />
              <h1 class="item text-xl">(886) 908-046-941</h1>
            </div>
          </div>
          <h2 class="max-w-xl text-xl">or by filling this form below:</h2>

          <form
            @submit.prevent="sendEmail"
            class="p-8 px-10 w-full md:w-1/2  border-2 mx-auto flex flex-col space-y-4"
          >
            <h1 class="text-2xl font-semibold">Contact Form</h1>
            <div
              class="border border-b-4 w-full md:w-1/2 mb-6 my-2 border-b-blue-400"
            ></div>
            <label class="">Name</label>
            <input
              type="text"
              v-model="formEmailData.name"
              class="h-8 w-full border border-black px-2"
            />
            <label>Email</label>
            <input
              type="email"
              v-model="formEmailData.email"
              class="h-8 w-full border border-black px-2"
            />
            <label>Subject</label>
            <input
              type="text"
              v-model="formEmailData.subject"
              class="h-8 w-full border border-black px-2"
            />
            <label>Message</label>
            <textarea
              v-model="formEmailData.message"
              class="w-full h-56 text-lg p-1 px-2 border-black border"
            />
            <button
              class="w-full md:w-1/2 md:mx-0 mx-auto border-blue-400 bg-blue-400 text-white p-3 px-4 rounded-full text-lg hover:bg-white hover:text-blue-400"
            >
              Submit Form
            </button>
          </form>
        </div>
      </section>
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
            <a href="#introduction">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
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
    </Transition>
      <Transition name="fade-overlay">
    <div
      @click="toggleProjectDetails"
      v-if="showProjectModal"
      class="fixed inset-0 py-16 flex items-center justify-center z-50 opacity-100 bg-black m-2"
    >
     <Transition name="fade-modal" >
      <div v-if="showModalContent"
        @click.stop
        class="bg-white overflow-scroll md:overflow-hidden max-h-screen relative w-4/5 xl:w-3/5 p-4 rounded-lg shadow-lg "
      >
        <div
          class="absolute flex items-center justify-center h-8 w-8 hover:bg-red-500 right-0 top-0"
        >
          <button
            @click="toggleProjectDetails"
            class="hover:outline-none text-2xl w-full h-full"
          >
            X
          </button>
        </div>
        <!-- Modal content goes here -->
   
        <div
          class="relative flex flex-col space-y-2 md:space-y-4 items-center justify-center text-center"
        >
          <div class="text-2xl font-semibold select-none">
            {{ currentProject.name }}
          </div>
          <div
            class="border border-b-4 w-1/2 mb-6 my-2 border-b-blue-400"
          ></div>

          <p class="text-lg md:text-xl xl:text-2xl font-semibold">
            {{ currentProject.role }}
          </p>
          <p
            class="leading-6 md:leading-9 md:text-lg tracking-wider xl:text-xl"
          >
            {{ currentProject.description }}
          </p>
          <p class="leading-6 md:leading-9 xl:text-lg md:tracking-wide px-10">
            {{ currentProject.remarks }}
          </p>
          <div
            class="flex md:flex-row flex-col items-center md:justify-between space-x-10 w-full mx-auto"
          >
            <div class="w-full md:w-3/4 px-10">
              <h1
                class="mt-4 text-2xl leading-8 font-semibold mb-2 tracking-wide"
              >
                Tech Stack
              </h1>
              <div
                class="grid grid-cols-3 sm:grid-cols-4 gap-4 md:flex flex-row md:space-x-6 justify-center"
              >
                <div
                  v-for="tech in generateTechUrl(currentProject.technologies)"
                  :key="tech"
                  class="group bg-opacity-20 border-2 backdrop-blur-md px-3 py-6 rounded-full shadow-lg h-24 w-24"
                >
                  <img
                    :src="tech"
                    class="w-full h-full group-hover:scale-125 select-none"
                  />
                  {{}}
                </div>
              </div>
            </div>
            <div class="w-full mx-auto md:w-3/4 mb-4 md:mb-0">
              <h1
                class="md:mb-0 mt-4 text-2xl leading-8 font-semibold mb-2 tracking-wide"
              >
                Project Links
              </h1>
              <div class="flex flex-row space-x-4 justify-center">
                <a
                  :href="currentProject.githubLink"
                  class="group bg-opacity-20 border-2 backdrop-blur-md rounded-full shadow-lg h-20 w-20"
                >
                  <img
                    src="./assets/icons/github-icon.png"
                    class="w-full h-full group-hover:scale-125"
                  />
                  <h1 class="mt-2 text-lg">Github</h1>
                  {{}}
                </a>
                <a
                  :href="currentProject.hostedLink"
                  v-if="currentProject.hosted"
                  class="p-2 group bg-opacity-20 border-2 backdrop-blur-md rounded-full shadow-lg h-20 w-20"
                >
                  <img
                    src="./assets/icons/hosting-icon.png"
                    class="w-full h-full group-hover:scale-125 rounded-full"
                  />
                  <h1 class="mt-4 text-lg">{{ currentProject.hosting }}</h1>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      

        <div class="w-full h-fit mt-5 px-12 relative">
          <div
            @click="changeProjectImg(-1)"
            class="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-20 w-20 text-blue-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div
            @click="changeProjectImg(1)"
            class="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-20 w-20 text-blue-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <h1
            class="text-center mt-12 md:mb-2 text-2xl font-bold tracking-wide px-0 select-none"
          >
            Project Images
          </h1>
          <img
            class="md:w-[800px] p-4 md:mx-auto object-contain  md:h-[340px] select-none"
            :src="generateProjectUrl(currentProject.imagesLink[projectNum])"
          />
        </div>
        
      </div>

    </Transition>
    </div>
  </Transition>
  </div>
</template>

<style scoped>

.insert-intro-enter-from{
 transform: translateX(100px);

}

.insert-intro-enter-to{
  transform:translateX(0px);
 
}

.insert-intro-enter-active{
  transition: transform 3s ease-in-out;
}

.fade-overlay-enter-from,.fade-overlay-leave-to{
  opacity:0;
}
.fade-overlay-enter-to,.fade-overlay-leave-from{
  opacity:1;
}
.fade-overlay-enter-active{
  transition: opacity 0.1s ease-in;
}

.fade-overlay-leave-active{
  transition: opacity 0.2s ease-out;
}

.fade-modal-enter-from,
.fade-modal-leave-to{
  opacity:0;
}
.fade-modal-enter-to,
.fade-modal-leave-from{
  opacity:1;
}
.fade-modal-leave-active{
  transition: opacity 0.1s ease-out;
}
.fade-modal-enter-active{
  transition: opacity 0.2s ease-in;
}

.fade-jumbotron-enter-from{
  opacity:0;
  
};


.fade-jumbotron-enter-to{
  opacity: 1;
}

.fade-jumbotron-enter-active{
  transition: opacity 1s ease;
}

.fade-content-enter-from{
  opacity:0;
}

.fade-content-enter-to{
  opacity:1;
}

.fade-content-enter-active{
  transition: opacity 3s ease;
}
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
