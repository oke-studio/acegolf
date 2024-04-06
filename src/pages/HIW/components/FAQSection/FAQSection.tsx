import * as React from 'react'
import { Typography } from '../../../../components/Typography/Typography'
import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'
import { Spinner } from '../../../../components/LoadingStates/Spinner'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { useGetFAQ } from './hooks/useGetFAQ.hook'

export const FAQSection = () => {
  const { faqData, isLoading, isError } = useGetFAQ()

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (isError || !faqData) {
    return <></>
  }

  const faqReduced = faqData.reduce(
    (acc, curr) => {
      const category = curr.categoryRefrence.faqCategoryName

      if (acc[category]) {
        acc[category].push({
          question: curr.question,
          answer: curr.answer,
          slug: curr.faqSlug,
        })
      } else {
        acc[category] = [
          {
            question: curr.question,
            answer: curr.answer,
            slug: curr.faqSlug,
          },
        ]
      }
      return {
        ...acc,
      }
    },
    {} as { [x: string]: { answer: string; question: string; slug: string }[] }
  )

  return (
    <Section
      borderRadiusVariant="corner"
      style={{
        backgroundColor: 'transparent',
        border: 0,
        // padding: '3rem',
      }}
    >
      <Container>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 text-white">
          <Typography
            fontVariant="largeH1"
            fontWeight="900"
            tailwindStyle="text-center uppercase mb-3"
          >
            FAQ
          </Typography>
          <Typography fontVariant="base" fontWeight="500">
            Questions you wanted to ask but couldn&apos;t
          </Typography>

          {faqReduced &&
            Object.keys(faqReduced!).map((faq, index) => {
              const FAQStore = faqReduced[faq]
              return (
                <div key={`${faq}_${index}`} className="w-full max-w-[600px]">
                  <Typography
                    fontVariant="large"
                    fontWeight="700"
                    style={{
                      borderBottom: '2px dotted white',
                      marginBottom: '2rem',
                    }}
                    tailwindStyle="text-orange"
                    key={`${faq}_${index}`}
                  >
                    {faq.toUpperCase()}
                  </Typography>
                  {FAQStore?.map((acc, i) => (
                    <FAQAccordion
                      defaultOpen={false}
                      title={acc.question}
                      key={`faq_accordion_${index}_${i}`}
                      id={acc.slug}
                    >
                      <Typography
                        fontVariant="base"
                        fontWeight="400"
                        key={`${faq}_${index}_${i}`}
                      >
                        {acc.answer}
                      </Typography>
                    </FAQAccordion>
                  ))}
                </div>
              )
            })}
        </div>
      </Container>
    </Section>
  )
}

const FAQAccordion = ({
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
    <motion.div animate={open ? 'open' : 'closed'} className="">
      <button
        onClick={() => {
          // console.log('clicked', id)
          setOpen((pv) => !pv)
        }}
        className="flex w-full items-center justify-between gap-4 py-6 text-start"
        id={`faq-${id}`}
      >
        <Typography
          fontVariant="headingFour"
          fontWeight="600"
          style={{ color: open ? 'rgb(var(--color-orange))' : 'white' }}
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
              color: '#ffffff',
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? 'fit-content' : '0px',
          marginBottom: open ? '24px' : '0px',
        }}
        className="white overflow-hidden"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
