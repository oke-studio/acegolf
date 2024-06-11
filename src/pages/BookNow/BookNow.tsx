import { Container } from '../../components/Container/Container'
import { Card } from '../../components/Card/Card'

import { Link } from 'react-router-dom'
import { Typography } from '../../components/Typography/Typography'
import { PricesCard } from '../../components/Common/PricesCard/PricesCard'
import { Email } from '../../components/Email/Email'
import { Section } from '../../components/Section/Section'
// import { useBookNowForm } from './hooks/useBookNowForm.hook'
// import dayjs from 'dayjs'

import MapImageURl from '../../assets/cards/Maps-ace-expanded.webp'

const handleMapButtonLink = () => {
  return 'https://www.google.com/maps/dir/581+Eastern+Avenue,+Toronto,+ON/588+Eastern+Ave,+Toronto,+ON+M4M+1E1/@43.6588624,-79.3396868,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d4cb75daac07a1:0x29f6fb44e2d79f3!2m2!1d-79.3374018!2d43.6586366!1m5!1m1!1s0x89d4cb75df38a6bd:0x71354217e063d446!2m2!1d-79.3369881!2d43.6590804!3e0?entry=ttu'
}

export const BookNow = () => {
  // const {
  //   handleBookNowButtonLink,
  //   handleReserveFormOnChange,
  //   reserveABayObject,
  // } = useBookNowForm({
  //   guests: '1',
  //   duration: '1',
  //   date: dayjs(new Date()).format('YYYY-MM-DD'),
  //   time: dayjs(new Date()).format(),
  // })

  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          style={{
            backgroundColor: 'transparent',
            border: 0,
            padding: '3rem',
          }}
        >
          <div className="flex flex-wrap gap-6 *:grow *:basis-64">
            <div className="flex flex-col gap-6 *:grow *:basis-64">
              <Card
                title="Parking"
                imgSrc={MapImageURl}
                theme="dark"
                description="Parking available at Heward Ave & Eastern Ave"
                tilt="left"
                style={{ borderColor: 'white', borderWidth: '3px' }}
                buttonTwo={{
                  children: (
                    <Link to={handleMapButtonLink()} target="_blank">
                      <Typography fontVariant="large" fontWeight="400">
                        Show on Map &#8599;
                      </Typography>
                    </Link>
                  ),
                }}
              />
              <Card
                title="Parking"
                imgSrc={MapImageURl}
                theme="dark"
                description="Parking available at Heward Ave & Eastern Ave"
                tilt="left"
                style={{ borderColor: 'white', borderWidth: '3px' }}
                buttonTwo={{
                  children: (
                    <Link to={handleMapButtonLink()} target="_blank">
                      <Typography fontVariant="large" fontWeight="400">
                        Show on Map &#8599;
                      </Typography>
                    </Link>
                  ),
                }}
              />
            </div>

            <Card
              buttonOne={{
                children: (
                  <Link to="/how-it-works">
                    <Typography fontVariant="large" fontWeight="400">
                      How It Works &rarr;
                    </Typography>
                  </Link>
                ),
              }}
            >
              <PricesCard />
            </Card>
          </div>
        </Section>
        <Email />
      </Container>
    </>
  )
}
