import parseData from "../helpers/parseData.js";
import parseName from "../helpers/parseName.js";
import generateRandomNumber from '../helpers/generateRandomNumber.js';

export const getARandomQuote = async (language) => {
  const data = await parseData('quotes');
  const numberOfQuotes = data.length;
  const randomNumber = generateRandomNumber(numberOfQuotes);
  return data[randomNumber];
};

export const getQuoteByMember = async (name) => {
  const formattedName = parseName(name);
  const data = await parseData('quotes');
  let result = [];
  data.map((quote) => {
    if (quote['name'] === formattedName) result.push(quote);
  });
  if (result.length === 0) result.push('no quotes found');
  return result;
};

export const getASpecificQuote = async (id) => {
  const data = await parseData('quotes');
  let result = 'quote not found';
  data.map((quote) => {
    if (quote['id'] === id) result = quote;
  });
  return result;
};