import { useEffect, useState } from "react";
import { usePasswordContext } from "../../../Context/PasswordContext";
import "./parameters.css";

export const Parameters = () => {
  const [isUppercase, setIsUppercase] = useState<boolean>(false);
  const [isLowercase, setIsLowercase] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isSymbol, setIsSymbol] = useState<boolean>(false);
  const { setParamVal } = usePasswordContext();

  useEffect(() => {
    const parametersUpdate = {
      uppercase: isUppercase,
      lowercase: isLowercase,
      numbers: isNumber,
      symbols: isSymbol,
    };
    setTimeout(() => {
      setParamVal(parametersUpdate);
    }, 300);
  }, [isUppercase, isLowercase, isNumber, isSymbol]);
  return (
    <div className='parameters-container'>
      <label htmlFor='uppercase' className='param-text body-alpha'>
        <input
          type='checkbox'
          name='uppercase'
          id='uppercase'
          value='uppercase'
          onChange={() => setIsUppercase(!isUppercase)}
        />
        Include Uppercase Letters
      </label>
      <label htmlFor='lowercase' className='param-text body-alpha'>
        <input
          type='checkbox'
          name='lowercase'
          id='lowercase'
          value='lowercase'
          onChange={() => setIsLowercase(!isLowercase)}
        />
        Include Lowercase Letters
      </label>
      <label htmlFor='number' className='param-text body-alpha'>
        <input
          type='checkbox'
          name='number'
          id='number'
          value='numbers'
          onChange={() => setIsNumber(!isNumber)}
        />
        Include Numbers
      </label>
      <label htmlFor='symbol' className='param-text body-alpha'>
        <input
          type='checkbox'
          name=''
          id='symbol'
          value='symbol'
          onChange={() => setIsSymbol(!isSymbol)}
        />
        Include Symbols
      </label>
    </div>
  );
};
