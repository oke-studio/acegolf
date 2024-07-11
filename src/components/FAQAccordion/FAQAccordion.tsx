import * as React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '../Typography/Typography'
import { FiChevronDown } from 'react-icons/fi'

export const FAQAccordion = ({
  title,
  children,
  defaultOpen = false,
  id,
}: {
  title: string
  children: React.ReactNode
  defaultOpen: boolean

  id: string
}) => {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className="border-bold flex max-h-max w-full flex-col gap-3 overflow-hidden rounded-2xl border-2 border-black bg-sharpTeal px-6 py-4  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-2xl hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      onClick={() => {
        // console.log('clicked', id)
        setOpen((pv) => !pv)
      }}
      id={`faq-${id}`}
    >
      <div className="flex w-full justify-between">
        <Typography
          fontVariant="headingFour"
          fontWeight="600"
          style={{ color: open ? 'rgb(var(--color-orange))' : 'black' }}
        >
          {title}
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
          marginBottom: open ? '24px' : '0px',
        }}
        className="black flex flex-col gap-3 overflow-hidden"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
