import { homeData as en } from './en';
import { homeData as jp } from './jp';
import { homeData as sg } from './sg';

export function getMockData(locale: string) {
  switch (locale) {
    case 'jp':
      return jp;
    case 'sg':
      return sg;
    case 'en':
    default:
      return en;
  }
}
