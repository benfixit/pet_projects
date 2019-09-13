import React from 'react'

const Weight = props => {
    const { data: { weight, date} } = props
    return (
        <tr>
            <td>{date}</td>
            <td>{weight}</td>
        </tr>
    )
}

export default Weight
