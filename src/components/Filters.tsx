import React from "react";
import styled from "styled-components";

interface FiltersProps {
  onFilterChange: (type: string, value: string) => void;
  activeFilters: {
    type?: string;
    color?: string;
    size?: string;
  };
}

const FilterSection = styled.div`
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.active ? "linear-gradient(to right, #4a69e1, #1da1f2)" : "#fff"};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: 1px solid #e5e5e5;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Filters: React.FC<FiltersProps> = ({ onFilterChange, activeFilters }) => {
  const types = ["Running", "Basketball", "Training", "Lifestyle"];
  const colors = ["Black", "White", "Blue", "Red"];
  const sizes = ["40", "41", "42", "43", "44", "45"];

  return (
    <div className="p-4">
      <FilterSection>
        <FilterTitle>Type</FilterTitle>
        <div className="flex flex-wrap">
          {types.map((type) => (
            <FilterButton
              key={type}
              active={activeFilters.type === type}
              onClick={() => onFilterChange("type", type)}
            >
              {type}
            </FilterButton>
          ))}
        </div>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Color</FilterTitle>
        <div className="flex flex-wrap">
          {colors.map((color) => (
            <FilterButton
              key={color}
              active={activeFilters.color === color}
              onClick={() => onFilterChange("color", color)}
            >
              {color}
            </FilterButton>
          ))}
        </div>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Size</FilterTitle>
        <div className="flex flex-wrap">
          {sizes.map((size) => (
            <FilterButton
              key={size}
              active={activeFilters.size === size}
              onClick={() => onFilterChange("size", size)}
            >
              {size}
            </FilterButton>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default Filters;
