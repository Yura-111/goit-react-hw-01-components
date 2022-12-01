import styled from "styled-components";

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: space-evenly;
  background-color:  rgb(248, 248, 237);
  border: 1px solid rgb(194, 191, 191);
  border-radius: 3px;
`;

export const FriendListSpan = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  border-radius: 4px;
`;


export const FriendListName = styled.p`
  font-weight: bold;
`; 