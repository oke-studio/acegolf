import { Container } from '../../components/Container/Container'
import { Card } from '../../components/Card/Card'

import { Link } from 'react-router-dom'
import { Typography } from '../../components/Typography/Typography'
import { PricesCard } from '../../components/Common/PricesCard/PricesCard'
import { Email } from '../../components/Email/Email'
import { Section } from '../../components/Section/Section'
// import { useBookNowForm } from './hooks/useBookNowForm.hook'
// import dayjs from 'dayjs'

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
          <div className="flex flex-col gap-6">
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
