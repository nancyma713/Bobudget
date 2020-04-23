import { connect } from "react-redux";
import Search from "./search";
import { fetchBobaItems, searchBobas } from "../../actions/boba_item_actions";

const msp = (state) => {
  return {
    bobas: state.entities.bobaItems,
    stores: state.entities.stores,
  };
};

const mdp = (dispatch) => ({
  fetchBobaItems: () => dispatch(fetchBobaItems()),
  searchBobas: (bobaName) => dispatch(searchBobas(bobaName)),
});

export default connect(msp, mdp)(Search);
