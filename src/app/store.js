import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/User/UserSlice";
import { appoinmentSlice } from "../features/Appointment/AppoinmentSlice";
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    appoinment: appoinmentSlice.reducer,
  },
});
