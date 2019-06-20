import React, { Component } from "react";
import { connect } from "react-redux";
import Friend from "./Friend";
import { fetchFriends } from "../../actions/friendsActions";

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    const { friends } = this.props;
    return (
      <ul>
        {friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({ friends: state.friends });

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
