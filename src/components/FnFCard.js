import React from 'react';
import {connect} from 'react-redux'

const FnFCard = (props) => {

    const {person, activities, pending} = props
    let events = activities.filter(act => act.user_id === person.id)
    let active = false
    // next line protects from a user with no events logged
    if (events.length > 0) {
        events.forEach(event => {if (event.status === 'active') active = event})
    }
    let color = active ? 'yellow' : 'green'
    let today = new Date();
    console.log('today :>> ', today.getHours(), today.getMinutes());
    return (
        <div className='fnf-card'>
            <p style={{color}}>(*)</p>
            <p>{person.name}</p>
            {pending ? <button>Accept</button>: null}
        </div>
    );
}

const msp = (state) => {
    return {
        activities: state.activities
    }
}

export default connect(msp)(FnFCard);
