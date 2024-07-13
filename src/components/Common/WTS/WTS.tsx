import { ImageURLFormatter } from '../../../utils/imageFormatter'
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
        <div className="flex flex-wrap justify-center gap-12 *:grow *:basis-48">
          {UGCData.map((ugc, index) => {
            const { imageVideo, nameOfPerson, testimonialMessage, linkedUrl } =
              ugc

            const isImage =
              imageVideo && imageVideo.contentType.split('/')[0] === 'image'

            return (
              linkedUrl && (
                <a
                  href={linkedUrl}
                  target="__blank"
                  className="flex h-max w-max flex-col items-center gap-3 rounded-lg p-4 text-left duration-300 ease-in-out hover:border-2 hover:border-dashed hover:border-orange"
                  key={`linked_url_${index}`}
                >
                  {isImage && (
                    <div
                      className="h-48 w-72 rounded-xl"
                      style={{
                        backgroundImage: `url(${ImageURLFormatter(imageVideo.url, imageVideo.contentType)})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    />
                  )}
                  <Typography
                    fontVariant="base"
                    fontWeight="400"
                    fontStyle="italic"
                    tailwindStyle="w-72"
                  >
                    {testimonialMessage}
                  </Typography>
                  <Typography
                    fontVariant="base"
                    fontWeight="900"
                    fontStyle="italic"
                    tailwindStyle="bg-sharpTeal rounded-lg p-1 text-black items-start"
                  >
                    {nameOfPerson}
                  </Typography>
                </a>
              )
            )
          })}
        </div>
      </div>
    </Section>
  )
}
