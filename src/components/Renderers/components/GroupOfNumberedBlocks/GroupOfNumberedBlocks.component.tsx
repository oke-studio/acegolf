import { useLayoutEffect, useRef } from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import {
  TypeGroupOfNumberedBlocks,
  TypeHowItWorksStepsFields,
} from '../../../../types/contentful'
import { Section } from '../../../Section/Section'
import { Typography } from '../../../Typography/Typography'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

export const GroupOfNumberBlocksItems = ({
  items,
}: {
  items: TypeHowItWorksStepsFields[]
}) => {
  const isMobile = useMediaQuery({ maxWidth: '770px' })

  const numberedBlocksContainerRef = useRef(null)

  useLayoutEffect(() => {
    if (numberedBlocksContainerRef.current) {
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const blocks = entry.target
          ;[...blocks.children]
            .filter((el) => el.id !== '__break')
            .forEach((el) => {
              //   console.log(
              //     JSON.stringify(
              //       {
              //         name: el.id,
              //         self: el.getBoundingClientRect(),
              //         prev: el.previousElementSibling?.getBoundingClientRect(),
              //         next: el.nextElementSibling?.getBoundingClientRect(),
              //       },
              //       null,
              //       2
              //     )
              //   )

              const isBlockLeft =
                el.previousElementSibling &&
                el.previousElementSibling.id !== '__blank' &&
                el.previousElementSibling.getBoundingClientRect().y ===
                  el.getBoundingClientRect().y
              const isBlockRight =
                el.nextElementSibling &&
                el.nextElementSibling.id !== '__blank' &&
                el.nextElementSibling.getBoundingClientRect().y ===
                  el.getBoundingClientRect().y

              if (isBlockRight) {
                el.children[0].children[2].children[0].classList.replace(
                  'bg-transparent',
                  'bg-orange'
                )
              } else {
                el.children[0].children[2].children[0].classList.replace(
                  'bg-orange',
                  'bg-transparent'
                )
              }
              if (isBlockLeft) {
                el.children[0].children[0].children[0].classList.replace(
                  'bg-transparent',
                  'bg-orange'
                )
              } else {
                el.children[0].children[0].children[0].classList.replace(
                  'bg-orange',
                  'bg-transparent'
                )
              }
            })
        })
      })

      observer.observe(numberedBlocksContainerRef.current)

      // Cleanup function
      return () => {
        // console.log('dead')
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div
      className={classNames(
        'flex flex-wrap justify-center',
        isMobile && 'gap-6'
      )}
      ref={numberedBlocksContainerRef}
    >
      {items.map((h, index) => {
        const { stepTextTitle, stepContent, textContent } = h

        // debugger
        return (
          <>
            {index % 3 === 0 && !isMobile && (
              <div className="m-6 h-0 basis-full" id="__break" />
            )}
            <div
              className={classNames(
                'flex flex-grow flex-col gap-3',
                isMobile ? 'w-full' : 'max-w-64'
              )}
            >
              <div className="flex">
                <div
                  className="flex w-full flex-col justify-center"
                  id="__left"
                >
                  <div className="m-auto h-[15%] w-full bg-transparent"></div>
                </div>
                <Typography
                  fontVariant="headingFour"
                  fontWeight="700"
                  tailwindStyle="w-max bg-orange rounded-lg min-w-max p-1"
                >
                  #{index + 1}
                </Typography>
                <div
                  className="flex w-full flex-col justify-center"
                  id="__right"
                >
                  <div className="m-auto h-[15%] w-full bg-transparent"></div>
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
  )
}

export const GroupOfNumberedBlocks = ({
  item,
}: {
  item: TypeGroupOfNumberedBlocks
}) => {
  const { howItWorksStepsCollection, title } = item

  return (
    <Section tailWindStyle="bg-transparent">
      <div className="flex flex-col justify-center gap-4 text-center text-white">
        <Typography fontVariant="headingFour" fontWeight="900">
          {title}
        </Typography>
        <GroupOfNumberBlocksItems items={howItWorksStepsCollection.items} />
      </div>
    </Section>
  )
}
