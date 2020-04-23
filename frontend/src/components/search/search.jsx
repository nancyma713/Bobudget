import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      location: "",
      name: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchBobaItems();
  // }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBobas(this.state.name);
  }

  render() {
    let bobaLi;
    if (this.props.bobas.data) {
      bobaLi = Object.keys(this.props.bobas.data).map((key) => {
        if (this.props.bobas.data[key].store) {
          return (
            <li key={key}>
              {this.props.bobas.data[key].name} is available at{" "}
              {this.props.bobas.data[key].store.name}
            </li>
          );
        }
      });
    }

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

          <div className="search-results">{bobaLi}</div>
        </div>
      </div>
    );
  }
}

export default Search;
