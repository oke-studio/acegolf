// import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
// import { useGetEvents } from '../../hooks/UseGetEvents/useGetEvents.hook'
// import { ImageURLFormatter } from '../../utils/imageFormatter'
import { CalendarSection } from '../Events/components/CalendarSection/CalendarSection'
import { EmailSection } from '../Events/components/EmailSection/EmailSection'
// import { Link } from 'react-router-dom'

// import { LeaguesFAQ } from './components/LeaguesFAQ/LeaguesFAQ.component'

export const CalendarPage = () => {
  return (
    <Container>
      <Container
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <div className="flex flex-col items-center gap-4 text-center text-white">
          <Typography fontVariant="headingOne" fontWeight="900">
            EVENTS CALENDAR
          </Typography>
          <Typography fontVariant="headingFour" fontWeight="500">
            Be the first to know about the latest ACE Golf promos and events
          </Typography>
        </div>

        <CalendarSection />
      </Container>
      <EmailSection />
    </Container>
  )
}
