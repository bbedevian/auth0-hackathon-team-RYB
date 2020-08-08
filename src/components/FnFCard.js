import React from 'react';

const FnFCard = (props) => {
    let color = props.person.status
    return (
        <div>
            <p style={{color}}>(*)</p>
            <p>{props.person.name}</p>
        </div>
    );
}

export default FnFCard;
