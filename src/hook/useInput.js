import { useState } from "react";

const useInput = (initialValue, placeholder) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue('');
    };

    return {
        value, 
        placeholder,
        onChange: handleChange,
        reset,
    };
};

export default useInput;