// import { CiFaceSmile, CiFaceFrown} from "react-icons/ci";
import {FriendItem, FriendListSpan, AvatarImg, FriendListName} from 'friend_list/FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
    <FriendItem>
        <FriendListSpan>{isOnline}</FriendListSpan>
        {/* {isOnline ? <CiFaceSmile color="dreen" size={24}/> : <CiFaceFrown color="red"/>} */}

        <AvatarImg src={avatar} alt={name} width="48" />
        <FriendListName>{name}</FriendListName>
    </FriendItem>
);
};
