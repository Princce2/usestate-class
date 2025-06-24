import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const SingleUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserById = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const user = await response.json();
            console.log(user);
            setUser(user)
        } catch (error) {
            console.error(error);
            setError(error.message || "An error occurred while fetching user data");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserById();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <FaSpinner className="animate-spin text-4xl" />
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500 text-3xl">Error: {error.message}</p>;
    }
    return (
        <div>
            <h1>Single User for ID {id}</h1>

            <div>
                <h1>{`${user.firstName} ${user.lastName}`}</h1>
            </div>
        </div>
    )
}

export default SingleUser;