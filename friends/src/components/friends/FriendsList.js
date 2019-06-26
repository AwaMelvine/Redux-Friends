import React, { Component } from "react";
import { connect } from "react-redux";
import Friend from "./Friend";
import { fetchFriends } from "../../actions/friendsActions";
import styled from "styled-components";

const StyledFriendList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    const { friends } = this.props;
    return (
      <StyledFriendList>
        {friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </StyledFriendList>
    );
  }
}

const mapStateToProps = state => ({ friends: state.friends.friends });

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
