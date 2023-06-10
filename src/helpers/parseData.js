import fs from 'fs';

const parseData = (requestedCollection) => {
  const basePath = './src/data/';
  const fileMap = {
    members: "en/people/members.json",
    commentators: "null",
    series: "null",
    quotes: "en/quotes/quotes.json"
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