import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { CalendarSection } from '../Events/components/CalendarSection/CalendarSection'
import { EmailSection } from '../Events/components/EmailSection/EmailSection'
import { Card } from '../../components/Card/Card'

import imageURL from '../../assets/woods.jpg'

export const Membership = () => {
  return (
    <Container>
      <Section
        borderRadiusVariant="corner"
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          border: 0,
          paddingTop: 0,
        }}
        tailWindStyle="text-center flex justify-center"
      >
        <Typography
          fontVariant="largeH1"
          fontWeight="900"
          fontStyle="italic"
          tailwindStyle="text-center w-max"
        >
          MEMBERSHIP
        </Typography>
      </Section>
      <Section
        borderRadiusVariant="corner"
        style={{
          backgroundColor: 'transparent',
          border: 0,
          paddingTop: 0,
          height: '35rem',
        }}
      >
        <div className="flex h-full flex-wrap gap-6 *:grow *:basis-64">
          <Card
            imgSrc={imageURL}
            theme="dark"
            tilt="left"
            style={{ borderColor: 'white', borderWidth: '3px' }}
          />

          <Card
            title="Membership"
            tilt="left"
            description="Regular golfer? Become a member"
            buttonOne={{
              children: (
                <Link to="/how-it-works">
                  <Typography fontVariant="large" fontWeight="400">
                    Sign Up &rarr;
                  </Typography>
                </Link>
              ),
            }}
          ></Card>
        </div>
      </Section>
      <EmailSection />
    </Container>
  )
}
