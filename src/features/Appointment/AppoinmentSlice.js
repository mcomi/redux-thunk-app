import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAppointments = createAsyncThunk(
  "appoinments/fetchAppointments",
  async (thunkAPI) => {
    console.log("llego a metodo api ");
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://notary-server.mauaznar.com/appointments?startDate=2021-09-09",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      console.log(data);

      if (data) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const appoinmentSlice = createSlice({
  name: "appoinment",
  initialState: {
    appointments: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: {
    [fetchAppointments.fulfilled]: (state, { payload }) => {
      console.log("payload appoinments", payload);
      state.appoinments = payload;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [fetchAppointments.rejected]: (state, { payload }) => {
      console.log("payload rejected", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = "Error";
    },
    [fetchAppointments.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = appoinmentSlice.actions;

export const appoinmentSelector = (state) => state.appoinment;
