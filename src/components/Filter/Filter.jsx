import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filterSlice';
import { useState } from 'react';
import { FilterLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = e => {
    const value = e.target.value;
    setFilterValue(value);

    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <StyledInput
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Contact Name"
      />
    </FilterLabel>
  );
};
