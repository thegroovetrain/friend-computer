import randInt from './randInt';

const randomCapitalLetterCharacterCode = ():number => randInt(65, 91);

const randomSector = ():string => String.fromCharCode(randomCapitalLetterCharacterCode(), randomCapitalLetterCharacterCode(), randomCapitalLetterCharacterCode());

export default randomSector;