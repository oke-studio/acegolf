import * as React from 'react'
import { Typography } from '../../../../../components/Typography/Typography'
import { TypeFaqItemFields } from '../../../../../types/contentful'

// type MiniInfoBoxType = {
//   question: string
//   answer: string
//   categoryRefrence: { slug: string; faqCategor }
// }

interface HIWInfoBoxProps {
  number: string
  description: React.ReactNode
  label: React.ReactNode
  miniInfoBox: TypeFaqItemFields[]
}

export const HIWInfoBox = ({
  number,
  description,
  miniInfoBox,
  label,
}: HIWInfoBoxProps) => {
  //   console.log(miniInfoBox)

  return (
    <div className="mb-4 flex flex-col gap-4 text-white">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <Typography
            fontVariant="headingTwo"
            fontWeight="900"
            fontStyle="italic"
          >
            {number}.
          </Typography>
          <Typography
            fontVariant="headingTwo"
            fontWeight="900"
            fontStyle="italic"
          >
            {label}
          </Typography>
        </div>
        <div className="flex align-baseline">
          <Typography fontVariant="base" fontWeight="400">
            {description}
          </Typography>
        </div>
      </div>

      <div className="grid h-40 snap-x grid-cols-[repeat(3,_minmax(auto,_1fr));] gap-4 overflow-scroll p-4 hover:cursor-pointer">
        {miniInfoBox.map((box, index) => (
          <div
            key={`${index}`}
            className="border-bold min-w-[230px] snap-start overflow-hidden rounded-2xl border-2 border-black bg-sharpTeal px-6 py-4 uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            id={box.question}
            onClick={(e) => {
              e.preventDefault()
              try {
                const element = document.getElementById(`faq-${box.faqSlug}`)
                if (element) {
                  console.log(box.faqSlug)
                  const y = element.getBoundingClientRect().top + window.scrollY

                  window.scrollTo({ top: y - 100, behavior: 'smooth' })

                  // element.click()
                }
              } catch {
                console.log('element not found')
              }
            }}
          >
            <Typography fontVariant="large" fontWeight="600">
              {box.question} &rarr;
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
