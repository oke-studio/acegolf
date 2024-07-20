import { useGetHowItWorks } from '../../../HIW/components/HIWSection/hooks/useGetHIW.hook'
import { GroupOfNumberedBlocks } from '../../../../components/Renderers/components/GroupOfNumberedBlocks/GroupOfNumberedBlocks.component'

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
    <GroupOfNumberedBlocks
      item={{
        __typename: 'GroupOfNumberedBlocks',
        howItWorksStepsCollection: {
          items: howItWorksStepsCollection.items,
        },
        title: 'HOW IT WORKS',
      }}
    />
  )
}
