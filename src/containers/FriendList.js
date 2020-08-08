import React from 'react'
import { getUserFamily, getUserFriend } from '../request'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


//Family and friend list, also show status 
//Maybe: red: crowded place, green: home, yellow: safe place?
export default class FriendList extends React.Component {

    state = {
        friend: null,
        family: null
    }

    //where to store current user's id? assume it's given by parent component

    componentDidMount() {
        getUserFamily(this.props.user_id)
        .then(res => this.setState({
            family: res.data
        }))

        getUserFriend(this.props.user_id)
        .then(res => this.setState({
            friend: res.data
        }))
    }

    renderList = (hash) => {
        

    }

    render() {
        return(
            <div>
                {this.state.family ? this.renderList(this.state.family): null}
                {this.state.friend ? this.renderList(this.state.friend): null}
            </div>
        )
    }
}