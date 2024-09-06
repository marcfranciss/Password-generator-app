import "./charLength.css";
import { usePasswordContext } from "../../../Context/PasswordContext";
import { ChangeEvent } from "react";

export const CharLength = () => {
  const { charVal, setCharVal } = usePasswordContext();
  const handleCharInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regEx = /[^0-9]+/g;
    const cleanedVal = value.replace(regEx, "");
    setCharVal(Number(cleanedVal));
  };
  return (
    <div className='char-len-container'>
      <div className='char-container'>
        <h3 className='char-text body-alpha'>Character Length</h3>
        <input
          type='text'
          placeholder='0'
          min={0}
          max={20}
          step={1}
          className='char-num heading-alpha'
          value={charVal}
          onChange={handleCharInput}
        />
      </div>
      <input
        type='range'
        name='char-range'
        id='char-range'
        min={0}
        max={20}
        value={charVal}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCharVal(Number(e.target.value))
        }
      />
    </div>
  );
};
