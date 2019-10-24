import styled from 'styled-components';
import { color, typography, border } from 'styled-system';
import { themeGet } from '../../utils/theme';

const Label = styled.label`
  display: flex;
  cursor: pointer;
  text-transform: capitalize;
  font-family: ${themeGet('fontFamily.primary')};
  margin-bottom: 10px;
  ${color}
  ${typography}
  ${border}
`;

export default Label;
