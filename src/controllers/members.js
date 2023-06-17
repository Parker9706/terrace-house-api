import parseData from "../helpers/parseData.js";
import parseName from "../helpers/parseName.js";

export const findAllMembers = async () => {
  const data = await parseData('members');
  return data;
};

export const searchForAMember = async (name) => {
  if (name.length > 12) throw error();
  const data = await parseData('members');
  
  let result = 'Member not found';
  data.forEach((member) => {
    if (member['name'] === formattedName) result = member;
  });
  return result;
};

