

export const GetAceQuery = `
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
                  description
                  contentType
                  fileName
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
              contentType
              fileName
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

export const GetAceV2Query =`
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
            eventDesc {
              json
            }
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
    newEventItemCollection {
      items {
        eventTitle
        slugId
        eventType
        startDateTime
        endDateTime
        eventDescription
        eventDesc {
          json
        }
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
    newEventItemCollection ( where: eventType: "League"){
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
