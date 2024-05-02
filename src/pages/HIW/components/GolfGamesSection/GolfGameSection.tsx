import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'

import game1 from '../../../../assets/golfgames/streetsofneaon-trackmangame.webp'
import game2 from '../../../../assets/golfgames/skybullseyetrackmangame.webp'
import game3 from '../../../../assets/golfgames/magicpond-trackmangame.webp'
import game4 from '../../../../assets/golfgames/hitit-trackmangame.webp'
import game5 from '../../../../assets/golfgames/grassbullseyetrackmangame.webp'
import game6 from '../../../../assets/golfgames/capturetheflag-trackmangame.webp'

export const GolfGameSection = () => {
  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        // border: 0,
        // padding: 0,
      }}
    >
      <div className="mx-auto flex w-full flex-col items-center gap-6 text-center">
        <Typography fontVariant="largeH1" fontWeight="900">
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

export const golfGamesImages = [
  {
    url: game1,
  },
  {
    url: game2,
  },
  {
    url: game3,
  },
  {
    url: game4,
  },
  {
    url: game5,
  },
  {
    url: game6,
  },
]

{
  /* <div
                className="cover h-56 w-56 rounded-full bg-gray-400 object-center"
                style={{
                  backgroundImage: `url(${coach.pictureOfPerson.url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0',
                }}
              ></div> */
}

const GolfGames = () => {
  return (
    <div className="grid w-full grid-cols-2 grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-1">
      {golfGamesImages.map((n, index) => (
        <div
          className="h-40 w-full rounded-xl bg-grey md:h-80"
          key={`golf_game_${index}`}
          style={{
            backgroundImage: `url(${n.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            aspectRatio: '1/1',
          }}
        ></div>
      ))}
    </div>
  )
}
