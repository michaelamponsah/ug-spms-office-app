import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import InputField from "./InputField";

const AppGlobalFilter = ({ filter, setFilter }) => {
  const handleChange = (enteredInput) => {
    setFilter(enteredInput);
  };
  return (
    <div>
      <InputField
        type="search"
        placeholder="Search..."
        value={filter}
        onInputChange={handleChange}
      />
    </div>
  );
};

export default AppGlobalFilter;
