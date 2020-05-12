import React from "react";
import Map from '../map/map_container';
import '../../assets/stylesheets/search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      location: "",
      name: "",
      bobaId: ""
    };
    // this.bobaLi = [];

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBobaItems();
    this.props.fetchFavorites();
  }

  update(field) {

    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.searchBobas(this.state.name)
      .then((list) => this.setState({
        searchResult: list
      }))
  }

  handleFavorite() {
    let favorite = this.props.favorites.id;
    if (favorite) {
      this.props.removeFavorite(favorite.id)
        .then(() => this.props.fetchFavorites());
    } else {
        let favorite = {
          userId: this.props.currentUser.data.user._id,
          bobaItemId: this.state.bobaId
        }
      this.props.createFavorite(favorite);
    }
  }

  handleClick(id) {
    this.setState({ bobaId: id },
      () => this.handleFavorite());
  }

  render() {
    let bobaLi;
    let storeLi = [];
    // debugger
    if (this.state.searchResult.items) {
      bobaLi = this.state.searchResult.items.data.map((item) => {
        if (item.store) {
          storeLi.push(item.store)
          return (
            <div className="search-item" key={item._id}>
              <section className="flex-row">
                <div className="search-pic">
                  <img src={item.photoUrl} />
                </div>
                <div className="flex-column">
                  <h2>{item.name}</h2>
                  at {item.store.name}
                </div>
              </section>
              <button onClick={() => this.handleClick(item._id)}>
                <span className="fav-tt">Add to favorites&nbsp;&nbsp;</span>
                <i className="fas fa-plus-square" />
              </button>
            </div>
          );
        }
      })
    };

    if (bobaLi) {
      if (bobaLi.length === 0 ) {
          bobaLi = <p>No search result <i className="far fa-frown" /></p>
      }
    };

    // debugger
    return (
      <div className="search-container">
        <div className="s-left">
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Search Bobas..."
            />
            <button type="submit"><i className="fas fa-search-location" /></button>
          </form>

          <div className="search-results">
            {bobaLi ? bobaLi : <p>Start your search!</p>}
          </div>
        </div>
        <Map storeLi={storeLi} />
      </div>
    );
  }
}

export default Search;
