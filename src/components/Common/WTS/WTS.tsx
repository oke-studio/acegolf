import { Section } from '../../Section/Section'
import { Typography } from '../../Typography/Typography'
import { useGetUGCTestimonials } from './hooks/UseGetUGCQuery/useGetUGC.hook'

export const WTS = () => {
  const { UGCData, isError, isLoading } = useGetUGCTestimonials()

  if (isError || !UGCData) {
    return <>error</>
  }

  if (isLoading) {
    return <>loading</>
  }
  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        border: 0,
        // padding: 0,
      }}
    >
      <div className="mx-auto flex w-full flex-col items-center gap-6 text-center">
        <Typography
          fontVariant="headingTwo"
          fontWeight="900"
          fontStyle="italic"
        >
          WHAT THEY&apos;RE
          <br />
          SAYING
        </Typography>
        <div className="flex flex-wrap justify-center gap-6 *:grow *:basis-48">
          {Array(3)
            .fill(null)
            .map(() => {
              return (
                <div className="flex flex-col items-start gap-3 text-left">
                  <div className="bg-grey h-32 w-52 rounded-xl" />
                  <Typography
                    fontVariant="base"
                    fontWeight="400"
                    fontStyle="italic"
                  >
                    Some text about something
                  </Typography>
                  <Typography
                    fontVariant="base"
                    fontWeight="900"
                    fontStyle="italic"
                    tailwindStyle="bg-sharpTeal w-max rounded-lg p-1 text-black items-start"
                  >
                    @person's tag
                  </Typography>
                </div>
              )
            })}
        </div>
      </div>
    </Section>
  )
}
