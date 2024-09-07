import { useEffect, useState } from "react";
import { usePasswordContext } from "../../Context/PasswordContext";
import "./errorBubble.css";
export const ErrorBubble = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const { isError, errorText, setIsError } = usePasswordContext();

  useEffect(() => {
    if (isError) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setIsError(false);
      }, 2300);
    }
  }, [isError, errorText]);
  return (
    <div className={`error-bubble ${showError && "isError"}`}>{errorText}</div>
  );
};

export default ErrorBubble;
