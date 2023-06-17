import fs from 'fs';

const parseData = (requestedCollection, language) => {
  const basePath = './src/data/';
  const englishMap = {
    members: "en/people/members.json",
    commentators: "null",
    series: "null",
    quotes: "en/quotes/quotes.json",
  };
  const japaneseMap = {
    members: "null",
    commentators: "null",
    series: "null",
    quotes: "jp/quotes/quotes.json"
  };
  let path;
  if (language === 'jp') path = basePath + japaneseMap[requestedCollection];
  else path = basePath + englishMap[requestedCollection];
  try {
    const jsonData = fs.readFileSync(path, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
};
  
export default parseData;