import React, { PureComponent, Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import Weight from './Weight'

const StyledTable = styled.table`
    
`;

class WeightList extends PureComponent {
    clearList = () => {
        const { weightStore } = this.props;
        weightStore.clearWeightData();
    }

    render() {
        const { weightStore } = this.props
        return (
            <Fragment>
                <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {weightStore.weightList.map((weight, index) => <Weight key={index} data={weight} />)}
                </tbody>
            </table>
                <p>
                    <span>
                        Max. weight so far {weightStore.maxWeight}
                    </span>
                    <br />
                    <button onClick={this.clearList}>Clear List</button>
                </p>
            </Fragment>
        )
    }
}

export default inject('weightStore')(observer(WeightList))
