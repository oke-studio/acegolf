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
import { Button } from '../../../Button/Button'
import { Link } from 'react-router-dom'

export const GroupOfNumberBlocksItems = ({
  items,
  isMobile,
}: {
  items: TypeHowItWorksStepsFields[]
  isMobile?: boolean
}) => {
  //   const isMobile = useMediaQuery({ maxWidth: '640px' })

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
        const {
          stepTextTitle,
          stepContent,
          textContent,
          stepCtaText,
          stepCtaLink,
        } = h

        // debugger
        return (
          <>
            {index % 3 === 0 && !isMobile && (
              <div className="m-6 h-0 basis-full" id="__break" />
            )}
            <div
              className={classNames(
                'flex flex-grow flex-col gap-6',
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
              {stepCtaLink && (
                <Button buttonVariant="simple">
                  <Link to={`${stepCtaLink}`}>
                    <Typography
                      fontVariant="base"
                      fontWeight="500"
                      tailwindStyle="underline"
                    >
                      {stepCtaText} &rarr;
                    </Typography>
                  </Link>
                </Button>
              )}
            </div>
          </>
        )
      })}
    </div>
  )
}

export const GroupOfNumberedBlocksItemsMobile = ({
  items,
}: {
  items: TypeHowItWorksStepsFields[]
}) => {
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

              const isBlockUp = el.previousElementSibling
              const isBlockDown = el.nextElementSibling

              if (isBlockDown) {
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
              if (isBlockUp) {
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
      className={classNames('flex flex-wrap justify-center')}
      ref={numberedBlocksContainerRef}
    >
      {items.map((h, index) => {
        const {
          stepTextTitle,
          stepContent,
          textContent,
          stepCtaText,
          stepCtaLink,
        } = h

        // debugger
        return (
          <>
            <div className={classNames('flex w-full flex-grow gap-3')}>
              <div className="flex w-12 flex-col">
                <div
                  className="flex h-full flex-col justify-center"
                  id="__left"
                >
                  <div className="m-auto h-full w-3 bg-transparent"></div>
                </div>
                <Typography
                  fontVariant="headingFour"
                  fontWeight="700"
                  tailwindStyle="w-full bg-orange rounded-lg p-2"
                >
                  #{index + 1}
                </Typography>
                <div
                  className="flex h-full flex-col justify-center"
                  id="__right"
                >
                  <div className="m-auto h-full w-3 bg-transparent"></div>
                </div>
              </div>
              <div className="m-6 flex flex-col flex-nowrap gap-3">
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
                {stepCtaLink && (
                  <Button buttonVariant="simple">
                    <Link to={`${stepCtaLink}`}>
                      <Typography
                        fontVariant="base"
                        fontWeight="500"
                        tailwindStyle="underline"
                      >
                        {stepCtaText} &rarr;
                      </Typography>
                    </Link>
                  </Button>
                )}
              </div>
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
  const isMobile = useMediaQuery({ maxWidth: '770px' })

  return (
    <Section tailWindStyle="bg-transparent">
      <div className="flex flex-col justify-center gap-4 text-center text-white">
        <Typography
          fontVariant="headingTwo"
          fontWeight="900"
          fontStyle="italic"
        >
          {title}
        </Typography>
        {isMobile ? (
          <GroupOfNumberedBlocksItemsMobile
            items={howItWorksStepsCollection.items}
          />
        ) : (
          <GroupOfNumberBlocksItems
            items={howItWorksStepsCollection.items}
            isMobile={isMobile}
          />
        )}
      </div>
    </Section>
  )
}
