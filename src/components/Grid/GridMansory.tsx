// components/MasonryGrid.tsx
import { Card } from '../Cards/CardMessage';

const data = [
  {
    image: '/images/pfp-echimine.png',
    name: 'Eliott',
    description: 'Montage vidéo & dev web',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },
  {
    image: '/images/pfp-echimine.png',
    name: 'Padmé',
    description: 'Fan de Star Wars',
  },

  // Ajoute plus de cartes ici...
];

export const GridNormal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};
