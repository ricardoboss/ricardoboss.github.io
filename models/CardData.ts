import type CardLinkData from '~/models/CardLinkData'
import type { PillType } from '~/models/PillType'

export default interface CardData {
  image?: string
  imagePadding?: string
  imageMaxHeight?: string
  title: string
  description: string
  links?: CardLinkData[]
  pills?: PillType[]
}
