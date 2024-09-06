import { CharLength } from "./CharLength/CharLength";
import { GenerateBtn } from "./GenerateBtn/GenerateBtn";
import { LevelCategory } from "./LevelCategory/LevelCaterogy/LevelCategory";
import { Parameters } from "./Parameters/Parameters";
import "./passwordOptions.css";

interface Props {}

export const PasswordOptions = () => {
  return (
    <div className='options-container'>
      <CharLength />
      <Parameters />
      <LevelCategory />
      <GenerateBtn />
    </div>
  );
};
