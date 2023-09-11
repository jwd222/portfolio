'use client'

import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">I'm a Frontend enthusiast</span>{' '}
        specializing in <span className="font-semibold">React and Next.js</span>
        . I'm 24 and I recently <span className="italic">graduated</span>. I
        excel in developing{' '}
        <span className="italic">dynamic web experiences</span>. With{' '}
        <span className="font-semibold">Next.js</span>, I bring powerful
        features like server-side rendering, routing, and automatic code
        splitting to the forefront of your projects. Also delving into Full
        Stack with{' '}
        <span className="font-medium">MERN, Apollo, GraphQL, and Prisma</span>.
        Adept problem solver, thanks to{' '}
        <span className="italic">Data Structures and Algorithms</span>. Pro at
        teamwork, refined through research collaborations. Drove contributions
        on a diverse team during an internship at Battery Low Interactive Ltd,
        enhancing teamwork and adaptability in game development.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and spending time with my family and
        friends. I also love playing football, it has been a big part of my life
        in my teenage years. I enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">islamic history and philosophy</span>. I
        used to love working out and am getting back into it as well.
      </p>

      <p className="mt-4">
        Always looking forward to new opportunities to{' '}
        <span className="italic">learn and grow</span>. Let's collaborate and
        bring your next project to life!
      </p>
    </motion.section>
  )
}
export default About
