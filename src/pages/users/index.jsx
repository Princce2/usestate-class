import { useState, useEffect } from "react";
import UsersCard from "../../components/userscard";

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
          <UsersCard
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.firstName}
            lastname={user.lastName}
            maideName={user.maidenName}
            age={user.age}
            email={user.email}
            phone={user.phone}
            address={`${user.address.address}, ${user.address.city}, ${user.address.state}`}
            gender={user.gender}
            birthdate={user.birthDate}
            username={user.username}
            role={user.company.title}
            ip={user.ip}
            macAddress={user.macAddress}
            university={user.university}
            weight={user.weight}
            height={user.height}
            hair={`${user.hair.color} - ${user.hair.type}`}
            ein={user.ein}
            crypto={user.crypto.currency}
            bloodgroup={user.bloodGroup}
            company={user.company.name}
          />
        ))}
      </div>
    );
}

export default User;
