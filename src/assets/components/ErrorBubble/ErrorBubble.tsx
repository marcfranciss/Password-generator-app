import { useEffect } from "react";
import { usePasswordContext } from "../../Context/PasswordContext";
import "./errorBubble.css";
export const ErrorBubble = () => {
  const { isError, errorText, setIsError, isCopied, setIsCopied, copyText } =
    usePasswordContext();

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 1800);
    }
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1800);
    }
  }, [isError, errorText, isCopied, copyText]);
  return (
    <div
      className={`error-bubble body-alpha ${
        (isError && "isError") || (isCopied && "isCopied")
      }`}>
      {(isError && (
        <>
          <span>❎</span>
          {errorText}
        </>
      )) ||
        (isCopied && (
          <>
            <svg
              // className='check-icon'
              width='14'
              height='12'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                stroke='#18171F'
                strokeWidth='3'
                fill='none'
                d='M1 5.607 4.393 9l8-8'
              />
            </svg>
            <strong>{copyText}</strong>
          </>
        ))}
    </div>
  );
};

export default ErrorBubble;
