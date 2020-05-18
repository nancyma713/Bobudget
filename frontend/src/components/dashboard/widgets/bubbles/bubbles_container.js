import { connect } from "react-redux";
import { fetchBobaItems } from "../../../../actions/boba_item_actions";
import Bubbles from "./bubbles";

const mapStateToProps = (state) => ({
  bobas: state.entities.bobaItems,
  stores: state.entities.stores,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBobaItems: () => dispatch(fetchBobaItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bubbles);
