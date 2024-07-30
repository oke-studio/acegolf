import { CalendarItemContainerStyleType } from './CalendarSection.types'

//Default image imports
import adjusted from '../../../assets/events/Adjusted-Opening-Time.webp'
import closed from '../../../assets/events/Closed-Notice.webp'
import event from '../../../assets/events/Event.webp'
import league from '../../../assets/events/League.webp'
import privateEvent from '../../../assets/events/Private-Event.webp'
import promotion from '../../../assets/events/Promotion.webp'

export const CalendaritemContainerStyles: {
  [k in CalendarItemContainerStyleType]: {
    style: string
    defaultImgSrc: string
  }
} = {
  closed: { style: 'bg-black text-white', defaultImgSrc: closed },
  adjusted: { style: 'bg-orange text-black', defaultImgSrc: adjusted },
  promotion: { style: 'bg-green text-white', defaultImgSrc: promotion },
  event: { style: 'bg-lightOrange text-black', defaultImgSrc: event },
  private_event: {
    style: 'bg-sharpTeal text-black',
    defaultImgSrc: privateEvent,
  },
  league: { style: 'bg-limeGreen text-black', defaultImgSrc: league },
  hidden: { style: 'hidden', defaultImgSrc: '' },
  date: { style: 'bg-grey', defaultImgSrc: '' },
}
