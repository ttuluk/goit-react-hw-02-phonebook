import React from "react";

const Filter = ({ nameFilter, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={nameFilter}
        onChange={onChangeFilter}
      />
    </label>
  );
};
export default Filter;
