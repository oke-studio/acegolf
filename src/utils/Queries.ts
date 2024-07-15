const startDate = new Date()
const endDate = new Date(startDate)
endDate.setDate(endDate.getDate() + 7 * 2)

const DateFilter = `startDateTime_lte: "${endDate.toISOString()}", endDateTime_gte: "${startDate.toISOString()}"`

export const GetFAQQuery = `
  query GetFAQ {
    faqItemCollection {
      items {
        question
        answer
        faqSlug
        ctaText
        ctaLink
        categoryRefrence {
          faqCategoryName
          slug
        }
      }
    }
  }
`

export const GetAceV2Query = `
  query getAce {
    aceHomePageCollection(limit: 1) {
      items {
        name
        activePriceGrid {
          bayPricingScheduleName
          effectiveDateRangeStart
          effectiveDateRangeEnd
          announcement
          generalBayScheduleCollection {
            items {
              dayOfWeek
              serviceTime1 {
                nameOfServiceTime
                activeServices
                beginningTime
                endTime
              }
              serviceTime1Price
              serviceTime2 {
                nameOfServiceTime
                activeServices
                beginningTime
                endTime
              }
              serviceTime2Price
            }
          }
          privateBayScheduleCollection {
            items {
              dayOfWeek
              serviceTime1 {
                nameOfServiceTime
                activeServices
                beginningTime
                endTime
              }
              serviceTime1Price
              serviceTime2 {
                nameOfServiceTime
                activeServices
                beginningTime
                endTime
              }
              serviceTime2Price
            }
          }
        }
        activeHowItWorks {
          title
          howItWorksStepsCollection {
            items {
              stepTitle
              stepTextTitle
              stepContent
              stepCtaText
              stepCtaLink
              relatedFaqCollection {
                items {
                  question
                  faqSlug
                  answer
                  ctaText
                  ctaLink
                  categoryRefrence {
                    faqCategoryName
                    slug
                  }
                }
              }
            }
          }
        }
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
                description
                fileName
                url
                contentType
              }
            }
          }
          bigBitesImage {
            title
            description
            contentType
            fileName
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
                description
                fileName
                url
                contentType
              }
            }
          }

          smallBitesImage {
            title
            description
            contentType
            fileName
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
                description
                fileName
                url
                contentType
              }
            }
          }
          dessertsImage {
            title
            description
            contentType
            fileName
            url
          }
        }
        featuredEventsPromotionsCollection {
          items {
            eventTitle
            eventType
            slugId
            startDateTime
            endDateTime
            eventDescription
            ctaText
            ctaLink
            eventPoster {
              title
              description
              url
              fileName
              contentType
            }
          }
        }
        featuredUgcVideosCollection {
          items {
            nameOfPerson
            testimonialMessage
            type
            linkedUrl
            imageVideo {
              contentType
              fileName
              url
            }
          }
        }
        featuredTestimonialsCollection {
          items {
            type
            nameOfPerson
            testimonialMessage
            imageVideo {
              title
              description
              contentType
              url
              fileName
            }
            linkedUrl
          }
        }
      }
    }
  }
`

export const GetAboutPageQuery = `
  query getAceAboutPage {
    aboutPageCollection(limit: 1) {
      items {
        aboutPageTitle
        aboutPageBlurb
        aceGolfStaffProfilesCollection {
          items {
            nameOfPerson
            typeOfProfile
            titleOfPerson
            pictureOfPerson {
              url
              fileName
              contentType
            }
            description
            contactLink
            contactPhoneNumber
          }
        }
      }
    }
  }
`

export const GetEventsQuery = `
  query getAceEvents {
  newEventItemCollection(limit: 14, where: {${DateFilter}}) {
    items {
      eventTitle
      slugId
      eventType
      startDateTime
      endDateTime
      eventDescription
      ctaText
      ctaLink
      eventDesc {
        json
      }
      eventPoster {
        url
        fileName
        description
        contentType
      }
    }
  }
}
`

export const GetEventsItemQuery = (slugId: string) => `
  query getAceEventsItem {
  newEventItemCollection(where: {${DateFilter}, slugId: "${slugId}"}) {
    items {
      eventTitle
      slugId
      eventType
      startDateTime
      endDateTime
      eventDescription
      ctaText
      ctaLink
      eventDesc {
        json
      }
      eventPoster {
        url
        fileName
        description
        contentType
      }
    }
  }
}
`

export const GetAceLeaguesItemQuery = (slugId: string) => `
query getAceLeaguesItem {
  newEventItemCollection(limit: 1, where: { eventType: "League", slugId: "${slugId}", ${DateFilter}}) {
    items {
      eventTitle
      slugId
      eventType
      startDateTime
      endDateTime	
      eventDescription
      ctaText
      ctaLink
      eventPageContentStackCollection {
        items {
          ... on GroupOfNumberedBlocks {
            __typename
            title
            howItWorksStepsCollection {
              items {
                stepTitle
                stepTextTitle
                stepContent
                stepCtaText
                relatedFaqCollection {
                  items {
                    question
                    faqSlug
                    answer
                    ctaText
                    ctaLink
                    categoryRefrence {
                      faqCategoryName
                      slug
                    }
                  }
                }
              }
            }
          }
          ... on TwoColumnMediaAndText {
            __typename
            sectionTitle
            textColumn {
              json
            }
            mediaColumn {
              description
              title
              contentType
              fileName
              url
            }
            columnOrder
          }
          ... on LargeTitleAndCta {
            __typename
            titleText
            textArea
            ctaText
            ctaLink
          }
        }
      }
      eventDesc {
        json
      }
      eventPoster {
        url
        fileName
        description
        contentType
      }
    }
  }
}
`

export const GetCoachingPageQuery = `
  query getAceCoachingPage {
    coachingPageCollection(limit: 1) {
      items {
        coachingPage
        coachingProfilesCollection {
          items {
            nameOfPerson
            typeOfProfile
            titleOfPerson
            pictureOfPerson {
              url
              description
              fileName
              contentType
            }
            description
            contactLink
            contactPhoneNumber
            contactEmail
          }
        }
      }
    }
  }
`

export const GetUGCTestimonialsQuery = `
  query getAceUGCTestimonials {
    testimonialsCollection {
      items {
        nameOfPerson
        type
        testimonialMessage
        imageVideo {
          contentType
          fileName
          url
          description
        }
        linkedUrl
      }
    }
  }
`

export const GetLeaguesQuery = `
  query getAceLeaguesEvents {
    newEventItemCollection ( where: {eventType: "League", ${DateFilter}} ){
      items {
        eventTitle
        slugId
        eventType
        startDateTime
        endDateTime
        eventDescription
        ctaText
        ctaLink
        eventPoster {
          url
          fileName
          description
          contentType
        }
      }
    }
  }
`

// eventPageContentStackCollection {
//   items {
//    ... on GroupOfNumberedBlocks {
//      __typename
//      title
//      howItWorksStepsCollection {
//        items {
//          stepTitle
//          stepTextTitle
//          stepContent
//          stepCtaText
//          relatedFaqCollection {
//            items {
//              question
//              faqSlug
//              answer
//              ctaText
//              ctaLink
//              categoryRefrence {
//                faqCategoryName
//                slug
//              }
//            }
//          }
//        }
//      }
//    }
//    ... on TwoColumnMediaAndText {
//      sectionTitle
//      textColumn {
//        json
//      }
//      mediaColumn {
//        description
//        title
//        contentType
//        fileName
//        url
//      }
//      columnOrder
//    }
//    ... on LargeTitleAndCta {
//      titleText
//      textArea
//      ctaText
//      ctaLink
//    }
//  }
// }
