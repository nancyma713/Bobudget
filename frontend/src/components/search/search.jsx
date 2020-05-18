import React from "react";
import Map from './map';
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

    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBobaItems();
    this.props.fetchFavorites(this.props.currentUser.id);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSearch(e) {
    e.preventDefault();

    this.props.searchBobas(this.state.name)
      .then((list) => this.setState({
        searchResult: list
      })
    );
  }

  handleClick(id, add) {
    if (add) {
      this.setState({ bobaId: id },
        () => this.handleAddFavorite());
    } else {
      this.setState({ bobaId: id },
        () => this.handleRemoveFavorite());
    }
  }

  handleAddFavorite() {
    let favorite = {
      userId: this.props.currentUser.id,
      bobaItemId: this.state.bobaId
    }

    this.props.createFavorite(favorite)
      .then(() => this.props.fetchFavorites(this.props.currentUser.id));
  }

  handleRemoveFavorite() {
    this.props.removeFavorite(this.state.bobaId)
      .then(() => this.props.fetchFavorites(this.props.currentUser.id));
  }

  render() {
    const { favorites } = this.props;

    let bobaLi;
    let storeLi = [];

    if (this.state.searchResult.items) {
      bobaLi = this.state.searchResult.items.data.map((item) => {
        if (item.store) {
          storeLi.push(item.store);
        }

        let favButton = <button onClick={() => this.handleClick(item._id, true)}>
          <i className="far fa-heart"></i>
        </button>;

        for (let i = 0; i < favorites.length; i++) {
          let fav = favorites[i];

          if (fav.bobaItemId === item._id) {
            favButton = <button onClick={() => this.handleClick(fav._id, false)}>
              <i className="fas fa-heart"></i>
            </button>

            break;
          }
        }

        return (
          <div className="search-item" key={item._id}>
            <section className="flex-row">
              <div className="search-pic">
                <img alt={item.name} src={item.photoUrl} />
              </div>
              <div className="flex-column">
                <h2>{item.name}</h2>
                <a target="_blank" rel="noopener noreferrer" href={item.store.mapUrl}>{item.store.name}</a>
              </div>
            </section>
            {favButton}
          </div>
        );
      });
    } 

    if (bobaLi && bobaLi.length === 0) {
      bobaLi = <p>No search result <i className="far fa-frown" /></p>
    };

    return (
      <div className="search-container">
        <div className="s-left">
          <form className="search" onSubmit={this.handleSearch}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Search Bobas..."
            />
            <button type="submit"><i className="fas fa-search-location" /></button>
          </form>

          <div className="search-results">
            <div className="results">
              {bobaLi ? bobaLi : <p>Start your search!</p>}
            </div>
          </div>
        </div>

        <Map storeLi={storeLi} />
      </div>
    );
  }
}

export default Search;
