import React, { useEffect, useState } from "react";

const LoadMoreButton = ({ url, limit }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async (url) => {
    try {
      setLoading(true);
      if (url !== "") {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        console.log(data.products);
        if (data) {
          setProducts(data.products);
          setLoading(false);
        }
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchProduct(url);
  }, [url]);

  if (loading) {
    return (
      <div>Please Wait While we are fetching your favourite products...</div>
    );
  }

  if (error !== null) {
    return <div>There is an error: {error}</div>;
  }

  return(
  <div>
    <div className="main-body">
      {products && products.length
        ? products.map((item, index) => (
            <div className="product-container" key={index}>
            <img 
             src={item.images}
             alt={item.title}
             className="product-img"
            />
              <div>{item.title}</div>
              <div>{item.availabilityStatus}</div>
              <div>{item.brand}</div>
              <div>{item.price}</div>
              
            </div>
          ))
        : null}
    </div>
    <button className="load-more-btn">Load More</button>
  </div>
  )
};

export default LoadMoreButton;
