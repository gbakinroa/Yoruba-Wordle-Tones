import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'à',
  'a',
  'á',
  'b',
  'd',
  'è',
  'e',
  'é',
  'ẹ̀',
  'ẹ',
  'ẹ́',
  'f',
  'g',
  'gb',
  'h',
  'ì',
  'i',
  'í'
  'j',
  'k',
  'l',
  'm̀',
  'm',
  'm̄',
  'ḿ',
  'ǹ',
  'n',
  'n̄',
  'ń',
  'ò',
  'o',
  'ó',
  'ọ̀',
  'ọ',
  'ọ́',
  'p',
  'r',
  's',
  'ṣ',
  't',
  'ù',
  'u',
  'ú',
  'w',
  'y',
  '-',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
