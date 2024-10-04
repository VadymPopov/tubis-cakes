'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Card {
  slug: string;
  image: string;
  name: string;
}

interface ICardProps {
  card: Card;
}

export default function Card({ card }: ICardProps) {
  const { slug, image, name } = card;

  return (
    <li>
      <div className="h-72 relative border-transparent rounded-2xl overflow-hidden shadow-lg shadow-accentColor group">
        <Link href={`/cards/${slug}`}>
          {image && (
            <Image
              src={image}
              alt={name}
              width={600}
              height={380}
              className="object-cover w-full h-60  transition-transform duration-500 group-hover:scale-110"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 text-center px-3 py-4 bg-primary">
            <h3 className="uppercase tracking-[0.3rem] font-bold">{name}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
}
