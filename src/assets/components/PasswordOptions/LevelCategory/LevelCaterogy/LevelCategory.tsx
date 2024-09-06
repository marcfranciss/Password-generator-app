import { useEffect, useState } from "react";
import "./levelCategory.css";
import { usePasswordContext } from "../../../../Context/PasswordContext";

export const LevelCategory = () => {
  const [dataLevel, setDataLevel] = useState<string>("tooWeak");
  const { paramVal, charVal } = usePasswordContext();

  useEffect(() => {
    const levelAnalyzer = () => {
      /* Will check if any of the checkboxes are checked */
      const checkParamVal = Object.values(paramVal).filter(
        (val) => val === true
      );
      /* Will count how may checkboxes are checked*/
      const paramsCount: number = checkParamVal.length;
      /* Will now measure the strenght of provided parametes */
      if (charVal <= 10) {
        setDataLevel("tooWeak");
      }
      if (charVal > 10) {
        if (paramsCount <= 1) {
          setDataLevel("tooWeak");
        }
        if (paramsCount == 2) {
          setDataLevel("weak");
        }
        if (paramsCount == 3) {
          setDataLevel("medium");
        }
        if (paramsCount == 4) {
          setDataLevel("strong");
        }
      }
    };
    levelAnalyzer();
  }, [paramVal, charVal]);
  return (
    <div className='level-category'>
      <span className='category-text body-alpha'>STRENGTH</span>
      <div className='levels-container'>
        <span className='level-text heading-beta' data-level={dataLevel}>
          {dataLevel == "tooWeak" ? "Too Weak" : dataLevel}
        </span>
        <div className='level-box'></div>
        <div className='level-box'></div>
        <div className='level-box'></div>
        <div className='level-box'></div>
      </div>
    </div>
  );
};
