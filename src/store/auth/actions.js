import { _setCurrentAccount } from "../auth";
import store from "../../store";

export const setCurrentAccount = (data) =>
  store.dispatch(_setCurrentAccount(data));
