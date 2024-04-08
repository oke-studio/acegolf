import { gql } from 'graphql-request'

export const GetAceQuery = gql`
  query GetAce {
    aceGolfBarComCollection(limit: 1) {
      items {
        activeDate
        globalAnnouncementHeader
        activeMenu {
          menuName
          bigBitesCollection {
            items {
              name
              typeOfMeal
              itemDescription
              price
              image {
                title
                url
              }
            }
          }
          bigBitesImage {
            url
          }
          smallBitesCollection {
            items {
              name
              typeOfMeal
              itemDescription
              price
              image {
                title
                url
              }
            }
          }
          smallBitesImage {
            url
          }
          dessertsCollection {
            items {
              name
              typeOfMeal
              itemDescription
              price
              image {
                title
              }
            }
          }
          dessertsImage {
            url
          }
          drinksCollection {
            items {
              name
              itemDescription
              price
              image {
                title
              }
            }
          }
          drinksImage {
            url
          }
        }
        activePriceGrid {
          bayPricingScheduleName
          effectiveDateRangeStart
          effectiveDateRangeEnd
          announcement
          generalBayScheduleCollection {
            items {
              dayOfWeek
              serviceTime1 {
                beginningTime
                endTime
                nameOfServiceTime
              }
              serviceTime1Price
              serviceTime2 {
                beginningTime
                endTime
                nameOfServiceTime
              }
              serviceTime2Price
            }
          }
          privateBayScheduleCollection {
            items {
              dayOfWeek
              serviceTime1 {
                beginningTime
                endTime
                nameOfServiceTime
              }
              serviceTime1Price
              serviceTime2 {
                beginningTime
                endTime
                nameOfServiceTime
              }
              serviceTime2Price
            }
          }
        }
        activeHowItWorks {
          title
          step1Title
          step1Content
          step1RelatedFaqCollection {
            items {
              question
              answer
              ctaLink
              faqSlug
              categoryRefrence {
                faqCategoryName
                slug
              }
            }
          }
          step2Title
          step2Title
          step2Content
          step2RelatedFaqCollection {
            items {
              question
              answer
              ctaLink
              faqSlug
            }
          }
          step3Title
          step3Content
          step3RelatedFaqCollection {
            items {
              question
              answer
              ctaLink
              faqSlug
            }
          }
        }
        activeEventsCollection {
          items {
            eventDate
            eventsCollection {
              items {
                eventTitle
                eventDuration
                slugId
                ctaText
                eventDescription
                ctaLink
                eventType
                eventPoster {
                  title
                  url
                }
              }
            }
          }
        }
        activePromotionsCollection {
          items {
            promotionTitle
            effectiveDateStart
            effectiveDateEnd
            slugId
            sevenRoomsPromotionCode
            promotionPoster {
              description
              title
            }
          }
        }
      }
    }
  }
`

export const GetFAQQuery = gql`
  query GetFAQ {
    faqItemCollection {
      items {
        question
        answer
        faqSlug
        categoryRefrence {
          faqCategoryName
          slug
        }
      }
    }
  }
`
