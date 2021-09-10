import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, fetchUserBytoken, clearState } from "./UserSlice";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

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

  return (
    <Layout className="">
      {isFetching ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome {username}
          </h1>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
