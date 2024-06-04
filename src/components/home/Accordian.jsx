const Accordian = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        <a href="...">
          <img
            className="w-full h-full object-cover"
            src="https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/40eb689e-3cd1-4ef2-bcbe-49126a80d9b3/image.jpg"
            alt=""
          />
        </a>
        <a href="...">
          <img
            className="w-full h-full object-cover"
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-68424,resizemode-75,msid-95149641/top-trending-products/lifestyle/best-selling-shoes-for-women-from-adidas-bata-campus-and-skechers.jpg"
            alt=""
          />
        </a>
        <a href="...">
          <img
            className="w-full h-full object-cover"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5cf8be44-5418-46e1-996e-deb09074a3c6/club-fleece-set-younger-2-piece-set-4kfNMg.png"
            alt=""
          />
        </a>
      </div>

      <br />
      <div className="hero  ">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-black">NEW ARRIVALS</h1>
            <p className="mb-5 text-xl  text-black">
              Futuring the Air Force 1 Pro Tech{" "}
            </p>
            <button
              onClick={() => navigate("/allshoes")}
              className="  btn btn-outline  btn-md rounded-xl bg-black  text-white"
            >
              SHOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
