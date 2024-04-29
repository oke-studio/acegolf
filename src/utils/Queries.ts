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
            eventTitle
            slugId
            eventDescription
            eventPoster {
              title
              url
              description
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

export const GetAceV2Query = gql`
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
              stepContent
              stepCtaText
              stepCtaLink
              relatedFaqCollection {
                items {
                  question
                  faqSlug
                  answer
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
              }
            }
          }
          bigBitesImage {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
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
              }
            }
          }

          smallBitesImage {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
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
              }
            }
          }
          dessertsImage {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
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
            }
          }
        }
      }
    }
  }
`

export const GetAboutPageQuery = gql`
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
            }
            description
            contactLink
          }
        }
      }
    }
  }
`

export const GetEventsQuery = gql`
  query getAceEvents {
    newEventItemCollection {
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
        }
      }
    }
  }
`

export const GetCoachingPageQuery = gql`
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
            }
            description
            contactLink
          }
        }
      }
    }
  }
`
