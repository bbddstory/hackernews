/** 
  * @desc A single comment entry with publisher, time elapsed
  * since publishing and the content of the comment
  * @author Leon Li bbddstory@live.com
  */
import React, { useEffect, useState } from 'react';
import { IItem, ITEM_INIT } from '../Item/Item';
import { PanelBlock } from '../common.style';
import { getItem } from '../../api/news.api';
import { CommentSubTextWrap, CommentText } from './comment.style';
import timeAgo from '../../utils/timeAgo';

export interface ICommentProps {
  itemId?: number
}

export const CommentComp: React.FC<ICommentProps> = ({ itemId = 0 }) => {
  const [comment, setComment] = useState<IItem>(ITEM_INIT);
  const publishTime = timeAgo(comment.time);

  // Fetch the comment using the item ID
  useEffect(() => {
    if (!comment.id) {
      getItem(itemId).then((res: IItem) => {
        res && setComment(res)
      });
    }
  }, [comment, itemId]);

  if (comment.deleted || comment.dead) {
    return null
  } else {
    return (
      <PanelBlock className="panel-block">
        <div className="content is-small">
          <CommentSubTextWrap>
            <span>{comment.by}</span>
            <span>{publishTime}</span>
          </CommentSubTextWrap>
          <CommentText dangerouslySetInnerHTML={{ __html: `${comment.text}` }} />
        </div>
      </PanelBlock>
    );
  }
};

const Comment = React.memo(CommentComp);

export default Comment;
