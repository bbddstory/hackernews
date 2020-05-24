export interface IItem {
  id: number, // The item's unique id
  deleted?: true, // true if the item is deleted
  type?: "job" | "story" | "comment" | "poll" | "pollopt",
  by: string, // The username of the item's author
  time: number, // Creation date of the item, in Unix Time
  text: string, // The comment, story or poll text, HTML
  dead?: true, // true if the item is dead
  parent: number, // The comment's parent: either another comment or the relevant story
  poll: number, // The pollopt's associated poll
  kids: number[], // The ids of the item's comments, in ranked display order
  url: string, // The URL of the story
  score: number, // The story's score, or the votes for a pollopt
  title: string, // The title of the story, poll or job, HTML
  parts: number[], //	A list of related pollopts, in display order
  descendants: number // In the case of stories or polls, the total comment count
};

export const ITEM_INIT: IItem = {
  id: 0,
  by: "user",
  time: 0,
  text: "Loading...",
  parent: 0,
  poll: 0,
  kids: [],
  url: '#',
  score: 0,
  title: 'Loading...',
  parts: [],
  descendants: 0
};