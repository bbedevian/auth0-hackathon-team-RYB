import React from 'react';
import {connect} from 'react-redux'

// needs to determine if user has an event in progress, and if so, instead of displaying the message
// displays the current event and a big red button to end event

const NewActivityBox = (props) => {
    const {activities, currentUser} = props
    let myActivities = activities.filter(event => event.user_id === currentUser.id)
    let status = false
    myActivities.forEach(event => {if (event.status === 'active') status = true})
    return (
        <div className='new-activity-box'>
            {status ? 
            <button>End Event</button>
            :
            <p>
            Let people know where youre going and how long you expect to stay out
            </p>
            }
        </div>
    );
}

const msp = (state) => {
    return {
        activities: state.activities,
        currentUser: state.currentUser
    }
}

export default connect(msp)(NewActivityBox);
