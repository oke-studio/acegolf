import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { TypeGroupOfNumberedBlocks } from '../../../../types/contentful'
import { Section } from '../../../Section/Section'
import { Typography } from '../../../Typography/Typography'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

export const GroupOfNumberedBlocks = ({
  item,
}: {
  item: TypeGroupOfNumberedBlocks
}) => {
  const isMobile = useMediaQuery({ maxWidth: '770px' })
  const { howItWorksStepsCollection, title } = item
  const howItWorksStepsCollectionItems = howItWorksStepsCollection.items
  console.log(howItWorksStepsCollection)

  return (
    <Section tailWindStyle="bg-transparent">
      <div className="flex flex-col justify-center gap-4 text-center text-white">
        <Typography fontVariant="headingFour" fontWeight="900">
          {title}
        </Typography>
        <div
          className={classNames(
            'flex flex-wrap justify-center',
            isMobile && 'gap-6'
            // howItWorksStepsCollectionItems.length === 4 ? 'grid-cols-4' : ''
          )}
        >
          {howItWorksStepsCollectionItems.map((h, index) => {
            const { stepTextTitle, stepTitle, stepContent, textContent } = h

            const isLeft = index % 3 === 0
            const isRight =
              (index + 1) % 3 === 0 ||
              index + 1 === howItWorksStepsCollectionItems.length

            // debugger
            return (
              <>
                {index % 3 === 0 && !isMobile && (
                  <div className="m-6 h-0 basis-full" />
                )}
                <div
                  className={classNames(
                    'flex flex-grow flex-col gap-3',
                    isMobile ? 'w-full' : 'max-w-64'
                  )}
                >
                  <div className="flex">
                    <div className="flex w-full flex-col justify-center">
                      {!isLeft && !isMobile && (
                        <div className="m-auto h-[30%] w-full bg-orange"></div>
                      )}
                    </div>
                    <Typography
                      fontVariant="headingFour"
                      fontWeight="700"
                      tailwindStyle="w-max bg-orange rounded-lg min-w-max"
                    >
                      #{index + 1}
                    </Typography>
                    <div className="flex w-full flex-col justify-center">
                      {!isRight && !isMobile && (
                        <div className="m-auto h-[30%] w-full bg-orange"></div>
                      )}
                    </div>
                  </div>
                  <Typography fontVariant="headingFour" fontWeight="700">
                    {stepTextTitle}
                  </Typography>
                  <Typography fontVariant="base" fontWeight="500">
                    {stepContent && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: documentToHtmlString(textContent.json),
                        }}
                      >
                        {}
                      </div>
                    )}
                  </Typography>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
