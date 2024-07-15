import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { TypeTwoColAndMedia } from '../../../../types/contentful'
import { Section } from '../../../Section/Section'
import { ImageURLFormatter } from '../../../../utils/imageFormatter'
import { Typography } from '../../../Typography/Typography'
import classNames from 'classnames'

export const TwoColumnMediaAndText = ({
  item,
}: {
  item: TypeTwoColAndMedia
}) => {
  const { mediaColumn, sectionTitle, textColumn, columnOrder } = item

  return (
    <Section tailWindStyle="bg-transparent">
      <div
        className={classNames(
          'flex flex-wrap gap-3 text-white *:grow *:basis-64',
          columnOrder ? 'flex-row' : 'flex-row-reverse'
        )}
      >
        <div className="flex flex-col flex-nowrap">
          <Typography fontVariant="headingFour" fontWeight="900">
            {sectionTitle}
          </Typography>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(textColumn.json),
            }}
          />
        </div>
        <div className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div
            className="aspect-square h-full min-h-96 bg-slate-300"
            style={{
              backgroundImage: `url(${ImageURLFormatter(
                mediaColumn.url,
                mediaColumn.contentType
              )})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>
      </div>
    </Section>
  )
}
