import React from "react";

import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "./ErrorPage";
import { GrStatusGood } from "react-icons/gr";
import PutAction from "../FatchAction/PutAction";
import { useQuery } from "@tanstack/react-query";

const AllUser = () => {
  // const { data, isLoading, error, refetch } = AllGetAction(
  //   `${import.meta.env.VITE_Server_Url}/users/alluserdata`
  // );
  //all-user
  const token = localStorage.getItem("token");
  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_Server_Url}/users/alluserdata`,
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res?.json();
        return data;
      } catch (error) {
        toast.error(`Failed to fetch reviews: ${error?.message}`);
      }
    },
  });

  const handleAdminToggle = (id, role) => {
    const chnageStatus = role === "user" ? { role: "admin" } : { role: "user" };
    PutAction(
      `${import.meta.env.VITE_Server_Url}/user/status/${id}`,
      chnageStatus,
      refetch
    );
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3"> Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Admin</th>
                  <th className="px-4 py-3">Password</th>
                  <th className="px-4 py-3">CreateAt</th>
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  data?.map((v, index) => {
                    return (
                      <tr key={index} className="text-gray-700">
                        <td className="px-4 py-3 border">
                          <div className="flex items-center text-sm">
                            <div className="relative w-16 h-16 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={
                                  v?.photo
                                    ? v?.photo
                                    : "https://community.fabric.microsoft.com/t5/image/serverpage/image-id/813578i64726DCE0B971C89?v=v2"
                                }
                                alt=""
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <p className="font-semibold text-black">
                                {v?.name}
                              </p>
                              <p className="text-xs text-gray-600">{v?.role}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border">
                          {v?.name}
                        </td>
                        <td className="px-4 py-3 text-xs border">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                            {v?.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm border">{v?.email}</td>

                        <td className="px-4 py-3 text-xs border">
                          {v?.role === "admin" ? (
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              Admin
                            </span>
                          ) : (
                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                              {v?.role}
                            </span>
                          )}
                        </td>

                        <td className="px-4 py-3 text-ms font-semibold border">
                          <button
                            onClick={() => handleAdminToggle(v?._id, v?.role)}
                            className={`${
                              v?.role === "admin"
                                ? "bg-green-500"
                                : "bg-red-500"
                            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                          >
                            {v?.role ? (
                              <GrStatusGood className="text-xl text-green-700" />
                            ) : (
                              <GrStatusGood />
                            )}
                          </button>
                        </td>

                        <td className="px-4 py-3 text-ms font-semibold border">
                          {v?.createAt}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllUser;
