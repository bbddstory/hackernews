/** 
  * @desc A single news entry with title, number of comments,
  * points, publisher and time elapsed since publishing
  * @author Leon Li bbddstory@live.com
  */
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { getItem } from '../../api/news.api';
import timeAgo from '../../utils/timeAgo';
import { IItem, ITEM_INIT } from '../Item/Item';
import { NewsSubTextWrap } from './news.style';

export interface INewsProps {
  index?: number, // an index number showing in front of the title
  itemId: number
}

export const NewsComp: React.FC<INewsProps> = ({ index, itemId }) => {
  const [news, setNews] = useState<IItem>(ITEM_INIT);
  const elapsedTime: string = timeAgo(news.time);

  // Fetching a single news item
  useEffect(() => {
    if (!news.id) {
      getItem(itemId).then((res: IItem) => {
        res && setNews(res)
      });
    }
  }, [news, itemId]);

  return (
    <>
      {index && <h4>{index}.&nbsp;</h4>}
      <div className="content is-small">
        <a href={news.url} target="_blank" rel="noopener noreferrer" title="Open link in a new tab">
          <h4>{news.title}</h4>
        </a>
        <NewsSubTextWrap>
          <span>
            <Link to={`/comments/${itemId}`}>{news.descendants} comments</Link>
          </span>|
          <span>
            {news.score}{news.score > 1 ? ' points' : ' point'} by {news.by}
          </span>|
          <span>
            {elapsedTime}
          </span>
        </NewsSubTextWrap>
      </div>
    </>
  );
};

const News = React.memo(NewsComp);

export default News;
