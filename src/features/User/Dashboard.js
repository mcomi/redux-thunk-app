import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, fetchUserBytoken, clearState } from "./UserSlice";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }));
  }, []);

  const { username, email } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push("/login");
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem("token");

    history.push("/login");
  };

  return (
    <div className="">
      {isFetching ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>
          <header class="bg-white shadow">
            <div class="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold text-gray-900">
                Welcome {username}
              </h1>
            </div>
          </header>
          <main>
            <div class="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
              <button
                onClick={onLogOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Log Out
              </button>
              <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
