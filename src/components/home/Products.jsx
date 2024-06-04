/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-serif text-center">Our Products</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
        {
          // eslint-disable-next-line react/prop-types
          data?.slice(0, 6)?.map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
      <div className=" flex justify-center m-1">
        <Link to={`/allshoes`} className="btn btn-outline btn-primary btn-sm">
          More
        </Link>
      </div>
    </div>
  );
};

export default Products;
