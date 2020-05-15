import { connect } from "react-redux";
import { fetchBobaItems } from '../../../../actions/boba_item_actions';
import Bubbles from './bubbles';

const msp = (state) => {
  return {
    bobas: state.entities.bobaItems,
    stores: state.entities.stores,
  };
};

const mdp = (dispatch) => ({
  fetchBobaItems: () => dispatch(fetchBobaItems()),
});

export default connect(msp, mdp)(Bubbles);
