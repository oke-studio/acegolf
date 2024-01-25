import Error from 'next/error';
import { NextResponse } from 'next/server';
import { graphql } from 'graphql';
import { request, gql } from 'graphql-request';

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
							contentType
						}
					}
				}
				activePromotionsCollection {
					items {
						promotionTitle
						effectiveDateStart
						effectiveDateEnd
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
`;

export async function getAceQuery() {
	// const response = await fetch('/api/ace');

	if (
		!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
		!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
	) {
		return Promise.reject(
			new Error({
				statusCode: 404,
				title: 'Contentful Space ID not available',
			}),
		);
	}

	console.log(GetAceQuery.replace(/\s\s+/g, ' '));

	const response = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?&query=${GetAceQuery.replace(/\s\s+/g, ' ')}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// access_token: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
			},
		},
	);

	// const request(
	//   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
	//   GetAceQuery,
	//   {

	//   },
	// );

	// console.log('here', response);

	if (!response.ok) {
		return Promise.reject(new Error({ statusCode: 404 }));
	}

	const data = await response.json();
	return data;
}
