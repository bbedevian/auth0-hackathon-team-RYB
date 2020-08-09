let initialState = {
    currentUser: {id: 1, name: 'paul', email: 'paul@gmail.com'},
    connections: [{id: 3, name: 'yueying', relationship:'friend', status: 'green', accepted: true},
    {id: 4, name: 'rob', relationship: 'friend', status: 'yellow', accepted: true}, 
    {id: 5, name: 'jenny', relationship: 'family', status: 'green', accepted: true},
    {id: 6, name: 'danny', relationship: 'friend', status: 'green', accepted: false}],
    activities: [
    {id: 1, user_id: 5, location_id: 1, status: 'completed', start: '9:00', end: '10:30'},
    {id: 2, user_id: 3, location_id: 2, status: 'completed', start: '10:00', end: '10:30'},
    {id: 3, user_id: 4, location_id: 3, status: 'completed', start: '10:00', end: '10:30'},
    {id: 4, user_id: 5, location_id: 4, status: 'completed', start: '11:00', end: '12:30'},
    {id: 5, user_id: 5, location_id: 2, status: 'active', start: '1:00', end: '2:30'},
    {id: 6, user_id: 4, location_id: 1, status: 'active', start: '2:00', end: '3:30'},
    {id: 7, user_id: 1, location_id: 5, status: 'active', start: '2:00', end: '2:30'},
    {id: 8, user_id: 3, location_id: 6, status: 'active', start: '1:00', end: '3:30'},
    ],
    locations: [{id: 1, name: 'whole foods'}, {id: 2, name: 'CVS'},
    {id: 3, name: 'Dos Toros'},{id: 4, name: 'Hummus Kitchen'},
    {id: 5, name: 'subway'},{id: 6, name: 'bubble tea store'},]
}

// connections will be fetched from the self ref upon app loading 
// and filtered by those containint current user ID from our store
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

//to populate out events we will need to filter all events by each of our connections ids? 


export const reducer = (prevState=initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return {...prevState, users: action.payload.users}
        case 'SET_USER':
            return {...prevState, currentUser: action.payload.user}
        case 'ADD_CONNECTION':
            return {...prevState, nameSearch: action.payload.nameSearch}
        default: 
            return {...prevState}
    }
} 