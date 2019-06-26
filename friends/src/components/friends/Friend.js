import React from "react";
import styled from "styled-components";

const StyledFriend = styled.div`
  width: 20%;
  border: 1px solid #e0e0e0;
  background: #e0e0e0;
  padding: 2rem;
  margin: 0.5rem;
  -webkit-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
`;

const Friend = ({ friend }) => {
  return <StyledFriend>{friend.name}</StyledFriend>;
};

export default Friend;
