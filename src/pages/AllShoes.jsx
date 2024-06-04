import React, { useState } from "react";
import Products from "../components/home/Products";
import AllGetAction from "../FatchAction/AllGetAction";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "./ErrorPage";
import SingleProduct from "../components/SingleProduct";

const AllShoes = () => {
  const { data, error, isLoading } = AllGetAction(
    `${import.meta.env.VITE_Server_Url}/shoes`
  );

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorPage />;
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container mx-auto p-6 font-mono">
        <div className="flex items-center justify-center">
          <select
            name="brand"
            onChange={handleFilterChange}
            className="rounded-l-xl bg-pink-500 h-14"
          >
            <option disabled={true} value="">
              Brand Name
            </option>
            <option value="">All</option>
            {data?.map((v, index) => (
              <option key={index} value={v?.brand}>
                {v?.brand}
              </option>
            ))}
          </select>
          <select
            name="price"
            onChange={handleFilterChange}
            className="rounded-r-sm bg-pink-500 h-14"
          >
            <option disabled={true} value="">
              Price Range
            </option>
            <option value="">All</option>
            {data?.map((v, index) => (
              <option key={index} value={v?.price}>
                {v?.price}
              </option>
            ))}
          </select>
          <input
            type="search"
            id="default-search"
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 bg-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Find User Product / Product Name"
            required
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
        {!isLoading &&
          data
            ?.filter((shoe) => {
              const matchedSearch =
                search === "" ||
                shoe?.title?.toLowerCase()?.includes(search?.toLowerCase());
              const matchedBrand =
                filters.brand === "" ||
                shoe?.brand?.toLowerCase() === filters?.brand?.toLowerCase();
              const matchedPrice =
                filters.price === "" || shoe?.price === Number(filters?.price);
              return matchedSearch && matchedBrand && matchedPrice;
            })
            .map((shoe) => <SingleProduct key={shoe.id} shoe={shoe} />)}
      </div>
    </>
  );
};

export default AllShoes;
