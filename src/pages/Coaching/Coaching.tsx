import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { useGetCoachingPage } from '../../hooks/UseGetAceCoachingPageQuery/useGetAceCoachingPage.hook'

export const Coaching = () => {
  const { coachingData, isError, isLoading } = useGetCoachingPage()
  if (!coachingData || isError) {
    return <>error</>
  }

  if (isLoading) {
    return <>loading</>
  }

  const coaches = coachingData.coachingProfilesCollection.items
  console.log(coaches)
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
            COACHING
          </Typography>
          <Typography fontVariant="base" fontWeight="500">
            Coaches and coaching staff
          </Typography>
        </div>
      </Section>
      <Section style={{ backgroundColor: 'transparent', border: 0 }}>
        <div className="grid auto-cols-auto grid-rows-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:grid-rows-2">
          {coaches.map((coach, index) => (
            <div
              className="relative flex min-h-96 w-full flex-col items-center justify-center gap-6 rounded-2xl bg-transparent text-white"
              key={`ace_coach_${index}`}
            >
              <div
                className="cover h-56 w-56 rounded-full bg-gray-400 object-center"
                style={{
                  backgroundImage: `url(${coach.pictureOfPerson.url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0',
                }}
              ></div>
              <Typography fontVariant="base" fontWeight="500">
                {coach.nameOfPerson}
              </Typography>
              <Typography fontVariant="base" fontWeight="500">
                Name of Coach
              </Typography>
              <Button buttonVariant="simple">
                <Typography
                  fontVariant="base"
                  fontWeight="500"
                  tailwindStyle="underline"
                >
                  Contact &rarr;
                </Typography>
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  )
}
