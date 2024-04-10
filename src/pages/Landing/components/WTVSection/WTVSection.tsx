import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'

// Images
import URL1 from '../../../../assets/wtv/20231224_124126.mp4'
import URL2 from '../../../../assets/wtv/20231224_124126.mp4'
import URL3 from '../../../../assets/wtv/ace-pink.webp'
import URL4 from '../../../../assets/wtv/ace_landing_wtv_demo.mp4' //video
import URL5 from '../../../../assets/wtv/ace_landing_wtv_demo2.webm' //video
import URL6 from '../../../../assets/wtv/wtv-01.webp'
import URL7 from '../../../../assets/wtv/wtv-02.webp'
import URL8 from '../../../../assets/wtv/wtv-03.webp'
import URL9 from '../../../../assets/wtv/wtv-04.webp'
import { Typography } from '../../../../components/Typography/Typography'
import { MusicPlayer } from './components/MusicPlayer'

// const imgs = [URL1, URL2, URL3, URL4, URL5, URL6, URL7, URL8, URL9]

export const WTVSection = () => {
  return (
    <Section
      borderRadiusVariant="corner"
      sectionWidth="fullViewport"
      style={{
        backgroundColor: 'transparent',
        border: 0,
        // padding: '3rem',
      }}
    >
      <Container>
        <div className="mt-10 flex flex-col items-center justify-center">
          <Typography
            fontVariant="largeH1"
            fontWeight="900"
            tailwindStyle="text-white text-center uppercase mb-3"
          >
            What&apos;s the Vibe?
          </Typography>
          <MusicPlayer />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={URL1}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={URL2}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={URL3}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <video
                  className="h-auto max-w-full rounded-lg"
                  autoPlay
                  loop
                  preload="auto"
                  muted
                  // alt=""
                >
                  <source src={URL4} type="video/mp4" />
                </video>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={URL8}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={URL6}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={URL7}
                  alt=""
                />
              </div>
              <div>
                <video
                  className="h-auto max-w-full rounded-lg"
                  autoPlay
                  loop
                  preload="auto"
                  muted
                  // alt=""
                >
                  <source src={URL5} type="video/mp4" />
                </video>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={URL9}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
