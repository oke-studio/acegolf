import * as React from 'react'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import {
  AnimatePresence,
  motion,
  // useTransform,
  // useScroll,
  // useSpring,
} from 'framer-motion'

import Bay1URL from '../../../../assets/simrooms/bay1.webp'
import Bay2URL from '../../../../assets/simrooms/bay2.webp'
import Bay3URL from '../../../../assets/simrooms/bay3.webp'
import Bay4URL from '../../../../assets/simrooms/bay4.webp'
import Bay5URL from '../../../../assets/simrooms/bay1.webp'
import PrivateBayURL from '../../../../assets/simrooms/privateBay.webp'

const FEATURED_SIM_ROOMS = [
  { title: 'Sim Room #1', imgUrl: Bay1URL },
  { title: 'Sim Room #2', imgUrl: Bay2URL },
  { title: 'Sim Room #3', imgUrl: Bay3URL },
  { title: 'Sim Room #4', imgUrl: Bay4URL },
  { title: 'Sim Room #5', imgUrl: Bay5URL },
  { title: 'Private Sim Room #5', imgUrl: PrivateBayURL },
]

export const SimRoomSection = () => {
  const targetRef = React.useRef<HTMLDivElement>(null)

  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ['0 1', '1 1'],
  // })

  // const scaleSpring = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // })

  // const scale = useTransform(scaleSpring, [0, 1], [0.8, 1])
  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        border: 0,
        // scale,
      }}
      ref={targetRef}
    >
      <div className="mx-auto flex w-full flex-col items-center gap-6 text-center">
        <Typography fontVariant="poster" fontWeight="900">
          SIM ROOMS
        </Typography>
        <Typography fontVariant="base" fontWeight="300">
          6 performance simulation rooms powered by Trackman award winning tech.
          <br />
          Each sim has performance modes and fun modes for more goofiness. Learn
          more about our facilities below.
        </Typography>

        <SimRooms />
      </div>
    </Section>
  )
}

const SimRooms = () => {
  const [selected, setSelected] = React.useState(0)

  const ONE_SECOND = 1000
  const AUTO_DELAY = ONE_SECOND * 5

  React.useEffect(() => {
    const intervalRef = setInterval(() => {
      setSelected((pv) => {
        if (pv === 5) {
          return 0
        }
        return pv + 1
      })
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-5xl grid-cols-1 flex-col gap-8 lg:flex-row">
      <SimRoomTabs selected={selected} setSelected={setSelected} />
      <AnimatePresence mode="wait">
        {FEATURED_SIM_ROOMS.map((f, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={index}
              className="h-full w-full"
            >
              <SimRoomImageContainer imgSrc={f.imgUrl} label={f.title} />
            </motion.div>
          ) : undefined
        })}
      </AnimatePresence>
    </div>
  )
}

const SimRoomTabs = ({
  selected,
  setSelected,
}: {
  selected: number
  setSelected: (s: number) => void
}) => {
  return (
    <div className="flex w-full flex-col items-center self-center justify-self-center overflow-scroll md:w-fit">
      {FEATURED_SIM_ROOMS.map((tab, index) => {
        return (
          <SimRoomTab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        )
      })}
    </div>
  )
}

const SimRoomTab = ({
  selected,
  title,
  setSelected,
  tabNum,
}: {
  selected: boolean
  title: string
  setSelected: (s: number) => void
  tabNum: number
}) => {
  return (
    <div className="group relative w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-10 flex w-full justify-center border-slate-200 p-4 text-center transition-colors group-hover:border-slate-300 md:flex-col md:p-6"
      >
        <Typography
          fontVariant="headingFour"
          fontWeight="700"
          tailwindStyle={`min-w-[150px] transition-colors md:text-2xl ${
            selected ? 'text-orange' : 'text-what group-hover:text-sharpTeal'
          }`}
        >
          {title}
        </Typography>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="z-3 absolute bottom-0 left-0 right-0 top-0 w-full rounded-2xl bg-black"
        />
      )}
    </div>
  )
}

const SimRoomImageContainer = ({
  imgSrc,
  label,
}: {
  imgSrc: string
  label: string
}) => {
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <motion.div
        className="aspect-[4/3] bg-slate-300 "
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="p-6">
        <Typography fontVariant="headingFour" fontWeight="700">
          {label}
        </Typography>
      </div>
    </div>
  )
}
