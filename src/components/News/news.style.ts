/**
 * Styled components for News
 */

import styled from 'styled-components';
import { itemSubText, baseMargin } from '../constants.style';

export const NewsSubTextWrap = styled.p`
  color: ${itemSubText};
  
  span {
    margin: 0 ${baseMargin};
  
    &:first-child {
      margin-left: 0;
    }
  }
`;
