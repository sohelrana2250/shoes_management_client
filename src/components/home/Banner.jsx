import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-1/2">
        <div className="hero min-h-screen bg-[url('https://www.lesitedelasneaker.com/wp-content/images/2018/10/code-promo-nike-octobre-2018.jpg')]">
          <button
            onClick={() => navigate("/allshoes")}
            className=" mt-80  btn btn-outline  btn-md rounded-full bg-black  text-white"
          >
            Show Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
