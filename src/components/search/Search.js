import React from "react";
import "./Search.scss";

class Search extends React.Component {
  state = {
    searchText: "",
  };

  getText(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="ui huge icon input search-container">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.getText.bind(this)}
          />
          <i className="search icon"></i>
        </div>
        <div>{this.state.searchText}</div>
      </div>
    );
  }
}

export default Search;
