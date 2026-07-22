export interface Service {
  name: string;
  price: string;
  summary: string;
  includes: readonly string[];
}

export const services: readonly Service[] = [
  {
    name: 'Beat licence',
    price: 'A$40',
    summary: 'Choose an available instrumental and get it ready for your release.',
    includes: ['High-quality WAV', 'Non-exclusive usage terms', 'Credit guidance'],
  },
  {
    name: 'Custom instrumental',
    price: 'A$150',
    summary: 'An original instrumental shaped around your references, voice and direction.',
    includes: ['Production to your brief', 'One revision round', 'WAV + instrumental export'],
  },
  {
    name: 'Mix & polish',
    price: 'A$80',
    summary: 'Bring clarity, movement and release-ready impact to one finished arrangement.',
    includes: ['Balance, EQ and dynamics', 'Stereo polish', 'One revision round'],
  },
  {
    name: 'Full production',
    price: 'A$250',
    summary: 'Take a voice memo, demo or rough idea through arrangement and final production.',
    includes: ['Arrangement + sound design', 'Two review rounds', 'Final WAV export'],
  },
];
