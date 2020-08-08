import React from 'react'
import FriendList from './FriendList'


//includes friends container, activity container, log activity, to-do container

//somewhere to add friend/family member via email address?
export default class Dashboard extends React.Component {



    render() {
        return(
            <div>
                This is Dashboard
                <FriendList />
            </div>
        )
    }
}