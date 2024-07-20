import { TypeUICollection } from '../../types/contentful'
import {
  LargeTitleAndCta,
  TwoColumnMediaAndText,
  GroupOfNumberedBlocks,
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
            return (
              <GroupOfNumberedBlocks
                item={e}
                key={`group_of_numbered_blocks_${index}`}
              />
            )

          case 'LargeTitleAndCta':
            return (
              <LargeTitleAndCta item={e} key={`large_title_and_cta_${index}`} />
            )
        }
      })}
    </>
  )
}
