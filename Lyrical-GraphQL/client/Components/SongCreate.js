import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.props);

    this.props
      .mutate({
        variables: {
          title: this.state.title
        }
      })
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            type="text"
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
export default graphql(mutation)(SongCreate);
