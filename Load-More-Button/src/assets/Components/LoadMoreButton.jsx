import React, { use, useEffect, useState } from "react";

const LoadMoreButton = ({ url, limit }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const fetchProduct = async (url) => {
    try {
      setLoading(true);
      if (url !== "") {
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const data = await response.json();

        console.log(data.products);
        if (data) {
          setProducts((prevData) => [...prevData, ...data.products]);
          setLoading(false);
        }
        console.log(data.products);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchProduct(url);
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return (
      <div>Please Wait While we are fetching your favourite products...</div>
    );
  }

  if (error !== null) {
    return <div>There is an error: {error}</div>;
  }

  return (
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
                <h3>{item.title}</h3>
                <p>{item.availabilityStatus}</p>
                <h4>{item.brand}</h4>
                <h5>{item.price}</h5>
              </div>
            ))
          : null}
      </div>

      <button
        className="load-more-btn"
        disabled={disable}
        onClick={() => setCount(count + 1)}
      >
        {disable ? "You have reached to the end of the product" : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
