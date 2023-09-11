import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import colorpickerImg from '@/public/color-picker.png'
import ghuraghuriImg from '@/public/ghuraghuri.png'
import jobifyImg from '@/public/jobify.png'
import youtubecloneImg from '@/public/youtube-clone.png'
import todoImg from '@/public/todo.png'

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
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const

export const projectsData = [
  {
    title: 'YouTube Clone',
    description:
      'A YouTube clone, integrated with the powerful YouTube v3 API from RapidAPI, featuring a robust search functionality. Users can explore channels, view video content, and access information such as view counts and likes.',
    tags: ['React', 'Javascript', 'Material UI'],
    imageUrl: youtubecloneImg,
    url: 'https://youtube-clone-theta-three.vercel.app/',
  },
  {
    title: 'Jobify',
    description:
      'A full stack job managing application built with JavaScript and MERN stack.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    imageUrl: jobifyImg,
    url: 'https://mern-jobify-ldda.onrender.com/landing',
  },
  {
    title: 'Color Picker',
    description:
      "A web-based color picker tool that offers a selection of 10 different shades for any chosen color. You can explore these shades through various means, including using a color palette, entering the color's name, or inputting its hexadecimal code.",
    tags: ['React', 'Javascript', 'Material UI'],
    imageUrl: colorpickerImg,
    url: 'https://color-picker-opal-eight.vercel.app/',
  },
  {
    title: 'GhuraGhuri',
    description: 'A clone of the popular video streaming website YouTube.',
    tags: ['React', 'Javascript', 'Material UI'],
    imageUrl: ghuraghuriImg,
    url: 'https://spiffy-dolphin-b52710.netlify.app/',
  },
  {
    title: 'To-do',
    description: 'A clone of the popular video streaming website YouTube.',
    tags: ['React', 'Javascript', 'Material UI'],
    imageUrl: todoImg,
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
