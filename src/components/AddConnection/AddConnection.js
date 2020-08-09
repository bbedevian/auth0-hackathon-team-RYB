import React, { useState } from 'react'
import { connect } from 'react-redux'

const AddConnection = (props) => {
   console.log(props)
   const friends = [
      {name: 'brett'},
      {name: 'bob'},
      {name: 'yueying'},
   ]
   const [nameSearch, setNameSearch] = useState('')

   const handleSubmit = (e, name) => {
      e.preventDefault();
      console.log(name)
   }
   const filteredFriends = nameSearch !== ""? friends.filter(friend => friend.name.includes(nameSearch)):null

   return(
      <div>
         <form onSubmit={(e) => handleSubmit(e, 'brett')} >
            <label>Find your FRIEND</label>
            <input  onChange={(e) => setNameSearch(e.target.value)} type="search" name="connectionSearch" placeholder="username"/>
            {nameSearch !== ""? filteredFriends.map(friend =>
               <div>{friend.name}</div>
            ): null}
            <button onClick={() => setNameSearch()}>Request Connection</button>
            <button onClick={() => props.showAddFriendForm(props.modalShow)}>Close</button>
         </form>
      </div>
         
   )
} 
const mapDispatchToProps = dispatch => {
   return {
      onSearchName: (name) => dispatch({type:'ADD_CONNECTION', payload: {nameSearch: name }}),
      showAddFriendForm: (modalShow) => dispatch({type: 'SHOW_CONNECTION_FORM', payload:{open: !modalShow}})
   }
}
const mapStateToProps = state => {
   return {
      nameSearch: state.nameSearch
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddConnection)