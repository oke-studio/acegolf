import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button/Button'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { useGetHowItWorks } from '../../../HIW/components/HIWSection/hooks/useGetHIW.hook'

export const LandingHIWSection = () => {
  const { howItWorksData, isError, isLoading } = useGetHowItWorks()

  if (!howItWorksData || isError) {
    return <></>
  }

  if (isLoading) {
    return <>Loading</>
  }

  const { howItWorksStepsCollection } = howItWorksData

  return (
    <Section style={{ backgroundColor: 'transparent', border: 0 }}>
      <div className="flex w-full flex-col justify-center gap-5 text-center text-white">
        <Typography
          fontVariant="headingOne"
          fontWeight="900"
          fontStyle="italic"
        >
          HOW IT WORKS
        </Typography>
        <div className="flex flex-col justify-center gap-3 md:flex-row">
          {howItWorksStepsCollection.items.map((p, index) => (
            <div className="first flex w-full flex-col items-center gap-4">
              <Typography
                fontVariant="headingFour"
                fontWeight="700"
                tailwindStyle="w-max bg-orange rounded-lg"
              >
                #{index + 1}
              </Typography>
              <Typography fontVariant="headingFour" fontWeight="700">
                {p.stepTextTitle}
              </Typography>
              <Typography fontVariant="base" fontWeight="500">
                {p.stepContent}
              </Typography>
              <Button buttonVariant="simple">
                <Link to={`${p.stepCtaLink}`}>
                  <Typography
                    fontVariant="base"
                    fontWeight="500"
                    tailwindStyle="underline"
                  >
                    {p.stepCtaText} &rarr;
                  </Typography>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
