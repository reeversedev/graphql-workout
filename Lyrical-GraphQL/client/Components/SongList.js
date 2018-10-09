import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  constructor(props) {
    super(props);
  }
  renderSongs() {
    return !this.props.data.loading ? (
      this.props.data.songs.map((song, key) => {
        return <li key={key}>{song.title}</li>;
      })
    ) : (
      <div>Loading...</div>
    );
  }
  render() {
    return <div>{this.renderSongs()}</div>;
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
