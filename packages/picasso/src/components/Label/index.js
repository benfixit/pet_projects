import styled from 'styled-components';
import { color, typography } from 'styled-system';
import { themeGet } from '../../utils/theme';

const Label = styled.label`
  text-transform: capitalize;
  font-family: ${themeGet('fontFamily.primary')};
  ${color}
  ${typography}
`;

export default Label;
