import toast from "react-hot-toast";
import { TypeOfImage } from "../utilites/ExtentionType";
import GenerateImage from "../FatchAction/GenerateImage";
import PostAction from "../FatchAction/PostAction";

const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = Number(form.price.value);
    const description = form.description.value;
    let image = form.photo.files[0];

    if (TypeOfImage.includes(image?.name?.split(".")?.pop()?.toLowerCase())) {
      image = await GenerateImage(image);
      const data = { title, brand, price, description, image_url: image };
      PostAction(`${import.meta.env.VITE_Server_Url}/shoes`, data);
      form.reset();
    } else {
      toast.error("png,jpg,jpeg accespted Onter Types Not Accespted");
    }
  };

  return (
    <>
      <div className="flex justify-center  items-center">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-serif  uppercase lg:text-2xl sm:text-sm">
                Add To Product
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 md:grid-cols-1"
            >
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                placeholder="Title"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="brand"
                placeholder="Brand"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                name="price"
                placeholder="Price"
                required
              />
              <div className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  maxLength={150}
                  id="description"
                  rows="6"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Details Message"
                  required
                ></textarea>
              </div>

              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="release_date"
                defaultValue={new Date().toString()}
                readOnly
                placeholder="Release Date"
              />

              <div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 "
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="photo"
                        className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a Photo</span>
                        <input
                          id="photo"
                          name="photo"
                          required
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1 ">or drag and drop</p>
                    </div>
                    <p className="text-xs ">PNG, JPG, GIF up to 800kb</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  className="btn btn-outline bg-blue-900 text-white "
                >
                  Add product
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-gray-400">
                    5555 Tailwind RD, Pleasant Grove, UT 73533
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: 01722305054</p>
                  <p className="text-gray-400">Fax: F1001-F2000-F100</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="..."
                  target="_blank"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a
                  href="...."
                  target="_blank"
                  className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i className="fab fa-linkedin-in text-blue-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a pizza"
            href="...."
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src=""
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
