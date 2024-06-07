import { ImageURLFormatter } from '../../../../../../utils/imageFormatter'
import { useGetUGCTestimonials } from './hooks/useGetUGC.hook'

import posterURL from '../../../../../../assets/events/Promotion.webp'

export const UGC = () => {
  const { UGCData, isError, isLoading } = useGetUGCTestimonials()

  if (isError || !UGCData) {
    return <>error</>
  }

  if (isLoading) {
    return <>loading</>
  }
  return (
    <div
      // className="grid-rows-auto ml-auto mr-auto grid max-w-[60rem] grid-cols-2 gap-6 md:grid-cols-4"
      className="columns-4 gap-6"
      // style={{
      //   display: 'grid',
      //   gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))',
      //   gridTemplateRows: 'masonry',
      //   gap: '1rem',
      // }}
    >
      {UGCData.map((ugc, index) => {
        const { imageVideo } = ugc
        const imgUrl = ImageURLFormatter(imageVideo.url, imageVideo.contentType)

        if (
          imageVideo.contentType === 'video/webm' ||
          imageVideo.contentType === 'video/mp4'
        ) {
          return (
            <video
              className="h-auto w-full rounded-lg"
              autoPlay
              loop
              preload="auto"
              muted
              playsInline
              poster={posterURL}
              key={`ugc_video_${index}`}
              // alt=""
            >
              <source src={imgUrl} type="video/webm" />
            </video>
          )
        }

        return (
          <img
            className="h-auto w-full rounded-lg"
            src={imgUrl}
            alt=""
            loading="lazy"
            key={`ugc_image_${index}`}
          />
        )
      })}
    </div>
  )
}
