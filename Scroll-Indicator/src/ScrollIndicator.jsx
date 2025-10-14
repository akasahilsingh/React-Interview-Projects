import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://dummyjson.com/products?limit=1000&skip=0&select=title,price"
      );
      const data = await response.json();
      console.log(data.products);
      setProducts(data.products);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setError(true);
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    console.log(
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const scrollArea = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scrollArea / height) * 100);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("scroll percentage is: ", scrollPercentage);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (error !== null) {
    return <p>`Some error occured: ${error}`</p>;
  }

  if (loading) {
    return (
      <p style={{ margin: "50px" }}>
        Please wait while we are fetching products
      </p>
    );
  }

  return (
    <div className="container">
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-bar-container">
          <div
            className="scroll-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {products && products.length
        ? products.map((item) => (
            <p className="product-container" key={item.id}>
              {item.title}
            </p>
          ))
        : null}
    </div>
  );
};

export default ScrollIndicator;
