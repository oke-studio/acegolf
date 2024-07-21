import { useRef } from 'react'
import { Card } from '../../../../components/Card/Card'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
// import { PricesCard as PC } from '../../../../components/Common/PricesCard/PricesCard'
// import { MenuCard as MC } from '../../../../components/Common/MenuCard/MenuCard'
import { useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarSection } from '../../../Events/components/CalendarSection/CalendarSection'

// Images
import MapImageURl from '../../../../assets/cards/Maps-ace-expanded.webp'
// import AmenitiesImageURl from '../../../../assets/cards/trackman.webp'
import { Container } from '../../../../components/Container/Container'

const handleMapButtonLink = () => {
  return 'https://www.google.com/maps/dir/581+Eastern+Avenue,+Toronto,+ON/588+Eastern+Ave,+Toronto,+ON+M4M+1E1/@43.6588624,-79.3396868,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d4cb75daac07a1:0x29f6fb44e2d79f3!2m2!1d-79.3374018!2d43.6586366!1m5!1m1!1s0x89d4cb75df38a6bd:0x71354217e063d446!2m2!1d-79.3369881!2d43.6590804!3e0?entry=ttu'
}

const CoachingCard = () => (
  <Card
    title="Coaching"
    theme="light"
    description="Need golf coaching? We offer coaching through external coaches."
    buttonOne={{
      children: (
        <Link to="/coaching">
          <Typography fontVariant="large" fontWeight="400">
            Get Coaching &rarr;
          </Typography>
        </Link>
      ),
    }}
  />
)

const LeaguesCard = () => (
  <Card
    title="Leagues"
    theme="light"
    description="Win prizes and imporve your game by joining any of our leagues and tournaments hosted at Ace Golf."
    buttonOne={{
      children: (
        <Link to="/leagues">
          <Typography fontVariant="large" fontWeight="400">
            See Actve Leagues &rarr;
          </Typography>
        </Link>
      ),
    }}
  />
)

const ParkingCard = () => (
  <Card
    title="Parking"
    imgSrc={MapImageURl}
    theme="light"
    description="Parking available at Heward Ave & Eastern Ave"
    tilt="left"
    style={{ color: 'white' }}
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
)

// const MenuCard = () => (
//   <Card
//     title="Asian Style Tapas"
//     theme="dark"
//     buttonOne={{
//       children: (
//         <Link to="/menu">
//           <Typography fontVariant="large" fontWeight="400">
//             See Full Menu &rarr;
//           </Typography>
//         </Link>
//       ),
//     }}
//   >
//     <MC />
//   </Card>
// )

// const PricesCard = () => (
//   <Card
//     title="Prices & Rates"
//     buttonOne={{
//       children: (
//         <Link to="/how-it-works">
//           <Typography fontVariant="large" fontWeight="400">
//             How It Works &rarr;
//           </Typography>
//         </Link>
//       ),
//     }}
//     buttonTwo={{
//       children: (
//         <Link to="/book-now">
//           <Typography fontVariant="large" fontWeight="400">
//             Find a Bay &rarr;
//           </Typography>
//         </Link>
//       ),
//     }}
//   >
//     <PC />
//   </Card>
// )

export const CardSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  return (
    <Section
      borderRadiusVariant="pill"
      sectionWidth="fullViewport"
      style={{
        backgroundColor: 'rgb(var(--color-orange)',
        scale,
      }}
      ref={targetRef}
    >
      <Container>
        <div className="flex flex-col gap-3">
          <div className="grid w-full grid-rows-2 gap-4 sm:grid-cols-[minmax(0,_2fr)_minmax(0,_3fr)] sm:grid-rows-none">
            <div className="grid w-full grid-rows-2 gap-4">
              <CoachingCard />
              <LeaguesCard />
            </div>
            {/* <PricesCard /> */}
            <ParkingCard />
          </div>
          <div id="event-calendar">
            <CalendarSection />
          </div>

          {/* <MenuCard /> */}
        </div>
      </Container>
    </Section>
  )
}
