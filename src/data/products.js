import catImage from '../assets/images/cat@2x.png'

const product = [
  {
    id: 1,
    name: 'Нямушка',
    tagline: 'Сказочное заморское яство',
    flavors: {
      foieGras: {
        flavorName: 'с фуа-гра',
        flavorDescription: 'Печень утки разварная с артишоками.',
        isAvailable: true,
      },
    },
    weight: 0.5,
    image: catImage,
  },
  {
    id: 2,
    name: 'Нямушка',
    tagline: 'Сказочное заморское яство',
    flavors: {
      foieGras: {
        flavorName: 'с рыбой',
        flavorDescription: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        isAvailable: true,
      },
    },
    weight: 2,
    image: catImage,
  },
  {
    id: 3,
    name: 'Нямушка',
    tagline: 'Сказочное заморское яство',
    flavors: {
      foieGras: {
        flavorName: 'с курой',
        flavorDescription: 'Филе из цыплят с трюфелями в бульоне.',
        isAvailable: false,
      },
    },
    weight: 5,
    image: catImage,
  },
]

export default product
