import * as React from 'react'
import { motion, useMotionValue } from 'framer-motion'

// Images
import FoodImage1URL from '../../../assets/cards/food/bigbites-place-holder.webp'
import FoodImage2URL from '../../../assets/cards/food/drinks-place-holder.webp'
import FoodImage3URL from '../../../assets/cards/food/smallbites-place-holder.webp'
const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

const imgs = [FoodImage1URL, FoodImage2URL, FoodImage3URL, FoodImage2URL]

export const MenuCard = () => {
  const [imgIndex, setImgIndex] = React.useState(0)

  const dragX = useMotionValue(0)

  React.useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0
          }
          return pv + 1
        })
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }

  return (
    <div className="relative w-full  overflow-hidden py-8 ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  )
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        )
      })}
    </>
  )
}

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number
  setImgIndex: (i: number) => void
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? 'bg-orange' : 'bg-neutral-500'
            }`}
          />
        )
      })}
    </div>
  )
}

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  )
}