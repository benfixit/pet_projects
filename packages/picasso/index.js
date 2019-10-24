import Button from './src/components/Button';
import Toggle from './src/components/Toggle';
import CheckBox, { CheckBoxArray } from './src/components/CheckBox';
import Radio, { RadioButtonArray } from './src/components/Radio';
import Input, { UncontrolledInput } from './src/components/Input';
import TextArea, { UncontrolledTextArea } from './src/components/TextArea';
import ProgressBar from './src/components/ProgressBar';
import Label from './src/components/Label';
import DivGroup from './src/components/DivGroup';

// Theme and Utils
import theme from './src/theme';
import * as utils from './src/utils/index';

const Picasso = {
  Button,
  Toggle,
  CheckBox,
  CheckBoxArray,
  Radio,
  RadioButtonArray,
  Input,
  UncontrolledInput,
  TextArea,
  UncontrolledTextArea,
  ProgressBar,
  Label,
  DivGroup,
  utils,
  theme
};

export default Picasso;
