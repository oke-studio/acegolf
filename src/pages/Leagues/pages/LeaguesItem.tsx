import { Link, useParams } from 'react-router-dom'
import { Container } from '../../../components/Container/Container'
import { Section } from '../../../components/Section/Section'
import { Typography } from '../../../components/Typography/Typography'
import { useGetLeagueItem } from '../hooks/useGetLeagueItem.hook'
import { Button } from '../../../components/Button/Button'
import { EmailSection } from '../../Landing/components/EmailSection/EmailSection'
import { PromotionsSection } from '../../Events/components/PromotionsSection/PromotionsSection'
import { ImageURLFormatter } from '../../../utils/imageFormatter'
// import { CalendaritemContainerStyles } from '../../../types/Pages/Events/events.types'
// import { CalendarItemContainerStyleTypeMap } from '../components/CalendarSection/types/CalendarSection.types'
import defaulLeagueImg from '../../../assets/events/League.webp'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const LeaguesItem = () => {
  const { leagueId } = useParams()
  const { leagueItem, isError, isLoading } = useGetLeagueItem(leagueId!)

  if (!leagueItem || isError) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const isCTA = leagueItem.ctaLink && leagueItem.ctaText
  const currentLeague = leagueItem
  console.log(currentLeague)

  //   const eventItemType =
  //     CalendarItemContainerStyleTypeMap[currentEvent.eventType] ?? 'event'

  //   const defaultImgSrc = CalendaritemContainerStyles[eventItemType].defaultImgSrc

  const imgSrc = leagueItem.leaguePoster?.url ?? defaulLeagueImg

  const startDate = new Date(currentLeague.endDateTime).toDateString()
  const endDate = new Date(currentLeague.startDateTime).toDateString()

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
        <Section
          style={{
            padding: '24px 24px',
          }}
          //   tailWindStyle={CalendaritemContainerStyles[eventItemType].style}
        >
          <div className="flex flex-wrap *:grow *:basis-64">
            {/* Image */}
            <div className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div
                className="aspect-square h-full min-h-96 bg-slate-300"
                style={{
                  backgroundImage: `url(${ImageURLFormatter(
                    imgSrc,
                    currentLeague.leaguePoster?.contentType
                  )})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            </div>
            {/* Copy */}
            <div className="flex flex-col gap-3 pb-0 pt-8 text-left text-white md:p-20 md:px-6">
              <Typography fontVariant="base" fontWeight="600">
                {currentLeague.leagueTitle}
              </Typography>
              <Typography fontVariant="base" fontWeight="300">
                {startDate} - {endDate}
              </Typography>

              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(currentLeague.leagueDesc.json),
                }}
              >
                {}
              </div>
              {isCTA && (
                <Button buttonVariant="primary">
                  <a href={currentLeague.ctaLink!} target="__blank">
                    <Typography fontVariant="base" fontWeight="300">
                      {currentLeague.ctaText} &rarr;
                    </Typography>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Section>
        <PromotionsSection />
        <EmailSection />
      </Container>
    </>
  )
}
