import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  constructor(props) {
    super(props);
  }
  renderSongs() {
    return this.props.data.songs.map((song, key) => {
      return (
        <li key={key} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="collection">
        {this.props.data.songs ? this.renderSongs() : "Loading..."}
      </ul>
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
