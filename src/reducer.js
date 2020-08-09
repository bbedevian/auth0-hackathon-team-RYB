let initialState = {
    currentUser: null,
    connections: [{name: 'yueying', relationship:'friend', status: 'green', accepted: true},
    {name: 'rob', relationship: 'friend', status: 'yellow', accepted: true}, 
    {name: 'jenny', relationship: 'family', status: 'green', accepted: true}, 
    {name: 'danny', relationship: 'friend', status: 'red', accepted: false}],
    myActivities: [],
    reviewModal:{
        open: false
    },
    addConnectionModal:{
        open:false
    },
}

// connections will be fetched from the self ref upon app loading 
// and filtered by those matching current user ID from our store
// we can then match the connections ID to all users to pull only the names, relationship, id, and status 
// which will be set in out store

// example of how to structure async redux functions 

// export const fetchUsers = () => dispatch => {
//     fetch(`http://localhost:3000/users`)
//       .then(resp => resp.json())
//       .then(users => {
//           dispatch({type: 'FETCH_USERS', payload: {users}})
//       })
// }


export const reducer = (prevState=initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return {...prevState, users: action.payload.users}
        case 'SET_USER':
            return {...prevState, currentUser: action.payload.user}
        case 'ADD_CONNECTION':
            return {...prevState, nameSearch: action.payload.nameSearch}
        case 'SHOW_REVIEW_FORM':
            return{...prevState, reviewModal:{open: action.payload.open}}
        case 'SHOW_CONNECTION_FORM':
            return{...prevState, addConnectionModal:{open: action.payload.open}}
        default: 
            return {...prevState}
    }
} 