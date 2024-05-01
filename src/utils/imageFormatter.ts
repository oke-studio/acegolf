export const ImageURLFormatter = (imgUrl: string, imgType?: string) => {
  switch (imgType) {
    case 'image/png':
      return imgUrl + '?fm=webp'
    case 'image/jpg':
      return imgUrl + '?fm=webp'
    case 'image/jpeg':
      return imgUrl + '?fm=webp'
    case 'video/mp4':
      return imgUrl + '?fm=webm'
    default:
      return imgUrl
  }
}
