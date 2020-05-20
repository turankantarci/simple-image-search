import React from "react";
import "./Search.scss";

class Search extends React.Component {
  state = {
    searchText: "",
  };

  getText = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  searchImage = (e) => {
    if (e.keyCode === 13 || e.type === "click") {
      this.props.onSearchImage(this.state.searchText);
    }
  };

  render() {
    return (
      <div>
        <div className="ui action input search-container">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.getText}
            onKeyDown={this.searchImage}
          />
          <button onClick={this.searchImage} className="ui icon button">
            <i aria-hidden="true" className="search icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
