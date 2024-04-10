import * as React from 'react'
import { Typography } from '../../../../../components/Typography/Typography'
import { TypeFaqItemFields } from '../../../../../types/contentful'
import { Section } from '../../../../../components/Section/Section'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

// type MiniInfoBoxType = {
//   question: string
//   answer: string
//   categoryRefrence: { slug: string; faqCategor }
// }

const HIWMiniInfoBox = ({
  box,
  index,
}: {
  index: number
  box: TypeFaqItemFields
}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      key={`${index}`}
      className="border-bold flex max-h-max w-full flex-col items-center gap-3 overflow-hidden rounded-2xl border-2 border-black bg-sharpTeal px-6 py-4 uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      id={box.question}
      onClick={() => {
        // e.preventDefault()
        setOpen((ev) => !ev)
      }}
    >
      <div className="flex w-full justify-between">
        <Typography fontVariant="large" fontWeight="600">
          {box.question}
        </Typography>
        <motion.span
          variants={{
            open: {
              rotate: '180deg',
              color: 'rgb(235,139,50)',
            },
            closed: {
              rotate: '0deg',
              color: '#000000',
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: open ? 'fit-content' : '0px',
          marginBottom: open ? '32px' : '0px',
        }}
        className="overflow-hidden"
      >
        {box.answer}
      </motion.div>
    </motion.div>
  )
}

interface HIWInfoBoxProps {
  number: string
  description: React.ReactNode
  label: React.ReactNode
  miniInfoBox: TypeFaqItemFields[]
  prevBG: string
  curBG: string
}

export const HIWInfoBox = ({
  number,
  description,
  miniInfoBox,
  label,
  prevBG,
  curBG,
}: HIWInfoBoxProps) => {
  return (
    <Section
      borderRadiusVariant="corner"
      style={{
        border: 0,
        backgroundColor: prevBG,
        padding: '0px',
      }}
      tailWindStyle="last:rounded-b-2xl"
    >
  
    
      <div
        className="flex flex-row flex-wrap gap-4 rounded-b-[inherit] rounded-t-2xl p-8 text-black *:grow *:basis-64 "
        style={{ backgroundColor: curBG, marginTop: '-15px' }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <Typography
              fontVariant="headingTwo"
              fontWeight="900"
              fontStyle="italic"
            >
              {number}.
            </Typography>
            <Typography
              fontVariant="headingTwo"
              fontWeight="900"
              fontStyle="italic"
            >
              {label}
            </Typography>
          </div>
          <div className="flex align-baseline">
            <Typography fontVariant="base" fontWeight="400">
              {description}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-4  hover:cursor-pointer">
          {miniInfoBox.map((box, index) => (
            <HIWMiniInfoBox box={box} index={index} />
          ))}
        </div>
      </div>
      </Section>

  )
}
