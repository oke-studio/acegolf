import { Link } from 'react-router-dom'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { useGetFeaturedPromotions } from './hooks/useGetPromotions'
import { ImageURLFormatter } from '../../../../utils/imageFormatter'

export const PromotionsSection = () => {
  const { isError, isLoading, promotionsData } = useGetFeaturedPromotions()

  if (!promotionsData || isError) {
    return <></>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Section
      style={{ backgroundColor: 'transparent', border: 0, color: 'white' }}
    >
      <div className="mx-auto flex w-full flex-col items-center gap-6 text-center">
        <Typography fontVariant="headingOne" fontWeight="900">
          PROMOTIONS
        </Typography>
        <div className="flex w-full flex-wrap justify-center gap-4">
          {promotionsData.map((promo) => {
            const { eventTitle, eventPoster, slugId, startDateTime } = promo
            const imgUrl = eventPoster?.url
              ? ImageURLFormatter(eventPoster?.url, eventPoster?.contentType)
              : 'somsom'
            {
              /* // TODO: Update this image url to have a default image */
            }
            return (
              <Promotion
                title={eventTitle}
                imgSrc={imgUrl}
                promoId={slugId}
                promoDate={startDateTime.split('T')[0]}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}

const Promotion = ({
  imgSrc,
  title,
  promoId,
  promoDate,
}: {
  imgSrc: string
  title: string
  promoId: string
  promoDate: string
}) => {
  return (
    <Link to={`/events/${promoId}/${promoDate}`}>
      <div className="relative flex h-80 min-w-64 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md grayscale hover:cursor-pointer hover:text-orange hover:grayscale-0">
        <div
          className="h-full min-h-96 bg-slate-300 "
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        {/* <img
          src={imgSrc}
          className="h-full max-h-96 w-full max-w-80 grayscale hover:grayscale-0"
        /> */}
        <div className="absolute bottom-0 left-0 right-0 h-full max-h-16 bg-white p-4 text-left ">
          <Typography fontVariant="base" fontWeight="700">
            {title}
          </Typography>
        </div>
      </div>
    </Link>
  )
}
