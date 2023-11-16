import React, { useState } from 'react';
import AdjectiveForm from './AdjectiveForm';
import NounForm from './NounForm';
import VerbForm from './VerbForm';

function App() {
  const [adjective, setAdjective] = useState('');
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');

  const handleAdjectiveSubmit = (adjective) => {
    setAdjective(adjective);
  };

  const handleNounSubmit = (noun) => {
    setNoun(noun);
  };

  const handleVerbSubmit = (verb) => {
    setVerb(verb);
  };

  return (
    <div className="App">
      <AdjectiveForm onSubmit={handleAdjectiveSubmit} />
      <NounForm onSubmit={handleNounSubmit} />
      <VerbForm onSubmit={handleVerbSubmit} />

      {/* Display the Mad Lib using the collected words */}
      <h2>Your Mad Lib:</h2>
      <p>{`Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} all day.`}</p>
    </div>
  );
}

export default App;
