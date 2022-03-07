export const CONFIG = {
  tries: 9, // This changes how many tries you get to finish the wordle
  language: 'Yorùbá Wordle (beta version with tones)', // This changes the display name for your language
  wordLength: 5, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'Báyọ̀', // Put your name here so people know who made this Wordle!
  authorWebsite: 'https://github.com/gbakinroa/Yoruba-Wordle-Tones', // Put a link to your website or social media here
  wordListSource: 'Jẹ́ K\'Á Sọ Yorùbá, Jẹ́ K\'Á Ka Yorùbá àti Dictionnaire usuel yorùbá-français', // Describe the source material for your words here
  wordListSourceLink: 'https://yalebooks.yale.edu/book/9780300055900/je-ka-so-yoruba', // Put a link to the source material for your words here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: '', // You can use this if you use Google Analytics
  shuffle: false, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
  startDate: 'March 5, 2022 17:00:00', // what date and time to start your game from
  defaultLang: 'en', // the default interface language
  // TODO: Add Yoruba ("yo")
  availableLangs: ['en'], // the options available to the user for translation languages
}
