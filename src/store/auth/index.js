import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "zehraseren",
    avatar:
      "https://pbs.twimg.com/profile_images/1769801180257845248/sGtIgg7K_400x400.jpg",
    fullname: "Zehra Şeren",
  },
  accounts: [
    {
      id: 1,
      username: "zehraseren",
      avatar:
        "https://pbs.twimg.com/profile_images/1769801180257845248/sGtIgg7K_400x400.jpg",
      fullname: "Zehra Şeren",
    },
    {
      id: 2,
      username: "anotherAccount",
      avatar:
        "https://pbs.twimg.com/profile_images/1769801180257845248/sGtIgg7K_400x400.jpg",
      fullname: "Another Account",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _setCurrentAccount, _removeAccount } =
  auth.actions;
export default auth.reducer;
