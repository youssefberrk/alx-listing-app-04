// components/common/Pill.tsx
import React from 'react';

interface PillProps {
  label: string;
  onClick: (label: string) => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`px-4 py-2 rounded-full text-white border-2 font-semibold 
        ${active ? 'bg-blue-500 border-blue-500' : 'bg-gray-500 border-gray-500'}`}
    >
      {label}
    </button>
  );
};

export default Pill;
