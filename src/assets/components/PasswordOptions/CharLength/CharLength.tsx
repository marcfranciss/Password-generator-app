import "./charLength.css";
import { usePasswordContext } from "../../../Context/PasswordContext";
import { ChangeEvent } from "react";

export const CharLength = () => {
  const { charVal, setCharVal } = usePasswordContext();
  return (
    <div className='char-len-container'>
      <div className='char-container'>
        <h3 className='char-text body-alpha'>Character Length</h3>
        <span className='char-num heading-alpha'>{charVal}</span>
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
