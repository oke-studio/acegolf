import { TypeLargeTitleAndCTA } from '../../../../types/contentful'
import { Section } from '../../../Section/Section'
import { Typography } from '../../../Typography/Typography'
import { Button } from '../../../Button/Button'
import { useMediaQuery } from 'react-responsive'

export const LargeTitleAndCta = ({ item }: { item: TypeLargeTitleAndCTA }) => {
  const isMobile = useMediaQuery({ maxWidth: '640px' })

  const { ctaLink, ctaText, textArea, titleText } = item

  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}
    >
      <div className="flex flex-col items-center gap-4 text-white">
        <Typography
          fontVariant="headingTwo"
          fontStyle="italic"
          fontWeight="900"
          tailwindStyle="text-white md:gap-4"
        >
          {titleText}
        </Typography>

        <Typography fontVariant="large" fontWeight="300" fontStyle="normal">
          {textArea}
        </Typography>
      </div>

      <Button
        buttonVariant="primary"
        // buttonStyle={{ width: 'max-content' }}
        //onClick={(e) => {e.preventDefault(); scrollTo(“id”)
      >
        <a href={ctaLink}>
          <Typography
            fontVariant={isMobile ? 'extralarge' : 'headingFour'}
            fontWeight="500"
            T="h3"
          >
            {ctaText}
          </Typography>
        </a>
      </Button>
    </Section>
  )
}
