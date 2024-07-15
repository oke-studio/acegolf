import * as React from 'react';
import { Link, useParams } from 'react-router-dom'
import { Container } from '../../../components/Container/Container'
import { Section } from '../../../components/Section/Section'
import { Typography } from '../../../components/Typography/Typography'
import { Button } from '../../../components/Button/Button'
import { useGetEventsItem } from '../../../hooks/UseGetEvents/useGetEventsItem.hook'


export const LeaguesItem = () => {
  const { eventId } = useParams()
  const { eventItem, isError, isLoading } = useGetEventsItem(eventId!)

  if (!eventItem || isError) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const currentEvent = eventItem

  console.log(eventItem)

  
  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            // border: 0,
            // padding: 0,
            // margin: '2rem 0',
            display: 'flex',
            justifyContent: 'flex-start',
            // ...(isMobile && { justifyContent: 'center' }),
          }}
        >
          <Link to="/leagues">
            <Typography
              fontVariant="extralarge"
              fontWeight="600"
              tailwindStyle="flex flex-col items-center justify-center gap-6 text-5xl font-semibold text-white md:gap-4 hover:text-orange "
            >
              &larr; Back to all leagues
            </Typography>
          </Link>
        </Section>
        
      </Container>
    </>
  )
}
