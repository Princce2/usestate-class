import { useState, useEffect } from "react";

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // asynchronus function
    // An asynchronous function is a function that allows code to keep running while waiting for a task to complete,
    // such as fetching data from an API. It uses the `async` keyword before the function declaration
    // and can use `await` to pause execution until a promise is resolved.

    // A promise is an object that represents the eventual completion (or failure) of an asynchronous operation

    // Javascipt is a single threaded language, meaning it can only do one thing at a time.

    const fetchPosts = async () => {
        // try-catch block is used to handle errors that may occur during the execution of asynchronous code.
        try {
            const response = await fetch("https://dummyjson.com/posts");
            const data = await response.json();
            console.log(data)
            setPosts(data.posts)
        } catch (error) {
            console.error(error)
            setError(error.message || "An error occurred while fetching posts");
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchPosts();
    }, []); // dependency array

   console.log(posts);

    if (error) {
        return <p className="text-red-500 text-3xl">Error: {error}</p>;
    }

    if (loading) {
        return <p className="text-blue-500 text-3xl text-center">Loading...</p>;
    }

    return (
        <>
            <h1>Posts</h1>

            <div className="grid grid-cols-3 gap-4 px-8">
                {posts.map((post) => (
                    <div key={post.id} className="border border-gray-200 p-4 rounded-lg shadow-md bg-purple-50">
                        <h2 className="text-xl font-bold text-green-500">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <p className="text-sm text-gray-500">Author: {post.userId}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Post;