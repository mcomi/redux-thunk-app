import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAppointments,
  appoinmentSelector,
  clearState,
} from "./AppoinmentSlice";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import { MyCalendar } from "../../components/Calendar";

const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { isSuccess, isError, errorMessage } = useSelector(appoinmentSelector);

  const { appoinments } = useSelector(appoinmentSelector);

  useEffect(() => {
    dispatch(fetchAppointments());
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  return (
    <Layout>
      {appoinments ? (
        <>
          <MyCalendar events={appoinments} />
        </>
      ) : (
        "No appoinments found"
      )}
    </Layout>
  );
};

export default List;
