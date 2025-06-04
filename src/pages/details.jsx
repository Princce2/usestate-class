import React from 'react';
import { useState, useEffect } from 'react';
import UsersCard from '../components/userscard';

const Details = () => {
  
    const [details, setDetails] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                setDetails(data.users);
                setError(null);
            } catch (error) {
                setError(error.message || "An error occured"); 
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, []);

    console.log(details);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>
    }

    
return (
  <div>
    <div className="text-4xl font-bold text-center mt-2">
      <h1>Users profile</h1>
    </div>

    <div className="grid grid-cols-2 grid-rows-2 gap-30">
      {details.map((user) => (
        <div key={user.id}>
          <UsersCard
            name={user.firstName}
            lastname={user.lastName}
            maidenName={user.maidenName}
            age={user.age}
            email={user.email}
            phone={user.phone}
            gender={user.gender}
            birthdate={user.birthDate}
            image={user.image}
            username={user.username}
            role={user.role}
            ip={user.ip}
            macAddress={user.macAddress}
            university={user.university}
            address={user.address.address}
            weight={user.weight}
            height={user.height}
            hair={user.hair.color}
            ein={user.ein}
            crypto={user.crypto.coin}
            bloodgroup={user.bloodGroup}
            company={user.company.name}
          />
        </div>
      ))}
    </div>
  </div>
);
}


export default Details;