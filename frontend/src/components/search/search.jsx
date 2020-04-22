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

  componentDidMount() {
    this.props.fetchBobaItems();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchLi = [];

    let bobaArr = this.props.bobas.data;

    for (let i = 0; i < bobaArr.length; i++) {
      if (bobaArr[i].name === this.state.name) {
        searchLi.push(bobaArr[i]);
      }
    }

    this.props.fetchStoreBobaItems().then((items) =>
      items.items.data.forEach((item) => {
        console.log(item);
        console.log(searchLi);
        debugger;
        let temp = searchLi.find(({ _id }) => _id === item.bobaItemId);
        console.log(temp);
      })
    );
  }

  render() {
    if (this.props.bobas.data) {
      const bobaLi = Object.keys(this.props.bobas.data).map((key) => (
        <li key={key}>{this.props.bobas.data[key]}</li>
      ));
    }

    return (
      <div className="green-container">
        <div className="search-bar-container">
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
      </div>
    );
  }
}

export default Search;
