import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Dummy product data (Replace this with API data)
const products = [
  { id: 1, name: "Jamdani Saree", category: "Women Clothing" },
  { id: 2, name: "Leather Shoes", category: "Shoes" },
  { id: 3, name: "Men's T-Shirt", category: "Men Clothing" },
  { id: 4, name: "Women's Handbag", category: "Accessories" },
];

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (query) {
      // Filter products based on search query
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {filteredProducts.length > 0 ? (
        <ul className="space-y-4">
          {filteredProducts.map((product) => (
            <li key={product.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
