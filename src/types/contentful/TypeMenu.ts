import { TypeMenuItemFields } from '.'
export interface TypeMenuFields {
  menuName: string
  bigBitesCollection: { items: TypeMenuItemFields[] }
  bigBitesImage: { url: string }
  smallBitesCollection: { items: TypeMenuItemFields[] }
  smallBitesImage: { url: string }
  dessertsCollection: { items: TypeMenuItemFields[] }
  dessertsImage: { url: string }
  drinksCollection: { items: TypeMenuItemFields[] }
  drinksImage: { url: string }
}
