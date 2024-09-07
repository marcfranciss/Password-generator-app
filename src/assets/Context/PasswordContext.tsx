import { createContext, ReactNode, useContext, useState } from "react";
interface ParameterValues {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

interface PasswordContextType {
  generatedPassword: string;
  setGeneratedPassword: (value: string) => void;
  charVal: number;
  setCharVal: (value: number) => void;
  paramVal: ParameterValues;
  setParamVal: (value: ParameterValues) => void;
  isError: boolean;
  setIsError: (value: boolean) => void;
  errorText: string;
  setErrorText: (value: string) => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(
  undefined
);

interface PasswordProviderProps {
  children: ReactNode;
}

export const PasswordProvider = ({ children }: PasswordProviderProps) => {
  const [generatedPassword, setGeneratedPassword] =
    useState<string>("P4$5W0rD!");
  const [charVal, setCharVal] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [paramVal, setParamVal] = useState<ParameterValues>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  return (
    <PasswordContext.Provider
      value={{
        generatedPassword,
        setGeneratedPassword,
        charVal,
        setCharVal,
        paramVal,
        setParamVal,
        isError,
        setIsError,
        errorText,
        setErrorText,
      }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordContext = () => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error(
      `usePasswordContext must be used within a PasswordProvider`
    );
  }
  return context;
};
