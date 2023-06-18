import parseData from "../helpers/parseData.js";
import parseName from "../helpers/parseName.js";
import generateRandomNumber from '../helpers/generateRandomNumber.js';

export const getARandomQuote = async (language) => {
  const data = await parseData('quotes', language);
  const numberOfQuotes = data.length;
  const randomNumber = generateRandomNumber(numberOfQuotes);
  return data[randomNumber];
};

export const getQuotesByMember = async (name) => {
  const formattedName = parseName(name);
  const data = await parseData('quotes');
  let result = [];
  data.map((quote) => {
    if (quote['name'] === formattedName) result.push(quote);
  });
  if (result.length === 0) result.push('no quotes found');
  return result;
};