import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'

export const GolfGameSection = () => {
  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        border: 0,
        padding: 0,
      }}
    >
      <div className="mx-auto flex w-full flex-col items-center gap-6 text-center">
        <Typography fontVariant="poster" fontWeight="900">
          GOLF GAMES
        </Typography>
        <Typography fontVariant="base" fontWeight="300">
          We offer a wide selection of games that utilize the advanced tracking
          in Trackman technology
        </Typography>
        <GolfGames />
      </div>
    </Section>
  )
}

const GolfGames = () => {
  return (
    <div className="grid w-full grid-cols-2 grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-1">
      {Array(6)
        .fill(null)
        .map(() => (
          <div className="bg-grey h-56 w-full rounded-xl"></div>
        ))}
    </div>
  )
}
