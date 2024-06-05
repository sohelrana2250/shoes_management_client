import React from "react";
import AllGetAction from "../FatchAction/AllGetAction";
import { BiCategory } from "react-icons/bi";
import { BsSubtract } from "react-icons/bs";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "./ErrorPage";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Legend,
  Bar,
} from "recharts";
import AllUser from "./AllUser";
const Dashboard = () => {
  const { data, isLoading, error } = AllGetAction(
    `${import.meta.env.VITE_Server_Url}/dashboard/items`
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <section>
        <div id="main" className="main-content flex-1 ">
          <div className="bg-gray-800 pt-3">
            <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
              <h1 className="font-bold pl-2">Analytics</h1>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-pink-600">
                      <BiCategory className="text-3xl" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h2 className="font-bold uppercase text-gray-600">
                      Total User :{data?.totalUserCount}
                    </h2>
                    <p className="font-bold text-3xl"></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-yellow-600">
                      <BsSubtract className="text-3xl" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h2 className="font-bold uppercase text-gray-600">
                      Total Product
                    </h2>
                    <p className="font-bold text-3xl">
                      {data?.totalProductCount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data?.allshoes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="price" />
            <YAxis />

            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#0ee832" />
            <Bar dataKey="brand" fill="#9a13d4" />
            <Bar dataKey="title" fill="#eb6abe" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default Dashboard;
