export const dynamic = 'force-dynamic'; // defaults to auto
import { NextResponse } from 'next/server';
import * as contentful from 'contentful';
import { TypeMenuFields } from '@/contentful/types';
export async function GET(request: Request) {
  if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
    return NextResponse.json({
      error: 'error contentful access token not provided ',
    });
  }

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const entries = await client.getEntries<TypeMenuFields>({
    content_type: 'menu',
    'metadata.tags.sys.id[in]': ['v1'],
  });

  return NextResponse.json({
    data: entries.items[0].fields.bigBites[0],
  });
}
