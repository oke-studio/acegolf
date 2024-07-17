import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button/Button'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { useGetHowItWorks } from '../../../HIW/components/HIWSection/hooks/useGetHIW.hook'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { GroupOfNumberBlocksItems } from '../../../../components/Renderers/components/GroupOfNumberedBlocks/GroupOfNumberedBlocks.component'

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
    <Section style={{ backgroundColor: 'transparent' }}>
      <div className="flex w-full flex-col justify-center gap-5 text-center text-white">
        <Typography
          fontVariant="headingOne"
          fontWeight="900"
          fontStyle="italic"
        >
          HOW IT WORKS
        </Typography>
        <GroupOfNumberBlocksItems items={howItWorksStepsCollection.items} />
      </div>
    </Section>
  )
}
