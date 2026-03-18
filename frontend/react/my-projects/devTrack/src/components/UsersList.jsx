import { useState } from "react";

function UsersList (){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    return (
        <div>
            <h2>Users List</h2>
        </div>
    );
}

export default UsersList;