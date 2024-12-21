
import React, { useState } from 'react';
import Pill from './Pill';

const filters = [
  'Top Villa',
  'Self Checkin',
  'Beachfront',
  'Mountain View',
  'Luxury',
  'Free Parking',
  'Pet Friendly',
  'Private Pool'
];

const FilterSection: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    if (activeFilters.includes(filter)) {
      // If the filter is already active, remove it
      setActiveFilters(activeFilters.filter((activeFilter) => activeFilter !== filter));
    } else {
      // Otherwise, add it to active filters
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          onClick={handleFilterClick}
          active={activeFilters.includes(filter)}
        />
      ))}
    </div>
  );
};

export default FilterSection;
