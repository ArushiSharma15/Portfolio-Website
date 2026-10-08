import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  django,
  html,
  css,
  reactjs,
  RestAPI,
  tailwind,
  nodejs,
  sql,
  git,
  expressjs,
  docker,
  cpp ,
  VaultofCodes,
  meta,
  NewsPortal,
  ChatApp,
  weather,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "RestAPI",
    icon: RestAPI,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Programming Intern",
    company_name: "VaultofCodes",
    icon: VaultofCodes,
    iconBg: "#ffffff",
    date: "May 2026 - July 2026",
    points: [
      "Worked as a Python Programming Intern at VaultofCodes.",
      "Developed and worked on Python-based programming tasks and projects.",
      "Applied Python programming concepts to solve practical programming problems.",
      "Collaborated with the team and strengthened programming and problem-solving skills.",
    ],
  },
];


const projects = [
  {
    name: "BCIIT News Portal",
    description:
      "Developed a web-based news portal using Python and Django to manage and display college updates for students, faculty, and events.Implemented modules for student activities, faculty details, event management, and enquiry handling.Developed a responsive frontend using HTML, CSS, and Bootstrap. Used Django for backend logic, database management, and dynamic content rendering..",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: NewsPortal,
    source_code_link: "https://github.com/ArushiSharma15/BCIIT-NEWS-PORTAL",
  },
  {
    name: "ChatSync-Realtime Chat Room ",
    description:
      "ChatSync is a real-time web chat application built with React, Node.js, Express, and Socket.IO. It supports instant messaging, chat rooms, typing indicators, emoji selection, notifications, user activity tracking, and dark/light mode. The application is deployed online for real-time communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: ChatApp,
    source_code_link: "https://github.com/ArushiSharma15/ChatSync",
  },
  {
    name: "Weather Timeline",
    description:
      "Built a weather web application using HTML, CSS, and JavaScript to display real-time weather information for user-selected cities.Integrated WeatherAPI to retrieve live temperature, date, time, and weather conditions.Implemented dynamic backgrounds based on weather conditions including rain, mist, clouds, aclear skies.",
    tags: [
      {
        name: "Html5, css",
        color: "blue-text-gradient",
      },
      {
        name: "weather API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ArushiSharma15/Weather-Timeline-Project",
  },
];

export { services, technologies, experiences, projects };