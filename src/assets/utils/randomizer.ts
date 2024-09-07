const getRandomUppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z
  }
  
const getRandomLowercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // a-z
  }
  
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // 0-9
  }
  
const getRandomSymbol = () => {
    const symbols = "!@#$%^&*()_+[]{}<>?/|~"; // Define the symbol set
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  /* Randomizer function for all selected parameters*/
const getRandomChar = (params: any) => {
    const randomizerFns = [];

    if (params.uppercase) randomizerFns.push(getRandomUppercase)
    if (params.lowercase) randomizerFns.push(getRandomLowercase)
    if (params.numbers) randomizerFns.push(getRandomNumber)
    if (params.symbols) randomizerFns.push(getRandomSymbol)

        if (randomizerFns.length === 0) {
            throw new Error("At least one param must be selected")}
        
    const randomFunction = randomizerFns[Math.floor(Math.random() * randomizerFns.length)];

  return randomFunction();// Randomly pick one of the functions to call
}
export const generateRandomString = (length: number, params: any) => {
    let result = "";
    const checkParamVal = Object.values(params).filter(
      (val) => val === true)

    if (length < 1) { return 'error' }
    if (checkParamVal.length < 1) {return 'paramError'}


    for (let i = 0; i < length; i++) {
      result += getRandomChar(params);
    }
    return result;
  }
