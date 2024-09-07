import { useState } from "react";
import "./generateBtn.css";
import { generateRandomString } from "../../../utils/randomizer";
import { usePasswordContext } from "../../../Context/PasswordContext";
export const GenerateBtn = () => {
  const [animate, setAnimate] = useState(false);
  const { charVal, paramVal, setGeneratedPassword, setIsError, setErrorText } =
    usePasswordContext();

  const handleGenerateBtn = () => {
    setAnimate(true);
    setTimeout(function () {
      setAnimate(false);
      const resultPassword = generateRandomString(charVal, paramVal);
      console.log(generateRandomString(charVal, paramVal));
      if (resultPassword === "error") {
        setIsError(true);
        setErrorText("Incorrect character lenght.");
      } else if (resultPassword === "paramError") {
        setIsError(true);
        setErrorText("At least one option must be selected");
      } else {
        setGeneratedPassword(resultPassword);
      }
    }, 2500);
  };
  return (
    <button
      className={`generate-btn ${animate ? "animate" : ""}`}
      onClick={handleGenerateBtn}>
      GENERATE{" "}
      <svg
        className='btn-icon'
        width='12'
        height='12'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fill='#24232C'
          d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z'
        />
      </svg>
    </button>
  );
};
