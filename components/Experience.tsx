import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  return (
    <section id="experience">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline></VerticalTimeline>
    </section>
  )
}
export default Experience
