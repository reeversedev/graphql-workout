import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  constructor(props) {
    super(props);
  }
  renderSongs() {
    return !this.props.data.loading ? (
      this.props.data.songs.map(song => {
        return (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        );
      })
    ) : (
      <div>Loading...</div>
    );
  }
  render() {
    return <ul className="collection">{this.renderSongs()}</ul>;
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
