import { connect } from "react-redux";
import Search from "./search";
import {
  fetchBobaItems,
  fetchStoreBobaItems,
} from "../../actions/boba_item_actions";

const msp = (state) => {
  return {
    bobas: state.entities.bobaItems,
    stores: state.entities.stores,
  };
};

const mdp = (dispatch) => ({
  fetchBobaItems: () => dispatch(fetchBobaItems()),
  fetchStoreBobaItems: () => dispatch(fetchStoreBobaItems()),
});

export default connect(msp, mdp)(Search);
