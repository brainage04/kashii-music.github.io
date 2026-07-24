export interface Service {
  id: string;
  name: string;
  price: string;
  summary: string;
  includes: readonly string[];
  action: string;
  sample: {
    label: string;
    url: string;
  };
}

export const services: readonly Service[] = [
  {
    id: 'beat-licence',
    name: 'Existing beat licence',
    price: '$40',
    summary: 'Licence one of my available beats for your own release.',
    includes: ['WAV instrumental', 'Non-exclusive licence', 'Clear credit and usage terms'],
    action: 'Ask about a beat licence',
    sample: {
      label: 'Hear Time Collapse',
      url: 'https://soundcloud.com/kashii-981036167/time-collapse',
    },
  },
  {
    id: 'custom-beat',
    name: 'Custom beat',
    price: '$120',
    summary: 'A new EDM or pop instrumental built around your references and direction.',
    includes: ['Arrangement and sound design', 'One revision', 'WAV + stems'],
    action: 'Request a custom beat',
    sample: {
      label: 'Hear star****',
      url: 'https://soundcloud.com/kashii-981036167/star',
    },
  },
  {
    id: 'mixing',
    name: 'Mixing',
    price: '$80',
    summary: 'Send me your stems and I’ll turn them into a cleaner, more balanced mix.',
    includes: ['Levels, EQ and compression', 'Basic stereo master', 'One revision'],
    action: 'Ask about mixing',
    sample: {
      label: 'Hear i_need_u',
      url: 'https://soundcloud.com/kashii-981036167/i-need-uuuuuuuuuuuuuuuuuu',
    },
  },
  {
    id: 'full-production',
    name: 'Full song production',
    price: '$250',
    summary: 'Turn a voice memo, demo or vocal recording into a complete EDM or pop track.',
    includes: ['Production and arrangement', 'Mixing + basic master', 'Two revisions + WAV and stems'],
    action: 'Request full production',
    sample: {
      label: 'Hear Time Collapse',
      url: 'https://soundcloud.com/kashii-981036167/time-collapse',
    },
  },
];
