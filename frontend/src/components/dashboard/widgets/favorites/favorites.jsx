import React from "react";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      bobaName: "",
      favId: ""
    }

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeFavorite(this.state.favId).then(() => 
      this.props.fetchFavorites(this.props.currentUser.id)).then(() => 
      this.setState({ bobaName: "", favId: "", modal: false })
    );
  }

  openModal(bobaName, favId) {
    this.setState({ 
      modal: true,
      bobaName: bobaName,
      favId: favId,
    });
  }

  closeModal() {
    this.setState({ 
      modal: false,
      bobaName: "",
      favId: "",
    });
  }

  render() {
    const { favorites, bobas } = this.props;

    if (!favorites || !bobas.data) return null;

    const favoritesList = favorites.map((fav) => {
      if (bobas.data) {
        for (let i = 0; i < bobas.data.length; i++) {
          let boba = bobas.data[i];

          if (fav.bobaItemId === boba._id) {
            return (
              <li className="fav" key={`fav-${boba._id}-${fav._id}`}>
                {boba.name}
                <button onClick={() => this.openModal(boba.name, fav._id)}>
                  <i className="fas fa-heart" />
                </button>
              </li>
            );
          } 
        }
      }

      return null;
    });

    return (
      <ul>
        {favoritesList}

        {this.state.modal ? <div className="modal-background">
          <div id="fav-pop-up">
            <p>Are you sure you want to remove</p>
            <div id="fav-bold">{this.state.bobaName}</div> 
            <p>from your favorites?</p>

            <button onClick={() => this.handleRemove()}>Yes</button>
            <button onClick={() => this.closeModal()}>No</button>
          </div>
        </div> : null}
      </ul>
    );
  }
}

export default Favorites;