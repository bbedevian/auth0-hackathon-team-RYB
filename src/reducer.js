let initialState = {
    currentUser: null
}

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
        default: 
            return {...prevState}
    }
} 