export interface Service {
  name: string;
  price: string;
  summary: string;
  includes: readonly string[];
}

export const services: readonly Service[] = [
  {
    name: 'Existing beat licence',
    price: 'A$40',
    summary: 'Licence one of my available beats for your own release.',
    includes: ['WAV instrumental', 'Non-exclusive licence', 'Clear credit and usage terms'],
  },
  {
    name: 'Custom beat',
    price: 'A$120',
    summary: 'A new EDM or pop instrumental built around your references and direction.',
    includes: ['Arrangement and sound design', 'One revision', 'WAV + stems'],
  },
  {
    name: 'Mixing',
    price: 'A$80',
    summary: 'Send me your stems and I’ll turn them into a cleaner, more balanced mix.',
    includes: ['Levels, EQ and compression', 'Basic stereo master', 'One revision'],
  },
  {
    name: 'Full song production',
    price: 'A$250',
    summary: 'Turn a voice memo, demo or vocal recording into a complete EDM or pop track.',
    includes: ['Production and arrangement', 'Mixing + basic master', 'Two revisions + WAV and stems'],
  },
];
