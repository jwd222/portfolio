import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import colorpickerImg from '@/public/color-picker.png'
import ghuraghuriImg from '@/public/ghuraghuri.png'
import jobifyImg from '@/public/jobify.png'
import youtubecloneImg from '@/public/youtube-clone.png'
// import todoImg from '@/public/todo.png'
import todo2Img from '@/public/todo-2.png'
import portfolioImg from '@/public/potfolio.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Graduated ',
    location: 'Gazipur, Dhaka, Bangladesh',
    description:
      'I graduated from Islamic University of Technology after 4 years of undergraduate studies in the department of Computer Science and Engineering.',
    icon: React.createElement(LuGraduationCap),
    date: 'Jan 2019 - May 2023',
  },
  {
    title: 'Game Dev Intern',
    location: 'Dhaka, Bangladesh',
    description:
      'I interned for Battery Low Interactive Ltd. in game development. As a final assessment my team and I submitted a complete game developed with unity 2D game engine.',
    icon: React.createElement(CgWorkAlt),
    date: 'Nov 2021 - Dec 2021',
  },
  {
    title: 'Front-End Developer',
    location: 'Dhaka, Bangladesh',
    description:
      "I'm working as a self-employed front-end developer for the last few months. I also upskilled to the full stack.",
    icon: React.createElement(FaReact),
    date: 'Jun 2023 - Sep 2023',
  },
] as const

export const projectsData = [
  {
    title: 'Jobify',
    description:
      'Full-stack job management app with JavaScript and MERN stack built from scratch. Robust authentication and efficient error handling. Add, edit, delete jobs with rich properties for easy filtering and search.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'REST'],
    imageUrl: jobifyImg,
    url: 'https://mern-jobify-ldda.onrender.com/landing',
  },
  // {
  //   title: 'Portfolio Website',
  //   description:
  //     'A responsive, pixel-perfect portfolio crafted from scratch. Powered by Next.js 13, TypeScript, and Tailwind CSS, it showcases personalized content with captivating design animations.',
  //   tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
  //   imageUrl: portfolioImg,
  //   url: 'https://shah-jawad-islam-portfolio.vercel.app/',
  // },
  {
    title: 'YouTube Clone',
    description:
      'A YouTube clone, integrated with the powerful YouTube v3 API from RapidAPI, featuring a robust search functionality. Users can explore channels, view video content, and access information such as view counts and likes.',
    tags: ['React', 'Javascript', 'Material UI'],
    imageUrl: youtubecloneImg,
    url: 'https://youtube-clone-theta-three.vercel.app/',
  },
  {
    title: 'GhuraGhuri(Frontend)',
    description:
      'A travel companion app featuring user authentication, Google Maps integration, and interactive features. Users can add custom places and markers with notes for sharing and interaction. Additionally, the app allows users to post reviews for visited places.',
    tags: ['React', 'Javascript'],
    imageUrl: ghuraghuriImg,
    url: 'https://spiffy-dolphin-b52710.netlify.app/',
  },
  {
    title: 'Color Picker',
    description:
      "A web-based color picker tool that offers a selection of 10 different shades for any chosen color. You can explore these shades through various means, including using a color palette, entering the color's name, or inputting its hexadecimal code.",
    tags: ['React', 'Javascript'],
    imageUrl: colorpickerImg,
    url: 'https://color-picker-opal-eight.vercel.app/',
  },

  {
    title: 'To-do',
    description:
      "A simple and lightweight to-do list application. Add and delete tasks with ease. Your data is saved using local storage for convenience. It's a hassle-free way to manage your tasks and get things done.",
    tags: ['React', 'Javascript'],
    imageUrl: todo2Img,
    url: 'https://to-do-alpha-jet.vercel.app/',
  },
] as const

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'Express',
  'React',
  'Node.js',
  'Next.js',
  'Git',
  'Java',
  'Problem Solving',
  'HTML',
  'CSS',
  'SQL',
  'Tailwind',
  'Material UI',
  'GraphQL',
  'Apollo',
  'Prisma',
  'PostgreSQL',
  'Framer Motion',
] as const
