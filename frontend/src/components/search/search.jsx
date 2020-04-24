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
        // debugger
        if (item.store) {
          storeLi.push(item.store)

          return (
            <li key={item._id}>{item.name} is available at{" "}{item.store.name} <button onClick={() => this.handleClick(item._id)}><i className="far fa-heart" /></button></li>
          );
        }
      })
    }

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
            {bobaLi ? bobaLi : <p>No search results <i className="far fa-frown" /></p>}
          </div>
        </div>
        <Map storeLi={storeLi} />
      </div>
    );
  }
}

export default Search;
