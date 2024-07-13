import { Typography } from '../../../../components/Typography/Typography'
import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'
import { Spinner } from '../../../../components/LoadingStates/Spinner'
import { FAQAccordion } from '../../../../components/FAQAccordion/FAQAccordion'
import { Button } from '../../../../components/Button/Button'
import { Link } from 'react-router-dom'
import { useGetReducedFAQ } from '../../../../hooks/useGetFAQ/useGetReducedFAQ.hook'

// import { HIWMiniInfoBox } from '../../../HIW/components/HIWSection/components/HIWInfoBox'

export const FAQSection = () => {
  const { faqReduced, isLoading, isError } = useGetReducedFAQ()

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (isError || !faqReduced) {
    return <></>
  }

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
                    >
                      <Typography
                        fontVariant="base"
                        fontWeight="400"
                        key={`${faq}_${index}_${i}`}
                      >
                        {acc.answer}
                      </Typography>
                      {acc.ctaLink && acc.ctaText && (
                        <Button
                          buttonVariant="primary"
                          buttonStyle={{ width: 'max-content' }}
                        >
                          <Link to={acc.ctaLink}> {acc.ctaText} &rarr;</Link>
                        </Button>
                      )}
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
