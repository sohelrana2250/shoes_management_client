import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-96 object-cover" src={image_url} alt={title} />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">{brand}</p>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-700 font-bold text-xl">
            ${(price / 100).toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-400">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
