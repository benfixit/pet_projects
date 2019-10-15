import React from 'react';
// import Picasso from '@benfixit/picasso'
import {
  NumberValue,
  BooleanValue,
  ArrayValue,
  createBooleanValue
} from 'react-values';
import styled from 'styled-components';
import { v4 } from 'uuid';

// const Counter = () => {
//     return (
//         <NumberValue defaultValue={0}>
//             {({ value, increment, decrement }) => (
//                 <div>
//                     <button onClick={() => increment()}>+1</button>
//                     <span>{value}</span>
//                     <button onClick={() => decrement()}>-1</button>
//                 </div>
//             )}
//         </NumberValue>
//     );
// }

const Track = styled.div`
  position: relative;
  height: 25px;
  width: 50px;
  background-color: ${props => (props.on ? 'lightgreen' : 'lightgray')};
  border-radius: 12px;
  cursor: pointer;
`;

const Thumb = styled.div`
  position: absolute;
  left: ${props => (props.on ? '26px' : '1px')};
  transition: all 0.25s;
  height: 23px;
  width: 23px;
  top: 1px;
  background-color: white;
  border-radius: 12px;
`;

// const handleChange = () => {
//     console.log('Learning React Values')
// }

{
  /* <ModalOpenedValue>
                {({ toggle }) => <button onClick={toggle}>Open Modal</button>}
            </ModalOpenedValue>
            <ModalOpenedValue>
                {({ value, toggle }) =>
                value && (
                    <div>
                        <h1>Now Showing!!!</h1>
                        <button onClick={toggle}>Close</button>
                    </div>
                )
                }
            </ModalOpenedValue> */
}

class ToggleOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { on } = this.state;
    this.setState({
      on: !on
    });
  }

  render() {
    const { on } = this.state;
    return (
      <>
        <Track on={on} onClick={this.handleClick}>
          <Thumb on={on} />
        </Track>
      </>
    );
  }
}

// const { Button } = Picasso;

// const ModalOpenedValue = createBooleanValue();

const Input = styled.input`
  size: ${props => props.size || '1em'};
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${props => props.size || '1em'};
  padding: ${props => props.size || '1em'};
`;

class Pane extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            onClick: this.props.onClick
          });
        })}
      </div>
    );
  }
}

const Paragraph = styled.p`
  color: red;
`;

// const Elem = () => {
//   return (
//     <ArrayValue defaultValue={[20, 39, 45]}>
//       {({ value }) => {
//         return value.map(elem => <h2 key={elem} onClick={handleClick}>{elem}</h2>);
//       }}
//     </ArrayValue>
//   );
// };

// class App extends React.Component {
//   render() {
//     const { handleClick } = this;
//     return (
//       <div>
//         <ArrayValue defaultValue={[true, false, true]}>
//           {({ value, set }) => {
//             return value.map((elem, i) => (
//               <h2
//                 key={v4()}
//                 onClick={() => {
//                   const newArr = value.map((elem, index) => {
//                     return index !== i ? 0 : elem;
//                   });
//                   if (!newArr[i]) {
//                     newArr[i] = true;
//                   }
//                   set(newArr);
//                 }}
//               >
//                 {elem ? 'Yes' : 'No'}
//               </h2>
//             ));
//           }}
//         </ArrayValue>
//       </div>
//     );
//   }
// }

// export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       numbers: [1, 2, 3]
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event, i) {
//     const { numbers } = this.state;
//     const newNums = [
//       ...numbers.slice(0, i),
//       numbers[i] * 2,
//       ...numbers.slice(i + 1)
//     ];
//     // const newNumbers = [...numbers];
//     // newNumbers[i] = newNumbers[i] * 2;
//     this.setState({
//       numbers: newNums
//     });
//   }

//   render() {
//     const { numbers } = this.state;
//     return (
//       <div>
//         <h1>Welcome Home, Picasso</h1>
//         {numbers.map((num, i) => {
//           return (
//             <h3 key={num} onClick={event => this.handleClick(event, i)}>
//               {num}
//             </h3>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default App;

const Toggle = props => (
  <BooleanValue {...props}>
    {({ value, toggle }) => (
      <Track on={value} onClick={toggle}>
        <Thumb on={value} />
      </Track>
    )}
  </BooleanValue>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome Home, Picasso</h1>
        {/* <Pane onClick={this.handleClick.bind(this)}>
            <Paragraph>Welcome Here!</Paragraph>
            <Paragraph>Welcome Here two!</Paragraph>
            <Paragraph>Welcome Here three!</Paragraph>
          </Pane>
          <Input placeholder="A small text input" type="password" />
          <br /> */}
        <Input placeholder="A bigger text input" size="2em" type="password" />
        <Toggle
          value={this.state.on}
          defaultValue
          onChange={value => this.setState({ on: value })}
        />
      </div>
    );
  }
}

export default App;
