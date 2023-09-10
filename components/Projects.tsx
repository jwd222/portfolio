'use client'

import React from 'react'
import { projectsData } from '@/lib/data'
import SectionHeading from './SectionHeading'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <motion.section
      id="projects"
      className="scroll-mt-28 mb-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
