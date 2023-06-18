import parseData from "../helpers/parseData.js";
import parseName from "../helpers/parseName.js";

export const findAllMembers = async () => {
  const data = await parseData('members');
  return data;
};

export const findSpecificMembersBasedOnCriteria = async (searchTerm) => {
  const data = await parseData('members');
  // Find a specific member
  if (searchTerm.indexOf('+') > 0) {
    const memberResults = [];
    const parsedSearchTerm = await parseName(searchTerm);
    data.forEach((member) => {
      if (member.name === parsedSearchTerm) memberResults.push(member);
    });
    return memberResults;
  }
  // Find all members from a series
  const seriesKeys = { 
    'bxg': 'Boys x Girls Next Door',
    'b&g': 'Boys & Girls in the City',
    'aloha': 'Aloha State',
    'ond': 'Opening New Doors',
    'tokyo': 'Tokyo 2019-2020' 
  };
  if (searchTerm in seriesKeys) {
    const chosenSeries = seriesKeys[searchTerm];
    const seriesResults = [];
    data.forEach((member) => {
      if (member.series === chosenSeries) seriesResults.push(member);
    });
    return seriesResults;
  }
  // General Query
  const lowercaseSearchTerm = searchTerm.toLowerCase();
  const results = data.filter((object) => {
    const lowercaseName = object.name.toLowerCase();
    const lowercaseNickname = object.nickname.map((nickname) =>
      nickname.toLowerCase()
    );
    return (
      lowercaseName.includes(lowercaseSearchTerm) ||
      lowercaseNickname.includes(lowercaseSearchTerm)
    );
  });
  return results;
};

