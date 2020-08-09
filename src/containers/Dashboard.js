import React from 'react';
import FnFList from './FnFList';
import NewActivityBox from '../components/NewActivityBox';
import ActivityFeed from './ActivityFeed';
import AddConnection from '../components/AddConnection/AddConnection';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <FnFList/>
            <div>
                <NewActivityBox/>
                <ActivityFeed/>
                <AddConnection/>
            </div>
        </div>
    );
}

export default Dashboard;
