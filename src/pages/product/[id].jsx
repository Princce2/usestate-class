import { useParams } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProductById = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Product not found');
            }
            const product = await response.json();
            setProduct(product);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProductById();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <FaSpinner className="animate-spin text-4xl" />
            </div>
        )
    }

    if (error) {
        return <p className="text-red-500 text-3xl">Error: {error.message}</p>;
    }
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8">
            <div>
                <img src={product.thumbnail} alt={product.title} className="w-full h-auto object-cover" />
            </div>
            <div>
                <h1 className='text-4xl '>{product.title}</h1>
                <p className='text-gray-700 mt-2'>{product.description}</p>
            </div>
        </div>
      </>
    );
}

export default SingleProduct;