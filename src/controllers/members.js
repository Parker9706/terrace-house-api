import parseData from "../helpers/parseData.js";
import parseName from "../helpers/parseName.js";

export const findAllMembers = async () => {
  const data = await parseData('members');
  return data;
};

export const findAMember = async (name) => {
  const data = await parseData('members');
  const formattedName = await parseName(name);
  let result = 'Member not found';
  console.log(formattedName);
  data.forEach((member) => {
    if (member['name'] === formattedName) result = member;
  });
  return result;
};

