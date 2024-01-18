import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { HiEmojiHappy } from "react-icons/hi"
export const projectExperience = [
  {
    name: "Website Design",
    projects: 6,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: "Learning",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "My Portfolio",
    projects: "My Profile Website",
    icon: HiEmojiHappy,
    bg: "#F26440",
  },

];

export const WhatDoIHelp = [
  "I will help you finding a solution and solve your problem, We use process design to create digital products.",
  
];

export const workExp = [
  {
    place: "Alterna Academy ",
    tenure: "Nov 2022 - May 2023",
    role: "Developer Full-stack",
    detail:
      "As a full stack developer, I have the ability to work on both the client side (frontend) and the server side (backend). I possess skills in multiple technologies and programming languages, enabling me to design, develop, and maintain complete web applications. I can work on all layers of an application.",
  },
  {
    place: "My Skills",
    tenure: "At the Moment",
    role: "FrontEnd",
    detail:
      "have developed skills in using HTML and CSS, specifically in React.js with TypeScript. I also have experience using CSS libraries such as Tailwind CSS and SCSS. I have worked on projects where I could apply these skills in a practical manner.",
  },
  {
    place: "My Skills",
    tenure: "At the Moment",
    role: "BackEnd",
    detail:
      "I have developed skills in using server-side programming languages such as TypeScript (Node.js) and working with databases like SQL and MongoDB. Additionally, I have worked on practical projects where I applied this knowledge to develop backend logic and functionality.",
  },
];

export const comments = [
  {
    name: "",
    post: "Willing to learn",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./cebra.png",
  },
  {
    name: "",
    post: "Become the best of myselfs",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./Dev.png",
  },
  {
    name: "",
    post: "Punctual",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./programmer.png",
  },
  {
    name: "",
    post: "Responsibility",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./Dev2.png",
  },
  {
    name: "",
    post: "Creative",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./Dev3.png"
  },
  
];

export const profile = [
  {
    name: "{NanoDev}",
    img: "./Person1.png",
  }
]

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
