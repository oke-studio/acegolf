export interface TypePromotionFields {
  promotionTitle: string
  effectiveDateStart: string
  effectiveDateEnd: string
  sevenRoomsPromotionCode?: number
  slugId: string
  promotionPoster: {
    description: string
    title: string
    url: string
  }
}

// export type TypePromotion = Entry<TypePromotionFields>;
