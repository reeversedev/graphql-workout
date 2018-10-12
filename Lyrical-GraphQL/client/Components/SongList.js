import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

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
      <div>
        <ul className="collection">
          {this.props.data.songs ? this.renderSongs() : "Loading..."}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
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
