'use client'

import { experiencesData } from '@/lib/data'
import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#f3f4f66',
                boxShadow: 'none',
                border: 'solid rgba(0,0,0, 0.06)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.5rem solid #9ca3af',
              }}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1rem',
              }}
              date={item.date}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  )
}
export default Experience
