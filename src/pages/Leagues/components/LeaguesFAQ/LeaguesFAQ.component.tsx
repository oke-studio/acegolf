import { Button } from '../../../../components/Button/Button'
import { Container } from '../../../../components/Container/Container'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { useGetReducedFAQ } from '../../../../hooks/useGetFAQ/useGetReducedFAQ.hook'
import { FAQAccordion } from '../../../../components/FAQAccordion/FAQAccordion'
import { Link } from 'react-router-dom'

const LEAGUES = 'Leagues'

export const LeaguesFAQ = () => {
  const { faqReduced, isError, isLoading } = useGetReducedFAQ()

  if (isLoading) {
    return <></>
  }

  if (isError || !faqReduced) {
    return <></>
  }

  const faqReducedLeagues = faqReduced[LEAGUES]

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
          {faqReducedLeagues && (
            <div
              key={`${LEAGUES}_faq`}
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
                key={`${LEAGUES}_faq`}
              >
                {'Leagues'.toUpperCase()}
              </Typography>
              {faqReducedLeagues?.map((acc, i) => (
                <FAQAccordion
                  defaultOpen={false}
                  title={acc.question}
                  key={`faq_accordion_${i}_${LEAGUES}`}
                  id={acc.slug}
                >
                  <Typography fontVariant="base" fontWeight="400">
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
          )}
        </div>
      </Container>
    </Section>
  )
}
