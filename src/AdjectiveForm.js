import React from "react";
import useInput from "./hook/useInput";

const AdjectiveForm = ({ onSubmit }) => {
  const adjectiveInput = useInput('', 'Enter an adjective');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(adjectiveInput.value);
    adjectiveInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="adjective">
        <input
          type="text"
          id="adjective"
          placeholder={adjectiveInput.placeholder}
          {...adjectiveInput}
        />
      </label>
      <button type="submit">Submit Adjective</button>
    </form>
  );
};

export default AdjectiveForm;
