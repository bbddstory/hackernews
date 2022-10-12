/**
 * Styled components for Comments
 */

import styled from 'styled-components';
import { commentsListHeading,  itemSubText, baseMargin } from '../constants.style';

export const TopCommentsHeading = styled.p`
  a {
    color: ${commentsListHeading};
  }
`;

export const CommentSubTextWrap = styled.p`
  color: ${itemSubText};
  margin-bottom: ${baseMargin} !important;
`;

export const CommentText = styled.div`
  overflow-wrap: break-word;
  white-space: initial;
  word-wrap: break-word;
  word-break: break-all;
  
  pre {
    white-space: initial;
  }
`
