import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'

export const Coaching = () => {
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
        <div className="grid grid-rows-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:grid-rows-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <div className="relative flex min-h-96 w-full flex-col items-center justify-center gap-6 rounded-2xl bg-transparent text-white">
              <div
                className="cover h-56 w-56 rounded-full bg-gray-400 object-center"
                style={{
                  //   backgroundImage: `url(${imageURL})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
              ></div>
              <Typography fontVariant="base" fontWeight="500">
                Name of Coach
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
