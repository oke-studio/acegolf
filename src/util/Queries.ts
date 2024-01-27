import { gql } from 'graphql-request';

export const GetAceQuery = gql`
	query GetAce {
		aceGolfBarComCollection(limit: 1) {
			items {
				activeDate
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
					smallBitesCollection {
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
					desertsCollection {
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
				}
				activePriceGrid {
					bayPricingScheduleName
					effectiveDateRangeStart
					effectiveDateRangeEnd
					announcement
					generalBayScheduleCollection {
						items {
							dayOfWeek
						}
					}
					privateBayScheduleCollection {
						items {
							dayOfWeek
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
						}
					}
					step3Title
					step3Content
					step3RelatedFaqCollection {
						items {
							question
							answer
							ctaLink
						}
					}
				}
				activeEventsCollection {
					items {
						eventTitle
						slugId
						eventStartDate
						eventEndDate
						ctaText
						ctaLink
						eventPoster {
							title
							description
							url
						}
					}
				}
				activePromotionsCollection {
					items {
						promotionTitle
						effectiveDateStart
						effectiveDateEnd
						sevenRoomsPromotionCode
						slugId
						promotionPoster {
							description
							title
							url
						}
					}
				}
			}
		}
	}
`;

export const GetFAQQuery = gql`
	query GetFAQ {
		faqItemCollection {
			items {
				question
				answer
				categoryRefrence {
					faqCategoryName
					slug
				}
			}
		}
	}
`;
