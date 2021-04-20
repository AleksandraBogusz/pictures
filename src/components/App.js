import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          Authorization:
            "YOUR_ID",
        },
        params: {
          query: term,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ images: response.data.results });
      }).catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
