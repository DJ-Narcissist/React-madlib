import React from "react";
import useInput from "./hook/useInput";

const NounForm = ({ onSubmit }) => {
  const nounInput = useInput('', 'Enter a noun');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nounInput.value);
    nounInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun">
        <input type="text" id="noun" placeholder={nounInput.placeholder} {...nounInput} />
      </label>
      <button type="submit">Submit Noun</button>
    </form>
  );
};

export default NounForm;
