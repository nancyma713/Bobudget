import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bobaId: ''
    }
    
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchBobaItems();
    this.props.fetchUser()
      .then(() => this.setState({ bobaId: ' '}));
    this.props.fetchFavorites(this.props.currentUser.id);
  }

  handleFavorite() {
    // e.preventDefault();
    let favorite = {
      userId: this.props.currentUser.data.user._id,
      bobaItemId: this.state.bobaId
    }

    this.props.createFavorite(favorite)
      // .then( () => this.setState({ bobaId: '' }));
  }

  handleClick(id) {
    this.setState({bobaId: id}, 
      () => this.handleFavorite());
    // this.handleFavorite();
  }

  // favoriteButton(id) {
  //   return (
  //     <button onClick={(this.handleFavorite)}>
  //       <i className="far fa-heart"></i>
  //     </button>
  //   );
  // }

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

    debugger
    let favoritesList = favorites.map(fav => {
      let favorite;
      if (fav.userId === this.props.currentUser.id) {
        debugger
        (bobas.data).forEach((boba) => {
          debugger
          if (fav.bobaItemId === boba._id) {
            debugger
            favorite = boba.name;
          }
        })
      }
      return (
        <li key={`fav-${fav._id}`}>{favorite}</li>
        )
    });

    return (
      <div className="favorites-container">
        <div className="favorites">
          <h3>My Favorites</h3>
          <ul>
            {/* {bobaList} */}
            {favoritesList}
          </ul>
        </div>
      </div>);
  }
}

export default Favorites;