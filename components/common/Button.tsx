import { ButtonProps } from '@/interfaces';

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonClass = variant === 'primary' 
    ? 'bg-blue-500 hover:bg-blue-700 text-white' 
    : 'bg-gray-500 hover:bg-gray-700 text-white';
  
  return (
    <button 
      className={`py-2 px-4 rounded ${buttonClass}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};
