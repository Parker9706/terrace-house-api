import parseData from "../helpers/parseData.js";

export const findAnEpisode = async (language) => {
  const data = await parseData('episodes');
  return data;
};

export const findAllEpisodesFromASeries = async (language) => {
  const data = await parseData('episodes', language);
  
}

