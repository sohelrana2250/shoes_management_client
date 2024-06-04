import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { _id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="avatar">
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-serif">#Brand:{brand}</h3>
        <h3 className="text-xl font-serif">#Price{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm btn-outline">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
