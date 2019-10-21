import styled from 'styled-components';
import { flexbox, minWidth, border, padding } from 'styled-system';
import { themeGet } from '../../utils/theme';

const DivGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  padding: 10px;
  align-items: flex-start;
  font-family: ${themeGet('fontFamily.primary')};
  ${flexbox}
  ${minWidth}
  ${border}
  ${padding}
`;

export default DivGroup;
