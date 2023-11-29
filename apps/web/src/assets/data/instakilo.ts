import { generateImage } from 'helpers';

type InstakiloPost = {
  id: number;
  author: string;
  profile: ReturnType<typeof generateImage>;
  text: string;
  image: ReturnType<typeof generateImage>;
};

export const instakiloPosts: InstakiloPost[] = [
  {
    id: 1,
    author: 'tobbie92',
    profile: generateImage('portrait', { width: 32, height: 32 }),
    text: 'Percy turned 2 today ...',
    image: generateImage('cat'),
  },
  {
    id: 2,
    author: '_bellaboo',
    profile: generateImage('light-portrait', { width: 32, height: 32 }),
    text: 'Selfie time!',
    image: generateImage('selfie'),
  },
  {
    id: 3,
    author: 'melliemel1',
    profile: generateImage('profile-picture', { width: 32, height: 32 }),
    text: 'Food is life 🍔',
    image: generateImage('food'),
  },
  {
    id: 4,
    author: 'steeeeve',
    profile: generateImage('mirror-picture', { width: 32, height: 32 }),
    text: 'Visiting Berlin for the weekend 🇩🇪',
    image: generateImage('city'),
  },
  {
    id: 5,
    author: 'annabellabilly',
    profile: generateImage('face-picture', { width: 32, height: 32 }),
    text: 'Nature is beautiful 🌲',
    image: generateImage('nature'),
  },
  {
    id: 6,
    author: 'ricemuffin',
    profile: generateImage('muffin', { width: 32, height: 32 }),
    text: 'I knoooow, I post to often lol',
    image: generateImage('mirror-selfie'),
  },
  {
    id: 7,
    author: '_asparagustav_',
    profile: generateImage('man-in-a-suit', { width: 32, height: 32 }),
    text: 'Reading a book 📖',
    image: generateImage('book'),
  },
  {
    id: 8,
    author: 'yungcoffee',
    profile: generateImage('coffee-bean', { width: 32, height: 32 }),
    text: 'Espresso, cappuccino, latte.',
    image: generateImage('coffee'),
  },
  {
    id: 9,
    author: 'photoartofficial',
    profile: generateImage('photograph', { width: 32, height: 32 }),
    text: 'Portrait of a friend, love you @johndoe',
    image: generateImage('portrait'),
  },
  {
    id: 10,
    author: 'johndoe',
    profile: generateImage('john', { width: 32, height: 32 }),
    text: 'Canyon in the desert',
    image: generateImage('canyon'),
  },
  {
    id: 11,
    author: 'justiciaaaa',
    profile: generateImage('woman', { width: 32, height: 32 }),
    text: 'Modeling for a friend',
    image: generateImage('model'),
  },
  {
    id: 12,
    author: 'serendipity',
    profile: generateImage('rose', { width: 32, height: 32 }),
    text: 'Selling my car, DM me if interested',
    image: generateImage('car'),
  },
];
