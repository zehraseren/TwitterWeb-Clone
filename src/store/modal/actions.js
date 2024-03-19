import { _setModal, _removeModal } from "../../store";
import store from "../../store/modal";

export const setModal = (name, data = {}) =>
  store.dispatch(_setModal(name, data));
export const removeModal = () => store.dispatch(_removeModal());
