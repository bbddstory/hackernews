/** 
  * @desc A comment list that contains comments on a new item
  * @author Leon Li bbddstory@live.com
  */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { getItem } from '../../api/news.api';
import { IItem, ITEM_INIT } from '../Item/Item';
import News from '../News/News';
import Comment from '../Comment/Comment';
import { Logo, PanelBlock } from '../common.style';
import { TopCommentsHeading } from '../Comment/comment.style';

export interface ICommentsListProps extends RouteComponentProps {
  itemId?: number;
}

export const CommentsListComp: React.FC<ICommentsListProps> = ({ itemId = 0 }) => {
  const COMMENT_LIMITER = 20;
  const [news, setNews] = useState<IItem>(ITEM_INIT);
  const [itemIds, setItemIds] = useState<number[]>([]);

  // Fetch the news item again for it could have been updated
  useEffect(() => {
    if (!news.id) {
      getItem(itemId).then(res => {
        if (res) {
          setNews(res);
          // Get the array of comment IDs (kids) from the newly fetched news item
          setItemIds((res.kids || []).slice(0, COMMENT_LIMITER));
        }
      });
    }
  }, [news, itemId]);

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <nav className="panel">
          <TopCommentsHeading className="panel-heading">
            <Link to={`/`} title="Go back to Top Stories">
              <Logo>Y</Logo>
              Top {COMMENT_LIMITER} Comments
            </Link>
          </TopCommentsHeading>
          <PanelBlock className="panel-block">
            <News itemId={itemId} />
          </PanelBlock>
          {itemIds.map((value: number) => {
            return (
              <Comment key={value} itemId={value} />
            )
          })}
        </nav>
      </div>
    </div>
  );
}

const CommentsList = React.memo(CommentsListComp);

export default CommentsList;
