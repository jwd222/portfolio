import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useActiveSectionContext } from '@/context/active-section-context'
import type { SectionName } from './types'

const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return { ref }
}

export { useSectionInView }
