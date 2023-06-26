import React from "react";
import { useSelector } from "react-redux";

const UsersList = () =>{

    const users = useSelector((state)=>state.usersReducers)
    console.log(users)
    return (
        <div>

        </div>
    )
}

export default UsersList;