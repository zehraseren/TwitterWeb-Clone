import { _setCurrentAccount } from ".";
import store from "../../store";

export const setCurrentAccount = (data) =>
  store.dispatch(_setCurrentAccount(data));
