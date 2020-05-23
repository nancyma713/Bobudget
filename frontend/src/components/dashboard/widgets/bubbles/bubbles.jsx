import React from "react";
import "../../../../assets/stylesheets/bubbles.scss";

class Bubbles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBobaItems();
  }

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  render() {
    let bobaSample;

    if (this.props.bobas.data) {
      bobaSample = this.props.bobas.data[
        Math.floor(Math.random() * this.props.bobas.data.length)
      ];
    }

    return (
      <>
        <ul id="bubbles">
          <li onClick={this.openModal}></li>
          <li onClick={this.openModal}></li>
          <li onClick={this.openModal}></li>
          <li onClick={this.openModal}></li>
          <li onClick={this.openModal}></li>
          <li onClick={this.openModal}></li>
          <li onClick={this.openModal}></li>
          <li onClick={this.openModal}></li>
        </ul>

        {this.state.modal ? (
          <div className="modal-background" onClick={this.closeModal}>
            <div id="boba-pop-up" onClick={(e) => e.stopPropagation()}>
              <i onClick={this.closeModal} className="fas fa-times"></i>
              <div className="bpu-name">{bobaSample.name}</div>

              <div className="bpu-img-container">
                <img src={bobaSample.photoUrl} alt={bobaSample.name} />
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Bubbles;
