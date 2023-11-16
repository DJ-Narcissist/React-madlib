import React from "react";
import useInput from "./hook/useInput";

const VerbForm = ({ onSubmit }) => {
  const verbInput = useInput('', 'Enter a verb');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(verbInput.value);
    verbInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="verb">
        <input type="text" id="verb" placeholder={verbInput.placeholder} {...verbInput} />
      </label>
      <button type="submit">Submit Verb</button>
    </form>
  );
};

export default VerbForm;
