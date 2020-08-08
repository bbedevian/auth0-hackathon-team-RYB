import axios from "axios";

const baseURL = "http://localhost:3000";
const handleError = err => console.error(err);

//Friends & family 
//get list

//current user's family list, given the user's id
export const getUserFamily = (user_id) => {
    return axios.get(`${baseURL}/family/${user_id}`)
    .catch(handleError);
}

export const getUserFriend = (user_id) => {
    return axios.get(`${baseURL}/friend/${user_id}`)
    .catch(handleError);
}


