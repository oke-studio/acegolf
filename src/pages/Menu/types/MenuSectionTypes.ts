import { TypeMenuFields, TypeMenuItemFields } from '../../../types/contentful'
export type MenuItem = TypeMenuItemFields

export const MENU_COLLECTIONS = [
  'smallBitesCollection',
  'bigBitesCollection',
  'dessertsCollection',
  'drinksCollection',
]

export const MENU_IMAGES = [
  'smallBitesImages',
  'bigBitesImages',
  'dessertsImages',
  'drinksImages',
]

export type MenuCollectionsType = keyof Pick<
  TypeMenuFields,
  | 'bigBitesCollection'
  | 'dessertsCollection'
  | 'drinksCollection'
  | 'smallBitesCollection'
>

export type MenuImageType = keyof Pick<
  TypeMenuFields,
  'bigBitesImage' | 'dessertsImage' | 'drinksImage' | 'smallBitesImage'
>

export const MENU_SECTION_NAMES = {
  smallBitesCollection: 'SMALL BITES',
  bigBitesCollection: 'BIG BITES',
  dessertsCollection: 'DESSERT',
  drinksCollection: 'DRINKS',
} as const
