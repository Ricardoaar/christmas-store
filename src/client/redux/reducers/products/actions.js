import { createAsyncThunk } from "@reduxjs/toolkit";

export const FETCH_USERS = "@users/fetchUsers";

export const fetchUsersData = createAsyncThunk(FETCH_USERS, async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "John"
        },
        {
          id: 2,
          name: "Jane"
        }
      ]);
    }, 1000);
  });
});
