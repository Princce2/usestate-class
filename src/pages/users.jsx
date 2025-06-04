import { useState, useEffect } from "react";

const User = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            // console.log(data);
            setUsers(data.users);
            setError(null);
          } catch (error) {
            console.error(error);
            setError(error.message || "An error occurred");
          } finally {
            setLoading(false);
          }
        };

        fetchUsers();
    }, [])
    // console.log(users)

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Users</h1>
            <p>Users Page</p>

            {users.map((user) => (
                <div>
                    <h2>{user.firstName}</h2>
                    <h2>{user.lastName}</h2>
                    <h2>{user.email}</h2>
                </div>
            ))}
        </div>
    )
}

export default User;