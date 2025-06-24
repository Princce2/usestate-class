import { useState, useEffect } from "react";
import ProductCard from "../../components/productcard";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProduct(data.products);
        setError(null);
      } catch (error) {
        setError(error.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  console.log(product);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product</h1>
      <p>Product Page</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-4">
        {product.map((product) => (
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <h2>{product.title}</h2>
            <h2>{product.description}</h2>
            <h2>{product.price}</h2>

            <Link
              to={`/products/${product.id}`}
              className="bg-green-500 px-3 py-2.5 text-sm rounded-md text-white hover:bg-green-600 mt-4 inline-block"
            >
              See product details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Product;
