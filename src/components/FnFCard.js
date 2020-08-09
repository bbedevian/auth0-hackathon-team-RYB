import React from 'react';

const FnFCard = (props) => {
    let color = props.person.status
    return (
        <div className='fnf-card'>
            <p style={{color}}>(*)</p>
            <p>{props.person.name}</p>
            {props.pending ? <button>Accept</button>: null}
        </div>
    );
}

export default FnFCard;
