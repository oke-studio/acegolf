import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { useGetLeagues } from '../../hooks/UseGetLeagues/useGetLeagues.hook'
import { ImageURLFormatter } from '../../utils/imageFormatter'
// import { CalendarSection } from '../Events/components/CalendarSection/CalendarSection'
import { EmailSection } from '../Events/components/EmailSection/EmailSection'

import { CalendaritemContainerStyles } from '../../types/Pages/Events/events.types'
import { useGetReducedFAQ } from '../../hooks/useGetFAQ/useGetReducedFAQ.hook'

import { FAQAccordion } from '../../components/FAQAccordion/FAQAccordion'
import { Link } from 'react-router-dom'

const LEAGUES = 'Leagues'

const LeaguesFAQ = () => {
  const { faqReduced, isError, isLoading } = useGetReducedFAQ()

  if (isLoading) {
    return <></>
  }

  if (isError || !faqReduced) {
    return <></>
  }

  const faqReducedLeagues = faqReduced[LEAGUES]

  return (
    <Section
      borderRadiusVariant="corner"
      style={{
        backgroundColor: 'transparent',
        border: 0,
        paddingTop: '1.5rem',
      }}
    >
      <Container>
        <div className="mt-10 flex flex-col items-center justify-center gap-12 text-white">
          {faqReducedLeagues && (
            <div
              key={`${LEAGUES}_faq`}
              className="flex w-full flex-col flex-nowrap gap-3"
            >
              <Typography
                fontVariant="large"
                fontWeight="700"
                style={{
                  borderBottom: '2px dotted white',
                  marginBottom: '2rem',
                }}
                tailwindStyle="text-orange"
                key={`${LEAGUES}_faq`}
              >
                {'Leagues'.toUpperCase()}
              </Typography>
              {faqReducedLeagues?.map((acc, i) => (
                <FAQAccordion
                  defaultOpen={false}
                  title={acc.question}
                  key={`faq_accordion_${i}_${LEAGUES}`}
                  id={acc.slug}
                >
                  <Typography fontVariant="base" fontWeight="400">
                    {acc.answer}
                  </Typography>
                  {acc.ctaLink && acc.ctaText && (
                    <Button
                      buttonVariant="primary"
                      buttonStyle={{ width: 'max-content' }}
                    >
                      <Link to={acc.ctaLink}> {acc.ctaText} &rarr;</Link>
                    </Button>
                  )}
                </FAQAccordion>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

export const Leagues = () => {
  const { leaguesData, isError, isLoading } = useGetLeagues()

  if (isError || !leaguesData) {
    return <></>
  }

  if (isLoading) {
    return <></>
  }

  // const eventsDataParsedToLeaguesData = eventsData.filter(
  //   (e) => e.leagueType === 'League'
  // )
  return (
    <Container>
      <Section
        borderRadiusVariant="corner"
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          border: 0,
          padding: 0,
        }}
      >
        <div className="flex flex-col items-center text-center *:grow *:basis-10 md:flex-row">
          <Typography
            fontVariant="largeH1"
            fontWeight="900"
            fontStyle="italic"
            tailwindStyle="uppercase mb-3 text-center"
          >
            LEAGUES
          </Typography>
        </div>
      </Section>
      <Section
        style={{
          backgroundColor: 'transparent',
          border: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div className="grid grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2 ">
          {leaguesData.map((e) => {
            const defaultImgSrc =
              CalendaritemContainerStyles['league'].defaultImgSrc

            const imgSrc = e.leaguePoster?.url ?? defaultImgSrc

            return (
              <Link to={`/leagues/${e.slugId}`}>
                <div
                  className="relative min-h-[30rem] w-full rounded-2xl"
                  style={{
                    backgroundImage: `url(${ImageURLFormatter(
                      imgSrc,
                      e.leaguePoster?.contentType
                    )})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 flex w-full flex-col items-start justify-end gap-3 bg-transparent p-8 md:max-w-full">
                    {/* <Typography fontVariant="base" fontWeight="400">
                    {e.eventDescription}
                  </Typography> */}
                    <Button
                      buttonVariant="secondary"
                      buttonStyle={{
                        padding: '0.25rem 2rem',
                        color: 'white',
                        backgroundColor: 'black',
                      }}
                    >
                      <a href={`/leagues/${e.slugId}`}>
                        <Typography fontVariant="headingFour" fontWeight="500">
                          {e.ctaText} &rarr;
                        </Typography>
                      </a>
                    </Button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Section>

      <LeaguesFAQ />

      <EmailSection />
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

        {/* <CalendarSection /> */}
      </Container>
    </Container>
  )
}
