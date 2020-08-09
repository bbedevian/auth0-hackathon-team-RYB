import React from 'react';
import {connect} from 'react-redux'
import ActivityCard from '../components/ActivityCard';

const ActivityFeed = (props) => {
    const {activities} = props
    let number = activities.length
    let completed = activities.filter(activity => activity.status === 'completed')
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
