import { CardProps } from '@/interfaces';

export const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 mb-6">
      {imageUrl && <img className="w-full h-48 object-cover mb-4" src={imageUrl} alt={title} />}
      <div className="text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
    </div>
  );
};
