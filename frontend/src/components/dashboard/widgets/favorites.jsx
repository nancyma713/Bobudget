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

  componentDidMount() {
    this.props.fetchBobaItems();
    this.props.fetchUser()
      .then(() => this.setState({ bobaId: ' ' }));
    this.props.fetchFavorites(this.props.currentUser.id);
  }

  handleFavorite() {
    // e.preventDefault();
    // let favorite = {
    //   userId: this.props.currentUser.data.user._id,
    //   bobaItemId: this.state.bobaId
    // }

    this.props.removeFavorite(this.state.bobaId)
      .then(() => window.location.reload());

    // this.props.createFavorite(favorite)
    // .then( () => this.setState({ bobaId: '' }));
  }

  // handleClick(id) {
  //   this.setState({bobaId: id}, 
  //     () => this.handleFavorite());
  //   // this.handleFavorite();
  // }

  // favoriteButton(id) {
  //   return (
  //     <button onClick={(this.handleFavorite)}>
  //       <i className="far fa-heart"></i>
  //     </button>
  //   );
  // }

  handleDelete(id) {
    this.setState({ bobaId: id },
      () => this.handleFavorite());
  }

  render() {
    // const { bobas } = this.props;
    // console.log(this.state);

    // if (!bobas.data) return null;

    // const bobaList = bobas.data.map(boba => {
    //   return (
    //     <li key={`fav-${boba.name}-${boba.store}`}>
    //       {boba.name}
    //       <button onClick={() => this.handleClick(boba._id)}><i className="far fa-heart" /></button>
    //     </li>
    //   )
    // })

    const { favorites, bobas } = this.props;

    if (!favorites) return null;
    if (!bobas.data) return null;


    const favoritesList = favorites.map(fav => {
      if (bobas.data) {
        for (let i = 0; i < bobas.data.length; i++) {
          let boba = bobas.data[i];
          if (fav.bobaItemId === boba._id) {
            return <li key={`fav-${boba._id}`}>
              {boba.name}
              <button onClick={() => this.handleDelete(fav._id)}><i className="far fa-heart" /></button>
            </li>
          }
        }
      }
    });

    return (
      <div className="favorites-container">
        <div className="favorites">
          <h3>My Favorites</h3>
          <ul>
            {favoritesList}
          </ul>
        </div>
      </div>);
  }
}

export default Favorites;