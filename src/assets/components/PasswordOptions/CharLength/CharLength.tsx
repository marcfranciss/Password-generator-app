import "./charLength.css";
import { usePasswordContext } from "../../../Context/PasswordContext";
import { ChangeEvent, useState } from "react";

export const CharLength = () => {
  const { charVal, setCharVal } = usePasswordContext();
  const [rangeVal, setRangeVal] = useState<number>(0);

  const style = {
    "--min": 0,
    "--max": 20,
    "--val": rangeVal,
  } as React.CSSProperties;

  // useEffect(() => {
  //   const rangeInput = document.querySelector("[type=range]");
  //   document.documentElement.style.setProperty("--val", rangeVal.toString());
  // }, [rangeVal]);
  const handleRange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCharVal(Number(value));
    setRangeVal(+value);
  };
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
        onChange={handleRange}
        style={style}
      />
    </div>
  );
};
