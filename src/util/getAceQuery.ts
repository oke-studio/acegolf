import Error from 'next/error';
import { NextResponse } from 'next/server';
import { graphql } from 'graphql';
import { request, gql } from 'graphql-request';

export async function getAceQuery(query: string) {
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

	// console.log(GetAceQuery.replace(/\s\s+/g, ' '));

	const response = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}?&query=${query.replace(/\s\s+/g, ' ')}`,
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
