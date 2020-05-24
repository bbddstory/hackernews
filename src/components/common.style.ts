/**
 * Shared styled components
 */

import styled from 'styled-components';
import { baseWhite, baseMargin, panelBlockHover } from './constants.style';

export const Logo = styled.span`
  display: inline-block;
  width: 1.25em;
  height: 1.25em;
  text-align: center;
  line-height: 1.25;
  color: ${baseWhite};
  border: 1px solid ${baseWhite};
  margin-right: ${baseMargin};
`

export const PanelBlock = styled.div`
  align-items: baseline;
  background-color: ${baseWhite};
  cursor: default !important;

  &:hover {
    background-color: ${panelBlockHover};
  }
`;
