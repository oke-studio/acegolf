import * as React from 'react'
import { Typography } from '../../../../components/Typography/Typography'
import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'
import { Spinner } from '../../../../components/LoadingStates/Spinner'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { useGetFAQ } from '../../../../hooks/useGetFAQ/useGetFAQ.hook'
import { Button } from '../../../../components/Button/Button'
import { Link } from 'react-router-dom'

// import { HIWMiniInfoBox } from '../../../HIW/components/HIWSection/components/HIWInfoBox'

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
          cta: curr.ctaText,
          link: curr.ctaLink,
          slug: curr.faqSlug,
        })
      } else {
        acc[category] = [
          {
            question: curr.question,
            answer: curr.answer,
            cta: curr.ctaText,
            link: curr.ctaLink,
            slug: curr.faqSlug,
          },
        ]
      }
      return {
        ...acc,
      }
    },
    {} as {
      [x: string]: {
        answer: string
        question: string
        cta?: string
        link?: string
        slug: string
      }[]
    }
  )

  return (
    <Section
      borderRadiusVariant="corner"
      style={{
        backgroundColor: 'transparent',
        border: 0,
        paddingTop: '1.5rem',
      }}
    >
      <Container>
        <div className="mt-10 flex flex-col items-center justify-center gap-12 text-white">
          {faqReduced &&
            Object.keys(faqReduced!).map((faq, index) => {
              const FAQStore = faqReduced[faq]
              return (
                <div
                  key={`${faq}_${index}`}
                  className="flex w-full flex-col flex-nowrap gap-3"
                >
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
                      cta={acc.cta}
                      link={acc.link}
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
  link,
  cta,
  id,
}: {
  title: string
  children: React.ReactNode
  defaultOpen: boolean
  link?: string
  cta?: string
  id: string
}) => {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className="border-bold flex max-h-max w-full flex-col items-center gap-3 overflow-hidden rounded-2xl border-2 border-black bg-sharpTeal px-6 py-4  text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-2xl hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      onClick={() => {
        // console.log('clicked', id)
        setOpen((pv) => !pv)
      }}
    >
      <div className="flex w-full justify-between" id={`faq-${id}`}>
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
        {link && cta && (
          <Button
            buttonVariant="primary"
            buttonStyle={{ width: 'max-content' }}
          >
            <Link to={link} target="_blank">
              {' '}
              {cta} &rarr;
            </Link>
          </Button>
        )}
      </motion.div>
    </motion.div>
  )
}
