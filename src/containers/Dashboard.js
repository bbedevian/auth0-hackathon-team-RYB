import React from 'react';
import FnFList from './FnFList';
import NewActivityBox from '../components/NewActivityBox';
import ActivityFeed from './ActivityFeed';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <FnFList/>
            <div>
                <NewActivityBox/>
                <ActivityFeed/>
            </div>
        </div>
    );
}

export default Dashboard;
