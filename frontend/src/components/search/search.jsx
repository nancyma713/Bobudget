import React from "react";
import Map from '../map/map_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      location: "",
      name: "",
    };
    // this.bobaLi = [];

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            <li key={item._id}>{item.name} is available at{" "}{item.store.name}</li>
          );
        }


      })
    }

    // debugger
    return (
      <div className="green-container">
        <div className="search-bar-container">
          <div className="search-bar">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Search Bobas"
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="search-results">{bobaLi ? bobaLi : null}</div>
        </div>

        <Map storeLi={storeLi} />
      </div>
    );
  }
}

export default Search;
