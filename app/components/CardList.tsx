'use client';

import Card from './Card';

const cards = [
  {
    image: '/images/cupcake.jpg',
    slug: 'cupcake',
    name: 'Cupcake',
  },
  {
    image: '/images/main-cake.jpg',
    slug: 'cake',
    name: 'Cake',
  },
  {
    image: '/images/macaron.jpg',
    slug: 'macaron',
    name: 'Macaron',
  },
];

export default function CardList() {
  return (
    <ul className="mt-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-8">
      {cards.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </ul>
  );
}
