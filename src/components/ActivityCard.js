import React from 'react';
import {connect} from 'react-redux'

const ActivityCard = (props) => {
    const {connections, activity, locations} = props
    let person = connections.find(connection => connection.id === activity.user_id).name
    let location = locations.find(location => location.id === activity.location_id).name
    return (
        <div className='activity-card'>
            <p>{person} at {location}</p>
            <p>event feedback placeholder</p>
        </div>
    );
}
const msp = (state) => {
    return {
        connections: state.connections,
        locations: state.locations
    }
}

export default connect(msp)(ActivityCard);
