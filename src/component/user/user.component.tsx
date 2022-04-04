/* eslint-disable */
import React, {useState, useEffect} from 'react'
import UserService from "../../service/user.service";
import User from "../../entity/user2";

function UserComponent() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        UserService.getAll().then((result) => {
            setUsers(result)
        })
    }, [])


    return (
        <div>

            {users.map((user, index) => <p key={index}>{user.username}</p>
            )}


        </div>
    )
}

export default UserComponent
