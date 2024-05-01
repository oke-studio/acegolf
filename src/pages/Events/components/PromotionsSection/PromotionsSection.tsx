import { Link } from 'react-router-dom'
import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { useGetFeaturedPromotions } from './hooks/useGetPromotions'

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
          {/* // TODO: Update this image src prop to a default image */}
          {promotionsData.map((promo) => (
            <Promotion
              title={promo.eventTitle}
              imgSrc={promo.eventPoster?.url ?? 'somsom'}
              promoId={promo.slugId}
              promoDate={promo.startDateTime.split('T')[0]}
            />
          ))}
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
    <div className="relative flex h-80 min-w-64 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div
        className="h-full min-h-96 bg-slate-300 grayscale"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-full max-h-16 bg-white p-4 text-left hover:cursor-pointer hover:text-orange">
        <Link to={`/events/${promoId}/${promoDate}`}>
          <Typography fontVariant="base" fontWeight="700">
            {title}
          </Typography>
        </Link>
      </div>
    </div>
  )
}
