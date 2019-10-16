import styled from 'styled-components';
import { flexbox, minWidth } from 'styled-system';

const DivGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  padding: 10px;
  align-items: flex-start;
  ${flexbox}
  ${minWidth}
`;

export default DivGroup;
