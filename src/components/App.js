import React from "react";
import Search from "./search/Search";
import axios from "axios";
import Image from "./image/Image"

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchImage = async (search) => {
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: search,
      },
      headers: {
        Authorization: "Client-ID wjH6j7Ch9dFCzyZptpaYAPpwSVrzfn10uCXs8vi0QcI",
      },
    });

    this.setState({
      images: result.data.results,
    });
  };

  render() {
    return (
      <div>
        <Search onSearchImage={this.onSearchImage} />
        <div className="image-styler">
        <Image imgSrc={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
