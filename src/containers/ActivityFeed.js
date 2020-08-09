import React from 'react';
import {connect} from 'react-redux'
import ActivityCard from '../components/ActivityCard';

const ActivityFeed = (props) => {
    const {connections, activities} = props
    let number = activities.length
    let connectIDs = connections.map(connection => connection.id)
    let completed = activities.filter(activity => activity.status === 'completed')
    // let connectionActivities = needs to filter eventual list of all activities to only those from your connections
    // this may also happen earlier in app
    console.log('connectIDs :>> ', connectIDs);
    return (
        <div>
            <h5>Activity Feed</h5>
            <p>there are currently {number} activities in the db total</p>
            <p>completed activities</p>
            {completed.map(activity => <ActivityCard key={activity.id} activity={activity}/>)}
        </div>
    );
}
const msp = (state) => {
    return {
        connections: state.connections,
        activities: state.activities
    }
}

export default connect(msp)(ActivityFeed);
