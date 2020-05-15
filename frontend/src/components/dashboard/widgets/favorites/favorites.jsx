import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bobaId: ''
    }

    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFavorite() {
    this.props.removeFavorite(this.state.bobaId)
      .then(() => this.props.fetchFavorites(this.props.currentUser.id));
  }

  handleDelete(id) {
    this.setState({ bobaId: id },
      () => this.handleFavorite()
    );
  }

  render() {
    const { favorites, bobas } = this.props;

    if (!favorites || !bobas.data) return null;

    const favoritesList = favorites.map(fav => {
      if (bobas.data) {
        for (let i = 0; i < bobas.data.length; i++) {
          let boba = bobas.data[i];

          if (fav.bobaItemId === boba._id) {
            return (
              <li className="fav" key={`fav-${boba._id}`}>
                {boba.name}
                <button onClick={() => this.handleDelete(fav._id)}>
                  <i className="fas fa-heart" />
                </button>
              </li>
            );
          }
        }
      }
    });

    return (
      <ul>
        {favoritesList}
      </ul>
    );
  }
}

export default Favorites;