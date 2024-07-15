import { TypeUICollection } from '../../types/contentful'
import {
  LargeTitleAndCta,
  TwoColumnMediaAndText,
} from '../../components/Renderers'

export const getUIRenderer = (
  UICollection?: TypeUICollection[]
): JSX.Element => {
  if (!UICollection) {
    return <></>
  }

  return (
    <>
      {UICollection.map((e, index) => {
        const { __typename } = e

        switch (__typename) {
          case 'TwoColumnMediaAndText':
            return (
              <TwoColumnMediaAndText
                item={e}
                key={`two_col_and_media_${index}`}
              />
            )
          case 'GroupOfNumberedBlocks':
            // return <div>Group of numbered blocks</div>
            return <></>
          case 'LargeTitleAndCta':
            return (
              <LargeTitleAndCta item={e} key={`large_title_and_cta_${index}`} />
            )
        }
      })}
    </>
  )
}
