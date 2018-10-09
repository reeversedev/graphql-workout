import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  constructor(props) {
    super(props);
  }
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    return (
      <React.Fragment>
        {" "}
        <ul className="collection">
          {this.props.data.songs ? this.renderSongs() : "Loading..."}
        </ul>
      </React.Fragment>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
