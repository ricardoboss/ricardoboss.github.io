import type { PillType } from '~/models/PillType'

export default interface TimelineItem {
  title: string
  description?: string
  from: string
  to?: string
  link?: string
  pills?: PillType[]
  minor?: boolean
}
