import fs from 'fs';

const parseData = (requestedCollection) => {
  const basePath = './src/data/';
  const fileMap = {
    membersEng: "en/people/members.json",
    commentatorsEng: "null",
    seriesEng: "null",
    quotesEng: "en/quotes/quotes.json",
    membersJp: "null",
    commentatorsJp: "null",
    seriesJp: "null",
    quotesJp: "null"
  };
  const path = basePath + fileMap[requestedCollection];
  try {
    const jsonData = fs.readFileSync(path, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
};
  
export default parseData;