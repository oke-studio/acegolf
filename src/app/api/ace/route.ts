export const dynamic = 'force-dynamic'; // defaults to auto
import { NextResponse } from 'next/server';
import * as contentful from 'contentful';
import { TypeAceGolfBarComFields } from '@/types/contentful/TypeAceGolfBarCom';

export async function GET(request: Request) {
	// if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
	// 	return NextResponse.json({
	// 		error: 'error contentful access token not provided ',
	// 	});
	// }
	// // const body = await request
	// const client = contentful.createClient({
	// 	space: process.env.CONTENTFUL_SPACE_ID!,
	// 	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
	// });
	// // const data = await client.getContentTypes();
	// const entries =
	// 	await client.withoutUnresolvableLinks.getEntries<TypeAceGolfBarComFields>({
	// 		content_type: 'aceGolfBarCom',
	// 		include: 5,
	// 	});
	// return NextResponse.json(entries.items[0].fields);
}
