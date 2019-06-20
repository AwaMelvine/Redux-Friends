import React, { Component } from "react";
import Friend from "./Friend";

class FriendsList extends Component {
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
export default FriendsList;
