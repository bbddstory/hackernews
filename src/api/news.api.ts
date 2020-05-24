import axios from "axios";

// Hacker News public API version 0
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
// Path for fetching the IDs of the top 500 news
export const topNewsUrl = `${baseUrl}topstories.json`;
// Path for fetching a single news/comment (item)
export const newsUrl = `${baseUrl}item/`;

/**
  * @desc Function for fetching the IDs of the top 500 news
  * @param number $limiter - the number of news IDs returned
  * @return array - an array of news IDs
  */
export const getTopNews = async (limiter: number): Promise<number[]> => {
  let topNewsIds = await axios
    .get(topNewsUrl)
    .then(({ data }) => data);

  if (topNewsIds.length > limiter) {
    topNewsIds = topNewsIds.slice(0, limiter);
  }

  return topNewsIds;
};

/**
  * @desc Function for fetching a single news/comment item
  * @param number $newsId - item ID
  * @return item - a single news/comment item
  */
 export const getItem = async (newsId: number): Promise<any> => {
  const item = await axios
    .get(`${newsUrl}${newsId}.json`)
    .then(({ data }) => data);

  return item;
};
