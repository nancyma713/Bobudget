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
      .then(() => window.location.reload());
  }

  handleDelete(id) {
    this.setState({ bobaId: id },
      () => this.handleFavorite());
  }

  render() {
    const { favorites, bobas } = this.props;

    if (!favorites) return null;
    if (!bobas.data) return null;

    let favArr = [];
    let bobaArr = [];
    favorites.forEach(fav => {
      if (!bobaArr.includes(fav.bobaItemId)) {
        bobaArr.push(fav.bobaItemId);
        favArr.push(fav);
      }
    });

    const favoritesList = favArr.map(fav => {
      if (bobas.data) {
        for (let i = 0; i < bobas.data.length; i++) {
          let boba = bobas.data[i];
          if (fav.bobaItemId === boba._id) {

            return (
              <li className="fav" key={`fav-${boba._id}`}>
                {boba.name}
                <button onClick={() => this.handleDelete(fav._id)}>
                  <i className="fas fa-trash-alt" />
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