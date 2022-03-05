import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'A',
  'B',
  'D',
  'E',
  'Ẹ',
  'F',
  'G',
  'GB',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'Ọ',
  'P',
  'R',
  'S',
  'Ṣ',
  'T',
  'U',
  'W',
  'Y',
  '-',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
