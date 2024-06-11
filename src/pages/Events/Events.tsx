import { Section } from '../../components/Section/Section'
import { Container } from '../../components/Container/Container'
import { Typography } from '../../components/Typography/Typography'
// import { CalendarSection } from './components/CalendarSection/CalendarSection'
import { useMediaQuery } from 'react-responsive'
import { WTS } from '../../components/Common/WTS/WTS'
import { WTVSection } from '../Landing/components/WTVSection/WTVSection'
import { Button } from '../../components/Button/Button'
import RogersLogo from '../../assets/logos/rogers_logo.svg.webp'
import DeliotteLogo from '../../assets/logos/Deloitte_logo.webp'
import TaylorMadeLogo from '../../assets/logos/TaylorMade_logo.webp'
import TicTokLogo from '../../assets/logos/Tictok_logo.webp'
import TheScoreLogo from '../../assets/logos/thescore_logo.svg.webp'



export const Events = () => {
  const isMobile = useMediaQuery({ maxWidth: '640px' })

  const logos = [RogersLogo, DeliotteLogo, TaylorMadeLogo, TicTokLogo, TheScoreLogo  ]

  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            border: 0,
            // padding: 0,
            // margin: '2rem 0',
            display: 'flex',
            justifyContent: 'flex-start',
            ...(isMobile && { justifyContent: 'center' }),
          }}
        >
          <Typography
            fontVariant="largeH1"
            fontStyle="italic"
            fontWeight="900"
            tailwindStyle="flex flex-col items-center justify-center gap-6 text-5xl text-white md:gap-4"
          >
            PRIVATE EVENTS
          </Typography>
        </Section>
        {/* <CalendarSection /> */}
        <Section
          borderRadiusVariant="pill"
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 0,
            // padding: 0,
            // marginTop: '4rem',
          }}
        >
          <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 text-left *:grow *:basis-64 sm:flex-row">
            <div className="flex  flex-col gap-4">
              <Typography
                fontVariant="headingFour"
                fontWeight="700"
                fontStyle="italic"
              >
                Private Events for Everyone
              </Typography>
              <Typography
                fontVariant="large"
                fontWeight="300"
                fontStyle="normal"
              >
                Make your next event one your clients will never forget at Ace Golf! Our events team will work with you to ensure your night exceeds your expectations. Our team will work closely with you to cultivate an environment that you desire.
                <br />
                <br />
                <ul>
                  <li> - Corporate Events | Team Building </li>
                  <li> - Conferences</li>
                  <li> - Meetings</li>
                  <li> - Birthday Parties</li>
                  <li> - Bar/Bat Mitzvahs </li>
                  <li> - Holiday Parties </li>
                  <li> - Social Parties </li>
                  <li> - Engagement/Bachelor/Bachelorettes !</li>
                </ul>
                <br />
                Our venue can accommodate your group of any size from 1-100!
              </Typography>

              <Button buttonVariant="primary" 
              buttonStyle={{ width: '70%' }} >
                <a href="mailto:events@acegolfbar.ca">
                <Typography
                  fontVariant={isMobile ? 'extralarge' : 'headingFour'}
                  fontWeight="500"
                  T="h3"
                >
                  Book your Event 
                </Typography>
                </a>
              </Button>
            </div>
            <div className="h-full min-h-96  w-full max-w-[500px] rounded-xl bg-grey"></div>
          </div>
        </Section>
        <Section 
        style={{
            backgroundColor: '#39775E',
            color: 'white',
            //border: 0,
            // padding: 0,
            // marginTop: '4rem',
          }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'4rem'
          }}>
          {logos.map((i) => (
            <img style={{ width: '9rem'}} src={logos[i] }/>

          ))}
          </div>
        </Section>
        <WTVSection />
        <WTS />
        <Section
         borderRadiusVariant="pill"
         style={{
           backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
          }}

        >
          <div className="flex flex-col gap-4 items-center text-white">
          <Typography
            fontVariant="headingTwo"
            fontStyle="italic"
            fontWeight="900"
            tailwindStyle="text-white md:gap-4"
          >
           CHECK AVAILABILITY
          </Typography>

          <Typography
                fontVariant="large"
                fontWeight="300"
                fontStyle="normal"
              >
                Make your next event one your clients will never forget at Ace Golf
            </Typography>
          </div>

        <Button
                buttonVariant="primary"
                // buttonStyle={{ width: 'max-content' }}
                //onClick={(e) => {e.preventDefault(); scrollTo(“id”)
              >
                <a href="mailto:events@acegolfbar.ca">
                <Typography
                  fontVariant={isMobile ? 'extralarge' : 'headingFour'}
                  fontWeight="500"
                  T="h3"
                >
                  Book your Event 
                </Typography>
                </a>
              </Button>
        </Section>
      </Container>
    </>
  )
}
