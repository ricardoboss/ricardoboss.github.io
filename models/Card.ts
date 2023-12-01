import type CardLink from '~/models/CardLink';
import type { Pill } from '~/models/Pill';

export default interface Card {
  title: string;
  description: string;
  links: CardLink[];
  pills: Pill[];
}
