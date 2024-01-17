import { NextResponse } from 'next/server';
import * as contentful from 'contentful';

type MenuItem = {
  contentTypeId: 'menuItem';
  fields: {
    name: contentful.EntryFieldTypes.Text;
    typeOfMeal: contentful.EntryFieldTypes.Text;
    itemDescription: contentful.EntryFieldTypes.Text;
    price: contentful.EntryFieldTypes.Number;
  };
};

type Menu = {
  contentTypeId: 'menu';
  fields: {
    menuName: contentful.EntryFieldTypes.Text;
    bigBites: contentful.EntryFieldTypes.Object<
      contentful.EntryFieldTypes.EntryLink<MenuItem>
    >;
    smallBites: contentful.EntryFieldTypes.Object<
      contentful.EntryFieldTypes.EntryLink<MenuItem>
    >;
    dessert: contentful.EntryFieldTypes.Object<
      contentful.EntryFieldTypes.EntryLink<MenuItem>
    >;
    drinks: contentful.EntryFieldTypes.Object<
      contentful.EntryFieldTypes.EntryLink<MenuItem>
    >;
  };
};

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

  const entries = await client.getEntries<Menu>({
    content_type: 'menu',
    'metadata.tags.sys.id[in]': ['v1'],
  });

  return NextResponse.json({ data: entries.items[0].fields });
}
