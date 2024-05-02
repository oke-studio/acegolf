import { ImageURLFormatter } from '../../../../../../utils/imageFormatter'
import { useGetUGCTestimonials } from './hooks/useGetUGC.hook'

export const UGC = () => {
  const { UGCData, isError, isLoading } = useGetUGCTestimonials()

  if (isError || !UGCData) {
    return <>error</>
  }

  if (isLoading) {
    return <>loading</>
  }
  return (
    <div className="grid-rows-auto ml-auto mr-auto grid max-w-[35rem] grid-cols-2 gap-6 md:grid-cols-4">
      {UGCData.map((ugc) => {
        const { imageVideo } = ugc
        const imgUrl = ImageURLFormatter(imageVideo.url, imageVideo.contentType)

        if (imageVideo.contentType === 'video/webm') {
          return (
            <video
              className="h-auto w-full rounded-lg"
              autoPlay
              loop
              preload="auto"
              muted
              // alt=""
            >
              <source src={imgUrl} type="video/webm" />
            </video>
          )
        }

        return <img className="h-auto w-full rounded-lg" src={imgUrl} alt="" />
      })}
    </div>
  )
}
